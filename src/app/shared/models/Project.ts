export interface Project {
    id?: string;

    name?: string | null;

    archived?: boolean;

    projectCreatedOn?: string | null;

    description?: string | null;

    forksCount?: number;

    htmLUrl?: string | null;

    projectId?: number;

    language?: string | null;

    licence?: string | null;

    ownerName?: string | null;

    ownerHtmlUrl?: string | null;

    _private?: boolean;

    size?: number;

    stars?: number;

    watchersCount?: number;

    projectUpdatedOn?: string | null;

    visibility?: string | null;

    userId?: string | null;

    createdOn?: string | null;

    creatorId?: string | null;

    updatedOn?: string | null;

    updaterId?: string | null;
}
