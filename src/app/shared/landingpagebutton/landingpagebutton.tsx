import React from "react";
import Link from "next/link";

export interface Props {
    link: string
    displayName: string
    className?: string
}

export const LandingpageButton: React.FC<Props> = (props: Props) => {
    return (

            <Link href={props.link} className={props.className + " px-4 text-center font-medium tracking-wide transition-colors border-2 border-gray-200 hover:border-gray-400 backdrop-blur-sm bg-main-color drop-shadow-xl bg-opacity-50 text-white py-4 rounded-md text-md lg:text-xl lg:text-2xl whitespace-nowrap"}>
                {props.displayName}
            </Link>

    );
};



