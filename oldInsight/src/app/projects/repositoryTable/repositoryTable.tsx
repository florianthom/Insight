import React, { useState } from "react";
import { useQuery } from "react-query";
import { PagedResponseProject } from "@/src/openapi_models/models/PagedResponseProject";
import { Project } from "@/src/openapi_models/models/Project";
import { firstPage, pageSize } from "@/src/app/shared/constants/constants";
import { BasicSpinner } from "@/src/app/shared/basicSpinner/basicSpinner";

interface Props {}

export const RepositoryTable: React.FC<Props> = (props: Props) => {
    const [page, setPage] = useState(firstPage);
    const { isLoading, error, data: projectsData } = useQuery<PagedResponseProject, Error>(
        "/projects?pagesize=" + pageSize + "&pagenumber=" + page,
        { keepPreviousData: true },
    );

    return (
        <div className="overflow-hidden">
            <div className="overflow-x-auto shadow border border-gray-300">
                <table className="block lg:table table-fixed sm:min-w-full divide-y w-full">
                    <thead className="text-center">
                        <tr className="divide-x divide-x-gray-200 bottom-box-shadow">
                            <th className="bg-white w-2/12 py-3 text-base font-normal uppercase tracking-wider">
                                Title
                            </th>
                            <th className="bg-white w-6/12 py-3 text-base font-normal uppercase tracking-wider">
                                Description
                            </th>
                            <th className="w-1/12 py-3 text-base font-normal uppercase tracking-wider">Language</th>
                            <th className="w-1/12 py-3 text-base font-normal uppercase tracking-wider">Visibility</th>
                            <th className="w-1/12 py-3 text-base font-normal uppercase tracking-wider">Size</th>
                            <th className="w-1/12 py-3 text-base font-normal uppercase tracking-wider whitespace-nowrap">
                                Createdat
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {isLoading ? (
                            <tr>
                                <td colSpan={4}>
                                    <div className="flex justify-center px-4 py-4">
                                        <BasicSpinner></BasicSpinner>
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            projectsData?.data
                                ?.sort((a, b) =>
                                    new Date(a.projectCreatedOn) >= new Date(b.projectCreatedOn) ? -1 : 1,
                                )
                                .map((a: Project) => (
                                    <tr key={a.id} className="divide-x divide-gray-100">
                                        <td className="px-2 pt-4 pb-2 whitespace-nowrap overflow-hidden overflow-ellipsis">
                                            <a
                                                href={a.htmLUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="transition cursor-pointer hover:underline"
                                            >
                                                {a.name}
                                            </a>
                                        </td>
                                        <td className="px-2 pt-4 pb-2 whitespace-nowrap overflow-hidden overflow-ellipsis">
                                            {a.description}
                                        </td>
                                        <td className="px-2 pt-4 pb-2 whitespace-nowrap overflow-hidden overflow-ellipsis">
                                            {a.language}
                                        </td>
                                        <td className="px-2 pt-4 pb-2 whitespace-nowrap overflow-hidden overflow-ellipsis">
                                            {a.visibility}
                                        </td>
                                        <td className="px-2 pt-4 pb-2 whitespace-nowrap overflow-hidden overflow-ellipsis">
                                            {a.size}
                                        </td>
                                        <td className="px-2 pt-4 pb-2 whitespace-nowrap overflow-hidden overflow-ellipsis">
                                            {new Date(a.projectCreatedOn).toLocaleDateString("en-US")}
                                        </td>
                                    </tr>
                                ))
                        )}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between items-center border-l border-r border-b border-gray-300 shadow">
                <button
                    onClick={() => {
                        if (projectsData.previousPage) {
                            setPage((a) => a - 1);
                        }
                    }}
                    disabled={projectsData === undefined || !projectsData.previousPage}
                    className="bg-gray-100 hover:bg-gray-200 border py-4 m-1 w-3/12 disabled:opacity-50 disabled:cursor-default"
                >
                    Previous
                </button>
                <div className="w-6/12 text-center">
                    <span>
                        Page <span className="bg-white rounded border border-gray-300 px-4 py-2">{page}</span> of{" "}
                        {projectsData.pagesTotal}
                    </span>
                </div>
                <button
                    onClick={() => {
                        if (projectsData.nextPage) {
                            setPage((a) => a + 1);
                        }
                    }}
                    disabled={projectsData === undefined || !projectsData.nextPage}
                    className="bg-gray-100 hover:bg-gray-200 border py-4 m-1 w-3/12 disabled:opacity-50 disabled:cursor-default"
                >
                    Next
                </button>
            </div>
        </div>
    );
};
