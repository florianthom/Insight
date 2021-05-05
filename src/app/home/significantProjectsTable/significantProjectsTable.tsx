import { NavBar } from "@/src/app/shared/navbar/navbar";
import { Footer } from "@/src/app/shared/footer/footer";
import React, { useState } from "react";
import { RecordButton } from "@/src/app/reports/recordButton/recordButton";
import { firstPage, pageSize, pageSizeLandingPage } from "@/src/app/shared/constants/constants";
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
        <div className="overflow-hidden text-xl leading-8 text-black">
            <table className="table-fixed min-w-full divide-y-2 w-full border-t-2 border-b-2">
                <thead className="text-left">
                    <tr className="border-b-2">
                        <td className="w-2/12 py-4">Title</td>
                        <td className="w-8/12 py-4">Description</td>
                        <td className="w-2/12 py-4">Language</td>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {projectsData.data.map((a: Project) => (
                        <tr>
                            <td className="py-4 align-top">{a.name}</td>
                            <td className="py-4">{a.description}</td>
                            <td className="py-4 align-top">{a.language}</td>
                        </tr>
                    ))}
                    {/*<tr>*/}
                    <td className="py-4 align-top">WIP</td>
                    <td className="py-4">WIP</td>
                    <td className="py-4 align-top">WIP</td>
                    {/*</tr>*/}
                </tbody>
            </table>
        </div>
    );
};
