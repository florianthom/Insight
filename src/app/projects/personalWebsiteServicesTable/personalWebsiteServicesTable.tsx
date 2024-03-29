import React from "react";

interface Props { }

export const PersonalWebsiteServicesTable: React.FC<Props> = (props: Props) => {
    return (
        <div className="overflow-hidden text-xl leading-8">
            <table className="table-fixed min-w-full divide-y-2 w-full border-t-2 border-b-2">
                <thead className="text-left font-medium">
                    <tr className="">
                        <td className="w-2/12 py-6">Name</td>
                        <td className="w-3/12 py-6">Endpoint</td>
                        <td className="w-2/12 py-6 hidden md:block">Language</td>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    <tr>
                        <td className="px-2 py-2">frontend</td>
                        <td className="">florianthom.com/</td>
                        <td className="hidden md:block">Next.js & React</td>
                    </tr>
                    <tr>
                        <td className="px-2 py-2">backend</td>
                        <td className="">florianthom.com/api</td>
                        <td className="hidden md:block">Dotnet</td>
                    </tr>
                    <tr>
                        <td className="px-2 py-2">postgres</td>
                        <td className="">internal</td>
                        <td className="hidden md:block">Postgres</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
