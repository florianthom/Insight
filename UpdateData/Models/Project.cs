namespace UpdateData.Models;

public class Project:AuditableEntity
{
    public Guid Id { get; set; }
        
    public long ProjectId { get; set; }

    public string Name { get; set; }
        
    public string Description { get; set; }

    public bool Archived { get; set; }
        
    public int forksCount { get; set; }

    public string HtmLUrl { get; set; }
        
    public string Language { get; set; }
        
    public string Licence { get; set; }
        
    public string OwnerName { get; set; }

    public string OwnerHtmlUrl { get; set; }
        
    public long Size { get; set; }

    public int stars { get; set; }

    public int WatchersCount { get; set; }
    
    public Visibility Visibility { get; set; }

    public DateTime ProjectCreatedOn { get; set; }

    public DateTime ProjectUpdatedOn { get; set; }
        
    public string UserId { get; set; }
}