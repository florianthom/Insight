import React, { useState } from "react";
import { useQuery } from "react-query";
import { PagedResponseProject } from "@/src/openapi_models/models/PagedResponseProject";
import { Project } from "@/src/openapi_models/models/Project";
import { firstPage, pageSize } from "@/src/app/shared/constants/constants";
import { BasicSpinner } from "@/src/app/shared/basicSpinner/basicSpinner";
import { defaultQueryFn } from "@/src/app/shared/defaultQueryFunction/defaultQueryFunction";

interface Props {}

export const RepositoryTable: React.FC<Props> = (props: Props) => {
    const [page, setPage] = useState(firstPage);
    const { isLoading, error, data: projectsData } = useQuery<PagedResponseProject, Error>("projectsData", () =>
        fetch("https://localhost:5000/api/v1" + "/projects?pagesize=" + pageSize + "&pagenumber=" + page).then((res) =>
            res.json(),
        ),
    );

    const { data } = useQuery<PagedResponseProject, Error>("/projects", defaultQueryFn);
    console.log("hi");
    console.log(data);

    // function queryFunction(a, b, c) {
    //     return () =>
    //         fetch("https://localhost:5000/api/v1" + "/projects?userid=" + a + "&pagesize=" + b + "&pagenumber=" + c);
    // }
    // const { isLoading, error, data } = useQuery("projectsData", queryFunction(userId, "3", "1"));

    // if (isLoading) {
    // }
    return (
        <div className="shadow border border-gray-300 overflow-hidden">
            <table className="table-fixed min-w-full divide-y w-full">
                <thead className="text-center">
                    <tr className="divide-x divide-x-gray-200 bottom-box-shadow">
                        <th className="bg-white w-2/12 px-6 py-3 text-base font-normal uppercase tracking-wider">
                            Title
                        </th>
                        <th className="bg-white w-6/12 px-6 py-3 text-base font-normal uppercase tracking-wider">
                            Description
                        </th>
                        <th className="w-2/12 px-6 py-3 text-base font-normal uppercase tracking-wider">Language</th>
                        <th className="w-2/12 px-6 py-3 text-base font-normal uppercase tracking-wider whitespace-nowrap">
                            Created at
                        </th>
                    </tr>
                </thead>
                <tfoot>
                    <tr className="bottom-box-shadow">
                        <td colSpan={4}>
                            <div className="flex justify-between items-center">
                                <button className="bg-gray-100 hover:bg-gray-200 border py-4 m-1 w-3/12">
                                    Previous
                                </button>
                                <div>
                                    <span>Page X of Y</span>
                                </div>
                                <button className="bg-gray-100 hover:bg-gray-200 border py-4 m-1 w-3/12">Next</button>
                            </div>
                        </td>
                    </tr>
                </tfoot>
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
                        projectsData?.data?.map((a: Project) => (
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
                                <td className="px-2 pt-4 pb-2 whitespace-nowrap">{a.language}</td>
                                <td className="px-2 pt-4 pb-2 whitespace-nowrap">{a.projectCreatedOn.split(" ")[0]}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};
