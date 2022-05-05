import React from "react";
import Image from "next/image";

interface Props {
    image_path: string;
    platform_name: string;
    user_name: string;
    text: string;
    link_string: string;
}

export const PlatformCard: React.FC<Props> = (props: Props) => {
    return (
        <div className="shadow-md transition hover:shadow-lg w-1/2 md:w-1/4 pb-12 md:pb-0">
            <a href={props.link_string} target="_blank" rel="noopener noreferrer">
                <div className="bg-main-color p-8 flex justify-center">
                    <Image
                        className=""
                        src={props.image_path}
                        alt={props.platform_name + "-link"}
                        width="200%"
                        height="200%"
                    />
                </div>
                <div className="px-4 py-8">
                    <div className="text-2xl text-center">{props.platform_name}</div>
                    <div className="pt-2 text-center">- {props.user_name} -</div>
                    <div className="pt-2 text-center">{props.text}</div>
                </div>
            </a>
        </div>
    );
};
