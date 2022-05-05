import { NavBar } from "@/src/app/shared/navbar/navbar";
import { Footer } from "@/src/app/shared/footer/footer";
import React, { useEffect, useState } from "react";
import { qrRedirect } from "@/src/app/shared/constants/constants";
import Image from "next/image";
import Link from "next/link";

interface Props {}

export const QR: React.FC<Props> = (props: Props) => {
    const [redirect, setRedirect] = useState(true);

    const clickAnchor = () => {
        const timer = setTimeout(() => {
            // const anchor = document.getElementById("redirectLinkID");
            // if (anchor) {
            //     let result = anchor.click();
            //     console.log(result);
            //     anchor.style.display = "none";
            //     anchor.removeAttribute("href");
            // }
            if (redirect) {
                window.location.assign(qrRedirect);
            }
        }, 1000);
    };

    useEffect(() => clickAnchor(), []);

    return (
        <div>
            <NavBar></NavBar>
            <div>
                <div className="pt-56 pb-32 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                    <h2 className="text-black text-3xl tracking-headline">MY QR-CODE HOMEPAGE ENDPOINT</h2>

                    <div className="text-base text-black pt-24">
                        YOU SHOULD BE REDIRECTED AUTOMATICALLY.{" "}
                        <a className="underline" href={qrRedirect} target="_blank" rel="noopener noreferrer">
                            IF YOU ARE NOT REDIRECTED AUTOMATICALLY JUST PRESS HERE.
                        </a>
                    </div>

                    <div className="text-base text-black pt-24">
                        Additionally I present my QR-Code here. You will most likely be redirected but in case you can
                        spare some time you can explore my homepage. Below will be the exact same code you just scanned.
                        In case the letters below the code differ, they dont matter at all - the link will be the same.
                        Share it with you friends. Have fun!
                        <div className="py-4">
                            <ul className="list-disc pl-1 leading-8 underline">
                                <li>
                                    <Link href="/">Explore Homepage</Link>
                                </li>
                                <li>
                                    <Link href="/contact">Get in contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-24 p-8 flex justify-center">
                        <a href={qrRedirect}>
                            <Image
                                src={"/static/images/florianthom_qr.svg"}
                                alt="qr-code svg-image"
                                width="400%"
                                height="400%"
                            />
                        </a>
                    </div>
                    <div className="text-base text-black pt-24">
                        In case you want to create you own QR-Country I can recommend{" "}
                        <a className="underline" href={"https://qr.io"} target="_blank" rel="noopener noreferrer">
                            this tool
                        </a>
                        . Its free and it provides you many different options to customize your code.
                    </div>
                </div>
            </div>
            {/*<a id="redirectLinkID" href={qrRedirect} target="_blank" rel="noopener noreferrer"></a>*/}
            <Footer></Footer>
        </div>
    );
};

// <div>
//     Go to:
//     <Link href="/">
//         <a className="transition text-white text-base font-medium flex-shrink-0 flex items-center">Contact Page</a>
//     </Link>
//     <Link href="/">
//         <a className="transition text-white text-base font-medium flex-shrink-0 flex items-center">Home</a>
//     </Link>
// </div>;
