// See https://aka.ms/new-console-template for more information
Console.WriteLine("Started updated session.");
await JobRegistrar.CreateJobRegistrar().ExecuteJobs();
Console.WriteLine("Finished updated session.");