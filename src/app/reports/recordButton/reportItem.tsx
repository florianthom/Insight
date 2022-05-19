import React from "react";
import Link from "next/link";
import { RecordTag } from "@/src/app/shared/recordTag/recordTag";
import { Document } from "@/src/app/shared/models/Document";
import Image from "next/image";
import * as constants from "@/src/app/shared/constants/constants"

interface Props {
    document: Document;
}

export const ReportItem: React.FC<Props> = (props: Props) => {
    return (
        <div className="transition bg-white text-main-color shadow-inner border border-main-color py-2 px-4 cursor-pointer rounded shadow hover:bg-main-color hover:text-white active:bg-main-color-light">
            <a href={props.document.WebviewLink} target="_blank" rel="noopener noreferrer">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 sm:col-span-11">
                        <div className="text-center">
                            <Image
                                src={props.document.ThumbnailLink}
                                className="object-cover object-top"
                                alt={"thumbnail: " + props.document.Name}
                                width={600}
                                height={400}
                                priority={true}
                                quality={100}
                                unoptimized={constants.static_site}
                            />
                        </div>
                        <div className="p-4">
                            <div className="underline sm:no-underline text-lg sm:text-2xl uppercase">
                                {props.document.Name.replace("." + props.document.FileExtension, "")}
                            </div>
                            <br />
                            <RecordTag tagName={"." + props.document.FileExtension}></RecordTag>
                            <RecordTag tagName="german"></RecordTag>
                            <RecordTag tagName={props.document.Size.toString() + " bytes"}></RecordTag>
                        </div>
                    </div>
                    <div className="hidden sm:flex justify-center items-center border-l-2">
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
        </div>
    );
};
