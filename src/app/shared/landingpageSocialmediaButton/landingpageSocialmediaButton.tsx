import React from "react";
import Image from "next/image";
import * as constants from "@/src/app/shared/constants/constants";
import Link from "next/link";

export interface Props {
    iconPath: string
    link: string
    size: number
}

export const LandingpageSocialmediaButton: React.FC<Props> = (props: Props) => {
    return (
        <Link href={props.link} target="_blank" rel="noopener noreferrer" className="pr-4 sm:pr-6">
            <Image
                src={props.iconPath}
                alt="social media button"
                width={props.size}
                height={props.size}
                priority={true}
                quality={25}
                unoptimized={constants.static_site}
            />
        </Link>
    );
};
