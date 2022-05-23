using UpdateData.Models;
using File = Google.Apis.Drive.v3.Data.File;

namespace UpdateData.Extensions;

public static class ProjectExtensions
{
    public static void CopyProjectProps(this Project thisProject, Project anotherProject)
    {
        thisProject.Id = anotherProject.Id;
        thisProject.ProjectId = anotherProject.ProjectId;
        thisProject.Name = anotherProject.Name;
        thisProject.Description = anotherProject.Description;
        thisProject.Archived = anotherProject.Archived;
        thisProject.forksCount = anotherProject.forksCount;
        thisProject.HtmLUrl = anotherProject.HtmLUrl;
        thisProject.Language = anotherProject.Language;
        thisProject.Licence = anotherProject.Licence;
        thisProject.OwnerName = anotherProject.OwnerName;
        thisProject.OwnerHtmlUrl = anotherProject.OwnerHtmlUrl;
        thisProject.Size = anotherProject.Size;
        thisProject.stars = anotherProject.stars;
        thisProject.WatchersCount = anotherProject.WatchersCount;
        thisProject.Visibility = anotherProject.Visibility;
        thisProject.ProjectCreatedOn = anotherProject.ProjectCreatedOn;
        thisProject.ProjectUpdatedOn = anotherProject.ProjectUpdatedOn;
        thisProject.UserId = anotherProject.UserId;
    }
}