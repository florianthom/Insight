using Octokit;
using UpdateData.Extensions;
using UpdateData.Helper;
using UpdateData.Models;
using Project = UpdateData.Models.Project;

namespace UpdateData;

public class ProjectManagement : IJob
{
    private const string USER_ID = "FLORIAN_THOM";
    private readonly DateTime CURRENT_TIME = DateTime.Now;
    private readonly string _projectsJsonDataPath;
    private readonly List<Project> _localDataContext;

    private readonly GithubSettings _githubSettings;

    private readonly List<string> _forkedProjectsToKeep = new List<string>()
        { "Graphdatabase-InteractionBetweenMembersOfBundestag", "TheCodeNinjas", "PongHTW" };

    public ProjectManagement()
    {
        _projectsJsonDataPath = FileHelper.GetProjectDirPath() + @"/../data/projectsData.json";
        _localDataContext = new List<Project>();
        _localDataContext = FileHelper.ReadJsonFileToObject<Project>(_projectsJsonDataPath);

        _githubSettings = new GithubSettings()
        {
            GithubApiPersonalAccessToken = Environment.GetEnvironmentVariable("GITHUBAPI_PERSONAL_ACCESS_TOKEN")
        };
    }

    public async Task executeJob()
    {
        Console.WriteLine("Execut project-job...");
        await UpdateProjectsAsync();
    }


    public async Task<User> FetchCurrentUser()
    {
        var client = new GitHubClient(new ProductHeaderValue("personal-website"));
        // using personal access token
        // https://docs.github.com/en/github/authenticating-to-github/about-authentication-to-github
        // https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token
        var tokenAuth = new Credentials(_githubSettings.GithubApiPersonalAccessToken);
        client.Credentials = tokenAuth;
        return await client.User.Current();
    }

    public async Task<IEnumerable<Repository>> FetchAllGithubRepositoriesForCurrentUser()
    {
        var client = new GitHubClient(new ProductHeaderValue("personal-website"));
        var tokenAuth = new Credentials(_githubSettings.GithubApiPersonalAccessToken);
        client.Credentials = tokenAuth;
        return await client.Repository.GetAllForCurrent();
    }


    public async Task UpdateProjectsAsync()
    {
        var repositoryUser = await FetchCurrentUser();
        var repositories =
            await FetchAllGithubRepositoriesForCurrentUser();

        var allProjectOfUser = _localDataContext.ToDictionary(a => a.ProjectId);
        var allRemoteProjects = repositories.ToDictionary(a => a.Id);

        foreach (Repository repository in repositories)
        {
            // login == login-name
            if (repository.Owner.Login != repositoryUser.Login ||
                (repository.Fork && !_forkedProjectsToKeep.Contains(repository.Name)) ||
                repository.Visibility == RepositoryVisibility.Private)
            {
                continue;
            }


            Project project = repository.ConvertToProject();
            project.UserId = USER_ID;

            if (allProjectOfUser.ContainsKey(project.ProjectId))
            {
                Project currentlyStoredProject = allProjectOfUser[project.ProjectId];
                project.Id = currentlyStoredProject.Id;
                project.CreatorId = USER_ID;
                project.UpdaterId = USER_ID;
                project.CreatedOn = CURRENT_TIME;
                project.UpdatedOn = CURRENT_TIME;
                // _dataContext.Entry(allProjectOfUser[project.ProjectId]).CurrentValues.SetValues(project);
                currentlyStoredProject.CopyProjectProps(project);
            }
            else
            {
                project.Id = Guid.NewGuid();
                project.CreatorId = USER_ID;
                project.UpdaterId = USER_ID;
                project.CreatedOn = CURRENT_TIME;
                project.UpdatedOn = CURRENT_TIME;
                _localDataContext.Add(project);
            }
        }

        foreach (KeyValuePair<long, Project> entry in allProjectOfUser)
        {
            if (!allRemoteProjects.ContainsKey(entry.Key))
            {
                _localDataContext.Remove(entry.Value);
            }
        }

        FileHelper.WriteObjectToJsonFile(_projectsJsonDataPath, _localDataContext);
    }
}