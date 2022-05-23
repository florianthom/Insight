﻿using File = Google.Apis.Drive.v3.Data.File;

namespace UpdateData.Extensions;

public static class GoogleFileExtensions
{
    public static UpdateData.Models.Document ConvertToDocument(this File file)
    {
        var document = new UpdateData.Models.Document()
        {
            DocumentId = file.Id,
            Name = file.Name,
            Description = file.Description,
            OwnersEmail = file.Owners?[0]?.EmailAddress,
            // thumbnailLink does change over time
            // file.ThumbnailLink
            // solution: https://stackoverflow.com/a/31504086/11244995
            //    - use this specific link (i guess to trigger generation of thumbnail)
            //    - use "sz"-Parameter to control the size of the image
            ThumbnailLink = "https://drive.google.com/thumbnail?authuser=0&sz=w800&id=" + file.Id,
            WebcontentLink = file.WebContentLink,
            WebviewLink = file.WebViewLink,
            FileExtension = file.FileExtension,
            FullFileExtension = file.FullFileExtension,
            Kind = file.Kind,
            Md5Checksum = file.Md5Checksum,
            Shared = file.Shared,
            Size = file.Size,
            Version = file.Version,
            DocumentCreatedTime = file.CreatedTime
        };
        return document;
    }
}