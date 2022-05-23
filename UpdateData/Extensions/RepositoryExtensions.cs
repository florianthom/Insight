using Octokit;
using UpdateData.Models;
using Project = UpdateData.Models.Project;

namespace UpdateData.Extensions;

public static class RepositoryExtensions
{
    public static Project ConvertToProject(this Repository repository)
    {
        var project = new Models.Project()
        {
            ProjectId = repository.Id,
            Name = repository.Name,
            Description = repository.Description,
            Archived = repository.Archived,
            forksCount = repository.ForksCount,
            HtmLUrl = repository.HtmlUrl,
            Language = repository.Language,
            Licence = repository.License?.Name,
            OwnerName = repository.Owner.Login,
            OwnerHtmlUrl = repository.Owner.HtmlUrl,
            Size = repository.Size,
            stars = repository.StargazersCount,
            WatchersCount = repository.WatchersCount,
            Visibility = (Visibility) repository.Visibility,
            ProjectCreatedOn = repository.CreatedAt.UtcDateTime,
            ProjectUpdatedOn = repository.UpdatedAt.UtcDateTime
        };
        return project;
    }
}