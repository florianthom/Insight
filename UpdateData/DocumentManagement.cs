using System.Text.Json;
using Google.Apis.Auth.OAuth2;
using Google.Apis.Drive.v3;
using Google.Apis.Services;
using UpdateData.Extensions;
using UpdateData.Helper;
using UpdateData.Models;
using Document = UpdateData.Models.Document;
using File = Google.Apis.Drive.v3.Data.File;

namespace UpdateData;

public class DocumentManagement : IJob
{
    private const string USER_ID = "FLORIAN_THOM";
    private readonly DateTime CURRENT_TIME = DateTime.Now;
    private readonly List<Document> _localDataContext;
    private readonly string _documentsJsonDataPath;

    private readonly GoogleDriveApiSettings _googleDriveAPISettings;

    public DocumentManagement()
    {
        _documentsJsonDataPath = FileHelper.GetProjectDirPath() + @"/../data/documentsData.json";
        _localDataContext = new List<Document>();
        _localDataContext = FileHelper.ReadJsonFileToObject<Document>(_documentsJsonDataPath);

        _googleDriveAPISettings = new GoogleDriveApiSettings()
        {
            type = Environment.GetEnvironmentVariable("GOOGLE_DRIVE_TYPE"),
            project_id = Environment.GetEnvironmentVariable("GOOGLE_DRIVE_PROJECT_ID"),
            private_key_id = Environment.GetEnvironmentVariable("GOOGLE_DRIVE_PRIVATE_KEY_ID"),
            private_key = Environment.GetEnvironmentVariable("GOOGLE_DRIVE_PRIVATE_KEY"),
            client_email = Environment.GetEnvironmentVariable("GOOGLE_DRIVE_CLIENT_EMAIL"),
            client_id = Environment.GetEnvironmentVariable("GOOGLE_DRIVE_CLIENT_ID"),
            auth_uri = Environment.GetEnvironmentVariable("GOOGLE_DRIVE_AUTH_URI"),
            token_uri = Environment.GetEnvironmentVariable("GOOGLE_DRIVE_TOKEN_URI"),
            auth_provider_x509_cert_url = Environment.GetEnvironmentVariable("GOOGLE_DRIVE_AUTH_PROVIDER_X509_CERT_URL"),
            client_x509_cert_url = Environment.GetEnvironmentVariable("GOOGLE_DRIVE_CLIENT_X509_CERT_URL"),
        };
    }

    public async Task executeJob()
    {
        Console.WriteLine("Execute document-job...");
        await UpdateDocumentsAsync();
    }

    public async Task<IList<File>> FetchAllDocumentsWithAllProperties(
        GoogleDriveApiSettings googleDriveAPISettings)
    {
        // Create Drive API service
        var credentials = GoogleCredential.FromJson(JsonSerializer.Serialize(googleDriveAPISettings))
            .CreateScoped(DriveService.ScopeConstants.Drive);
        var service = new DriveService(new BaseClientService.Initializer()
        {
            HttpClientInitializer = credentials
        });

        // Define parameters of request.
        var listFilesRequest = service.Files.List();
        listFilesRequest.PageSize = 1000;
        listFilesRequest.Fields = "*";

        // List files.
        var listFilesResponse = await listFilesRequest.ExecuteAsync();
        return listFilesResponse.Files;
    }

    public async Task UpdateDocumentsAsync()
    {
        var files = await FetchAllDocumentsWithAllProperties(_googleDriveAPISettings);

        // maybe: fetch currently stored files and just adjust them to keep current order
        var allDocumentsOfUser = _localDataContext.ToDictionary(a => a.DocumentId);
        var allRemoteDocuments = files.ToDictionary(a => a.Id);

        foreach (var file in files)
        {
            // the api also sends the folder as a file in the result, but i want only the "real" files
            if (file.Size == null) continue;

            var document = file.ConvertToDocument();
            document.UserId = USER_ID;

            if (allDocumentsOfUser.ContainsKey(document.DocumentId))
            {
                Document oldDocument = allDocumentsOfUser[document.DocumentId];
                document.Id = oldDocument.Id;
                document.CreatorId = USER_ID;
                document.UpdaterId = USER_ID;
                document.CreatedOn = CURRENT_TIME;
                document.UpdatedOn = CURRENT_TIME;
                // _dataContext.Entry(allDocumentsOfUser[document.DocumentId]).CurrentValues.SetValues(document);
                oldDocument.CopyDocumentProps(document);
            }
            else
            {
                document.Id = Guid.NewGuid();
                document.CreatorId = USER_ID;
                document.UpdaterId = USER_ID;
                document.CreatedOn = CURRENT_TIME;
                document.UpdatedOn = CURRENT_TIME;
                _localDataContext.Add(document);
            }
        }

        // delete document in database if it is not in drive-folder
        foreach (KeyValuePair<string, Document> entry in allDocumentsOfUser)
        {
            if (!allRemoteDocuments.ContainsKey(entry.Key))
            {
                _localDataContext.Remove(entry.Value);
            }
        }

        FileHelper.WriteObjectToJsonFile(_documentsJsonDataPath, _localDataContext);
    }
}