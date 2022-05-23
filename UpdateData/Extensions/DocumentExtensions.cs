using UpdateData.Models;
using File = Google.Apis.Drive.v3.Data.File;

namespace UpdateData.Extensions;

public static class DocumentExtensions
{
    public static void CopyDocumentProps(this Document thisDocument, Document anotherDocument)
    {
        thisDocument.Id = anotherDocument.Id;
        thisDocument.DocumentId = anotherDocument.DocumentId;
        thisDocument.Name = anotherDocument.Name;
        thisDocument.Description = anotherDocument.Description;
        thisDocument.OwnersEmail = anotherDocument.OwnersEmail;
        thisDocument.ThumbnailLink = anotherDocument.ThumbnailLink;
        thisDocument.WebcontentLink = anotherDocument.WebcontentLink;
        thisDocument.WebviewLink = anotherDocument.WebviewLink;
        thisDocument.FileExtension = anotherDocument.FileExtension;
        thisDocument.FullFileExtension = anotherDocument.FullFileExtension;
        thisDocument.Kind = anotherDocument.Kind;
        thisDocument.Md5Checksum = anotherDocument.Md5Checksum;
        thisDocument.Shared = anotherDocument.Shared;
        thisDocument.Size = anotherDocument.Size;
        thisDocument.Version = anotherDocument.Version;
        thisDocument.DocumentCreatedTime = anotherDocument.DocumentCreatedTime;
        thisDocument.UserId = anotherDocument.UserId;
    }
}