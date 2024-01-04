import React from "react";
import Image from "next/image";
import * as constants from "@/src/app/shared/constants/constants";
import { Showcase } from "../models/Showcase";

export interface Props {
    showcaseData: Showcase,
    imageBorderOffset?: boolean | undefined
}

export const ShowcaseCard: React.FC<Props> = (props: Props) => {
    return (
        <div className="shadow-md transition hover:shadow-lg w-6/6 lg:w-2/6 border-2 border-white hover:border-gray-200 transform">
            <div className={"flex justify-center " + (props.imageBorderOffset ? "p-8" : "")}>
                <Image
                    src={props.showcaseData.imagePath}
                    alt={props.showcaseData.title + " image"}
                    width={0}
                    height={0}
                    // className="w-full h-full object-cover object-top"
                    style={{ width: "200%", height: "200%" }}
                    unoptimized={constants.static_site}
                />
            </div>
            <div className="px-4 p-8 break-words">
                <div className="text-2xl">{props.showcaseData.title}</div>
                <div className="py-6">{props.showcaseData.description}</div>
            </div>
        </div>
    );
};
