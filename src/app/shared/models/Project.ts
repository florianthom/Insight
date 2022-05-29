import { Visibility } from "./Visibility";

export interface Project {
    Id?: string;

    Name?: string | null;

    Archived?: boolean;

    ProjectCreatedOn?: string | null;

    Description?: string | null;

    ForksCount?: number;

    HtmLUrl?: string | null;

    ProjectId?: number;

    Language?: string | null;

    Licence?: string | null;

    OwnerName?: string | null;

    OwnerHtmlUrl?: string | null;

    Size?: number;

    Stars?: number;

    WatchersCount?: number;

    ProjectUpdatedOn?: string | null;

    Visibility?: Visibility | null;

    UserId?: string | null;

    CreatedOn?: string | null;

    CreatorId?: string | null;

    UpdatedOn?: string | null;

    UpdaterId?: string | null;
}
