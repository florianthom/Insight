import React, { } from "react";
import Link from "next/link";
import {
    discord_link,
    email_string,
    github_link,
    linkedin_link,
    twitter_link,
} from "@/src/app/shared/constants/constants";
import { LandingpageSocialmediaButton } from "../landingpageSocialmediaButton/landingpageSocialmediaButton";
import * as constants from "@/src/app/shared/constants/constants";
import Image from "next/image";


export interface Props { }

export const Footer: React.FC<Props> = (props: Props) => {
    return (
        <>
            <footer>
                <div className="bg-main-color-light">
                    <div className="py-32 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                        <div className="flex justify-center">
                            <Image
                                src={"/static/images/florianthom_koenigsberg_white_withslogan.svg"}
                                alt="florian thom logo"
                                width={0}
                                height={0}
                                className="w-64 sm:w-96"
                                priority={true}
                                quality={100}
                                unoptimized={constants.static_site}
                            />
                        </div>
                        <div className="text-white text-base tracking-headline text-center py-12 pt-28">KEEP IN TOUCH</div>
                        <div className="flex justify-evenly">
                            <LandingpageSocialmediaButton link={linkedin_link} size={32} iconPath={"/static/images/linkedIn_transparent.png"} />
                            <LandingpageSocialmediaButton link={github_link} size={32} iconPath={"/static/images/github_transparent.png"} />
                            <LandingpageSocialmediaButton link={"mailto:" + email_string} size={32} iconPath={"/static/images/mail_tranparent.png"} />
                            <LandingpageSocialmediaButton link={twitter_link} size={32} iconPath={"/static/images/x_logo_transparent.png"} />
                            <LandingpageSocialmediaButton link={discord_link} size={32} iconPath={"/static/images/discord_transparent.png"} />
                        </div>
                    </div>
                </div>
                <div className="py-8 bg-main-color text-white">
                    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                        <div className="flex justify-evenly flex-wrap">
                            <Link href="/" className="m-4 min-w-flex-100 text-center hover:underline">
                                Home
                            </Link>
                            <div className="my-4 text-gray-600">|</div>
                            <Link href="/work" className="m-4 min-w-flex-100 text-center hover:underline">
                                Work & REFERENCES
                            </Link>
                            <div className="my-4 text-gray-600">|</div>
                            <Link href="/reports" className="m-4 min-w-flex-100 text-center hover:underline">
                                Reports & Talks
                            </Link>
                            <div className="my-4 text-gray-600">|</div>
                            <Link href="/projects" className="m-4 min-w-flex-100 text-center hover:underline">
                                Projects & CV
                            </Link>
                            <div className="my-4 text-gray-600">|</div>
                            <Link href="/contact" className="m-4 min-w-flex-100 text-center hover:underline">
                                Contact
                            </Link>
                            <div className="my-4 text-gray-600">|</div>
                            <Link href="/imprint" className="m-4 min-w-flex-100 text-center hover:underline">
                                Imprint
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};
