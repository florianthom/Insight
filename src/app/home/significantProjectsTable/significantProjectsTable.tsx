import React from "react";
import {
    projectsToShowOnLandingPage,
} from "@/src/app/shared/constants/constants";
import { Project } from "@/src/app/shared/models/Project";
import data from '@/public/static/data/Projects.json';

interface Props {}

export const SignificantProjectsTable: React.FC<Props> = (props: Props) => {

    const projectsData: Project[] = data;

    return (
        <div className="overflow-hidden leading-8 text-black">
            <div className="overflow-x-auto shadow border border-gray-300 md:border-0">
                <table className="block lg:table table-fixed sm:min-w-full divide-y w-full">
                    <thead className="text-left md:text-center">
                    <tr className="divide-x divide-x-gray-400">
                        <td className="px-2 w-2/12 py-4 bg-white text-base font-normal uppercase tracking-wider">
                            Title
                        </td>
                        <td className="px-2 w-8/12 py-4 bg-white text-base font-normal uppercase tracking-wider">
                            Description
                        </td>
                        <td className="px-2 w-2/12 py-4 bg-white text-base font-normal uppercase tracking-wider">
                            Language
                        </td>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                    {projectsData
                        .filter((a: Project) => projectsToShowOnLandingPage.indexOf(a.Name) > -1)
                        .map((b: Project) => (
                            <tr key={b.Id} className="divide-x divide-x-gray-400">
                                <td className="px-2 pt-4 pb-2 whitespace-nowrap overflow-hidden overflow-ellipsis">
                                    <a
                                        href={b.HtmLUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="transition cursor-pointer hover:underline"
                                    >
                                        {b.Name}
                                    </a>
                                </td>
                                <td className="py-4">
                                    <div className="px-2 pt-4 pb-2 whitespace-nowrap overflow-hidden overflow-ellipsis">
                                        {b.Description}
                                    </div>
                                </td>
                                <td className="py-4 align-top">
                                    <div className="px-2 pt-4 pb-2 whitespace-nowrap overflow-hidden overflow-ellipsis">
                                        {b.Language}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
