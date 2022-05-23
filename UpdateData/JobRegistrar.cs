// See https://aka.ms/new-console-template for more information

using UpdateData;

public class JobRegistrar
{
    private readonly List<IJob> _jobs;

    public static JobRegistrar CreateJobRegistrar()
    {
        return new JobRegistrar();
    }
    
    public JobRegistrar()
    {
        _jobs = new List<IJob>()
        {
            new DocumentManagement(),
            new ProjectManagement()
        };

    }
    public async Task ExecuteJobs()
    {
        foreach (var job in _jobs)
        {
            await job.executeJob();
        }
    }
}