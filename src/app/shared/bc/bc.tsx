import React from "react";
import Image from "next/image";
import * as constants from "@/src/app/shared/constants/constants";

export interface Props { }

export const BC: React.FC<Props> = (props: Props) => {
    return (
        <>
            <div>
                <div className="m-auto flex max-w-2xl justify-center align-middle font-serif shadow-md bg-noise-texture bg-white outline outline-1 opacity-75">
                    {/* <div className="p-10 sm:p-15 lg:p-20 py-6 px-20"> */}
                    <div className="py-4 sm:py-8 lg:py-12 px-12 sm:px-16 lg:px-28">
                        <div className="flex justify-center text-2xl sm:text-3xl lg:text-4xl tracking-widest uppercase whitespace-nowrap">
                            Florian Thom
                        </div>
                        <div className="py-4">
                            <div className="flex justify-center py-1 uppercase whitespace-nowrap text-xs  sm:text-base">
                                Computer Scientist
                            </div>
                            <div className="flex justify-center py-1 whitespace-nowrap text-xs sm:text-base">
                                florianthom.com
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Image
                                src={"/static/images/raw_qr.svg"}
                                alt="business-card"
                                width={0}
                                height={0}
                                priority={true}
                                style={{ width: "25%", height: "auto" }}
                                unoptimized={constants.static_site}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
