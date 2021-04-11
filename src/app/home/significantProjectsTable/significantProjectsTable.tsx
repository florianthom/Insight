import { NavBar } from "@/src/app/shared/navbar/navbar";
import { Footer } from "@/src/app/shared/footer/footer";
import React from "react";
import { RecordButton } from "@/src/app/reports/recordButton/recordButton";

interface Props {}

export const SignificantProjectsTable: React.FC<Props> = (props: Props) => {
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
                    <tr>
                        <td className="py-4 align-top">Testname</td>
                        <td className="py-4">
                            A small descrioption of the functionallity you can expect. This text is a bit longer asdfa
                            asdfas df asdfasd.
                        </td>
                        <td className="py-4 align-top">Dotnet</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
