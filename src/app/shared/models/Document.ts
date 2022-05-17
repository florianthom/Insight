export interface Document {
    id?: string;

    documentId?: string | null;

    name?: string | null;

    description?: string | null;

    ownersEmail?: string | null;

    thumbnailLink?: string | null;

    webcontentLink?: string | null;

    webviewLink?: string | null;

    fileExtension?: string | null;

    fullFileExtension?: string | null;

    kind?: string | null;

    md5Checksum?: string | null;

    shared?: boolean;

    size?: number;

    version?: number;

    documentCreatedTime?: string | null;

    userId?: string | null;

    createdOn?: Date;

    creatorId?: string | null;

    updatedOn?: Date;

    updaterId?: string | null;
}
