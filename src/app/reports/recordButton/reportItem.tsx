import React from "react";
import Link from "next/link";
import { RecordTag } from "@/src/app/shared/recordTag/recordTag";
import { Document } from "@/src/openapi_models/models/Document";
import Image from "next/image";

interface Props {
    document: Document;
}

export const ReportItem: React.FC<Props> = (props: Props) => {
    return (
        <div className="transition bg-white text-main-color shadow-inner border border-main-color py-2 px-4 cursor-pointer rounded shadow hover:bg-main-color hover:text-white active:bg-main-color-light">
            <div className="grid grid-cols-12">
                <div className="col-span-11">
                    <a href={props.document.webviewLink} target="_blank" rel="noopener noreferrer">
                        <div className="text-center">
                            <Image
                                src={props.document.thumbnailLink}
                                className="object-cover object-top"
                                alt={"thumbnail: " + props.document.name}
                                width={600}
                                height={400}
                                priority={true}
                                quality={100}
                            />
                        </div>
                        <div className="p-4">
                            <div className="text-2xl uppercase">
                                {props.document.name.replace("." + props.document.fileExtension, "")}
                            </div>
                            <br />
                            <RecordTag tagName={"." + props.document.fileExtension}></RecordTag>
                            <RecordTag tagName="german"></RecordTag>
                            <RecordTag tagName={props.document.size.toString() + " bytes"}></RecordTag>
                        </div>
                    </a>
                </div>
                <div className="flex justify-center items-center border-l-2">
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
        </div>
    );
};
