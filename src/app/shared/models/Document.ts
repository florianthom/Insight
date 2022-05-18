export interface Document {
    Id?: string;

    DocumentId?: string | null;

    Name?: string | null;

    Description?: string | null;

    OwnersEmail?: string | null;

    ThumbnailLink?: string | null;

    WebcontentLink?: string | null;

    WebviewLink?: string | null;

    FileExtension?: string | null;

    FullFileExtension?: string | null;

    Kind?: string | null;

    Md5Checksum?: string | null;

    Shared?: boolean;

    Size?: number;

    Version?: number;

    DocumentCreatedTime?: string | null;

    UserId?: string | null;

    CreatedOn?: string;

    CreatorId?: string | null;

    UpdatedOn?: string;

    UpdaterId?: string | null;
}
