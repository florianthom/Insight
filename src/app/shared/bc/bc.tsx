import React from "react";
import Image from "next/image";

export interface Props {}

export const BC: React.FC<Props> = (props: Props) => {
    return (
        <>
            <div>
                <div className="m-auto flex max-w-2xl justify-center align-middle font-serif shadow-md bg-noise-texture bg-white outline outline-1 opacity-75">
                    <div className="p-20">
                        <div className="text-2xl tracking-widest uppercase">Florian Thom</div>
                        <div className="py-4">
                            <div className="flex justify-center py-1 uppercase">Computer Scientist</div>
                            <div className="flex justify-center py-1">florianthom.io</div>
                        </div>
                        <div className="flex justify-center">
                            <Image
                                className=""
                                src={"/static/images/raw_qr.svg"}
                                alt="business-card"
                                width="100%"
                                height="100%"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
