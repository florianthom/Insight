import React, { useState } from "react";
import { useQuery } from "react-query";
import { Project } from "@/src/app/shared/models/Project";
import * as constants from "@/src/app/shared/constants/constants";
import { BasicSpinner } from "@/src/app/shared/basicSpinner/basicSpinner";
import {
    getNumberPages,
    nextPageAvailable,
    paginate,
    previousPageAvailable
} from "@/src/app/shared/utils/paginationUtils";
import {Document} from "@/src/app/shared/models/Document";
import data from "@/public/static/data/Projects.json";

interface Props {}

export const RepositoryTable: React.FC<Props> = (props: Props) => {
    const projectsData: Project[] = data;
    const [page, setPage] = useState(constants.firstPage);
    const pagedData = paginate(projectsData, constants.pageSize, page)


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
                        {
                            pagedData
                                ?.sort((a, b) =>
                                    new Date(a.projectCreatedOn) >= new Date(b.projectCreatedOn) ? -1 : 1,
                                )
                                .map((a: Project) => (
                                    <tr key={a.Id} className="divide-x divide-gray-100">
                                        <td className="px-2 pt-4 pb-2 whitespace-nowrap overflow-hidden overflow-ellipsis">
                                            <a
                                                href={a.HtmLUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="transition cursor-pointer hover:underline"
                                            >
                                                {a.Name}
                                            </a>
                                        </td>
                                        <td className="px-2 pt-4 pb-2 whitespace-nowrap overflow-hidden overflow-ellipsis">
                                            {a.Description}
                                        </td>
                                        <td className="px-2 pt-4 pb-2 whitespace-nowrap overflow-hidden overflow-ellipsis">
                                            {a.Language}
                                        </td>
                                        <td className="px-2 pt-4 pb-2 whitespace-nowrap overflow-hidden overflow-ellipsis">
                                            {a.Visibility}
                                        </td>
                                        <td className="px-2 pt-4 pb-2 whitespace-nowrap overflow-hidden overflow-ellipsis">
                                            {a.Size}
                                        </td>
                                        <td className="px-2 pt-4 pb-2 whitespace-nowrap overflow-hidden overflow-ellipsis">
                                            {new Date(a.ProjectCreatedOn).toLocaleDateString("en-US")}
                                        </td>
                                    </tr>
                                )
                        )}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between items-center border-l border-r border-b border-gray-300 shadow">
                <button
                    onClick={() => {
                        if (previousPageAvailable(page)) {
                            setPage((a) => a - 1);
                        }
                    }}
                    disabled={!previousPageAvailable(page)}
                    className="bg-gray-100 hover:bg-gray-200 border py-4 m-1 w-3/12 disabled:opacity-50 disabled:cursor-default"
                >
                    Previous
                </button>
                <div className="w-6/12 text-center">
                    <span>
                        Page <span className="bg-white rounded border border-gray-300 px-4 py-2">{page}</span> of{" "}
                        {getNumberPages(projectsData, constants.pageSize)}
                    </span>
                </div>
                <button
                    onClick={() => {
                        if (nextPageAvailable(projectsData, constants.pageSize, page)) {
                            setPage((a) => a + 1);
                        }
                    }}
                    disabled={!nextPageAvailable(projectsData, constants.pageSize, page)}
                    className="bg-gray-100 hover:bg-gray-200 border py-4 m-1 w-3/12 disabled:opacity-50 disabled:cursor-default"
                >
                    Next
                </button>
            </div>
        </div>
    );
};
