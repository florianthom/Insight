import React from "react";
import Link from "next/link";
import { RecordTag } from "@/src/app/shared/recordTag/recordTag";
import { Document } from "@/src/openapi_models/models/Document";

interface Props {
    document: Document;
}

export const RecordButton: React.FC<Props> = (props: Props) => {
    return (
        <div className="transition bg-white text-main-color border border-main-color py-2 px-4 cursor-pointer rounded shadow hover:bg-main-color hover:text-white active:bg-main-color-light">
            <Link href="/">
                <a className="">
                    <div className="flex justify-between">
                        <div className="p-4">
                            <div className="text-2xl uppercase">{props.document.name}</div>
                            <br />
                            <RecordTag tagName="tagNameTest"></RecordTag>
                        </div>
                        <div className="pr-16 flex justify-center items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-16 w-16"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="gray"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    );
};
