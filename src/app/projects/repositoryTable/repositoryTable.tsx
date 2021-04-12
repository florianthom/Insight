import { NavBar } from "@/src/app/shared/navbar/navbar";
import { Footer } from "@/src/app/shared/footer/footer";
import React from "react";
import { RecordButton } from "@/src/app/reports/recordButton/recordButton";

interface Props {}

export const RepositoryTable: React.FC<Props> = (props: Props) => {
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
                    <tr className="divide-x divide-gray-100">
                        <td className="px-2 pt-4 pb-2 whitespace-nowrap overflow-hidden overflow-ellipsis">
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition cursor-pointer hover:underline"
                            >
                                Car-AI-Unity
                            </a>
                        </td>
                        <td className="px-2 pt-4 pb-2 whitespace-nowrap overflow-hidden overflow-ellipsis">
                            Project to create a car ai by leveraging reinforcement learning. In the initial phase there
                            is a cab generated whos task is to find a parking slot.
                        </td>
                        <td className="px-2 pt-4 pb-2 whitespace-nowrap">C#</td>
                        <td className="px-2 pt-4 pb-2 whitespace-nowrap">2017-01-25</td>
                    </tr>
                    <tr className="divide-x divide-gray-100">
                        <td className="px-2 pt-4 pb-2 whitespace-nowrap overflow-hidden overflow-ellipsis">
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition cursor-pointer hover:underline"
                            >
                                WIP
                            </a>
                        </td>
                        <td className="px-2 pt-4 pb-2 whitespace-nowrap overflow-hidden overflow-ellipsis">WIP</td>
                        <td className="px-2 pt-4 pb-2 whitespace-nowrap">WIP</td>
                        <td className="px-2 pt-4 pb-2 whitespace-nowrap">WIP</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
