import { NavBar } from "@/src/app/shared/navbar/navbar";
import { Footer } from "@/src/app/shared/footer/footer";
import React, { useState } from "react";
import { ReportItem } from "@/src/app/reports/recordButton/reportItem";
import {
    firstPage,
    pageSize,
    pageSizeLandingPage,
    projectsToShowOnLandingPage,
} from "@/src/app/shared/constants/constants";
import { useQuery } from "react-query";
import { PagedResponseProject } from "@/src/openapi_models/models/PagedResponseProject";
import { Project } from "@/src/openapi_models/models/Project";

interface Props {}

export const SignificantProjectsTable: React.FC<Props> = (props: Props) => {
    const [page, setPage] = useState(firstPage);
    const { isLoading, error, data: projectsData } = useQuery<PagedResponseProject, Error>(
        "/projects?pagesize=" + pageSizeLandingPage + "&pagenumber=" + page,
    );

    return (
        <div className="text-xl leading-8 text-black">
            <table className="block overflow-x-auto whitespace-nowrap sm:table table-fixed min-w-full divide-y-2 w-full border-t-2 border-b-2">
                <thead className="text-left">
                    <tr className="border-b-2">
                        <td className="w-2/12 py-4">Title</td>
                        <td className="w-8/12 py-4">Description</td>
                        <td className="w-2/12 py-4">Language</td>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {projectsData.data
                        .filter((a: Project) => projectsToShowOnLandingPage.indexOf(a.name) > -1)
                        .map((b: Project) => (
                            <tr key={b.id}>
                                <td className="py-4 align-top">
                                    <div className="pr-4 whitespace-nowrap overflow-hidden overflow-ellipsis">
                                        <a
                                            href={b.htmLUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="transition cursor-pointer hover:underline"
                                        >
                                            {b.name}
                                        </a>
                                    </div>
                                </td>
                                <td className="py-4">
                                    <div className="pr-4 whitespace-nowrap overflow-hidden overflow-ellipsis">
                                        {b.description}
                                    </div>
                                </td>
                                <td className="py-4 align-top">
                                    <div className="pr-4 whitespace-nowrap overflow-hidden overflow-ellipsis">
                                        {b.language}
                                    </div>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};
