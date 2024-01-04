import React from "react";
import Link from "next/link";

export interface Props { }

export const LandingpageButton: React.FC<Props> = (props: Props) => {
    return (
        <div className="flex justify-center pt-12 sm:pt-16 lg:pt-24">
            <Link href="/#services" className="tracking-wide transition-colors border-2 border-gray-200 hover:border-gray-400 backdrop-blur-sm bg-main-color bg-main-color drop-shadow-xl bg-opacity-50 text-white px-8 sm:px-12 lg:px-24 py-4 rounded-md text-md lg:text-xl lg:text-2xl whitespace-nowrap">
                Service Portfolio
            </Link>
        </div>
    );
};
