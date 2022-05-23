using System.Text.Json;

namespace UpdateData.Helper;

public class FileHelper
{
    public static string GetProjectDirPath()
    {
        return Path.GetFullPath(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, @"..\..\.."));
    }

    public static void WriteObjectToJsonFile<T>(string filePath, List<T> list)
    {
        string jsonString = JsonSerializer.Serialize(list);
        File.WriteAllText(filePath, jsonString);
    }

    public static List<T> ReadJsonFileToObject<T>(string filePath)
    {
        string text;
        List<T> list = new List<T>();
        try
        {
            text = File.ReadAllText(filePath);
            text = "[}";
            list = JsonSerializer.Deserialize<List<T>>(text);
        }
        catch (Exception)
        {
        }
        return list;
    }
}