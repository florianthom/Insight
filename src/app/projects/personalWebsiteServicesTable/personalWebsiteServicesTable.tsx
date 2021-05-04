import React from "react";

interface Props {}

export const PersonalWebsiteServicesTable: React.FC<Props> = (props: Props) => {
    return (
        <div className="overflow-hidden text-xl leading-8">
            <table className="table-fixed min-w-full divide-y-2 w-full border-t-2 border-b-2">
                <thead className="text-left font-medium">
                    <tr className="">
                        <td className="w-2/12 py-6">Name</td>
                        <td className="w-3/12 py-6">Endpoint</td>
                        <td className="w-2/12 py-6">Language</td>
                        <td className="w-5/12 py-6">Description</td>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    <tr>
                        <td className="px-2 py-2">frontend</td>
                        <td>florianthom.io/</td>
                        <td>Next.js + React</td>
                        <td>What you are looking at and you are using right now</td>
                    </tr>
                    <tr>
                        <td className="px-2 py-2">backend</td>
                        <td>florianthom.io/api</td>
                        <td>Dotnet</td>
                        <td>Service which provides some information like data regarding my documents or projects</td>
                    </tr>
                    <tr>
                        <td className="px-2 py-2">postgres</td>
                        <td>private</td>
                        <td>Postgres</td>
                        <td>Database utilizing the infrastructure of amazon - using its RDS-Service</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
