import { NavBar } from "@/src/app/shared/navbar/navbar";
import { Footer } from "@/src/app/shared/footer/footer";
import React from "react";
import { RecordButton } from "@/src/app/reports/recordButton/recordButton";

interface Props {}

export const PersonalWebsiteServicesTable: React.FC<Props> = (props: Props) => {
    return (
        <div className="overflow-hidden text-xl leading-8">
            <table className="table-fixed min-w-full divide-y w-full">
                <thead className="text-left">
                    <tr className="">
                        <td className="w-2/12">Name</td>
                        <td className="w-3/12">Endpoint</td>
                        <td className="w-2/12">Language</td>
                        <td className="w-5/12">Description</td>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    <tr>
                        <td>Testname</td>
                        <td>florianthom.io/test123</td>
                        <td>Dotnet</td>
                        <td>A small descrioption of the functionallity you can expect. This text is a bit longer</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
