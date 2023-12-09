import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import * as constants from "@/src/app/shared/constants/constants";
import {
    discord_link,
    email_string,
    github_link,
    linkedin_link,
    twitter_link,
} from "@/src/app/shared/constants/constants";

export interface Props {}

export const Footer: React.FC<Props> = (props: Props) => {
    return (
        <>
            <footer>
                <div className="bg-main-color-light">
                    <div className="py-32 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                        <div className="text-white text-base tracking-headline text-center">KEEP IN TOUCH</div>
                        <div className="pt-16 flex justify-evenly">
                            <a href={linkedin_link} target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="/static/images/linkedIn_transparent.png"
                                    alt="linkedIn-link"
                                    width="32"
                                    height="32"
                                    unoptimized={constants.static_site}
                                />
                            </a>
                            <a href={github_link} target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="/static/images/github_transparent.png"
                                    alt="github-link"
                                    width="32"
                                    height="32"
                                    unoptimized={constants.static_site}
                                />
                            </a>
                            <a href={"mailto:" + email_string} target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="/static/images/mail_tranparent.png"
                                    alt="mail-adresse"
                                    width="32"
                                    height="32"
                                    unoptimized={constants.static_site}
                                />
                            </a>
                            <a href={twitter_link} target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="/static/images/twitter_logo.png"
                                    alt="discordServer-link"
                                    width="32"
                                    height="32"
                                    unoptimized={constants.static_site}
                                />
                            </a>
                            <a href={discord_link} target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="/static/images/discord_transparent.png"
                                    alt="discordServer-link"
                                    width="32"
                                    height="32"
                                    unoptimized={constants.static_site}
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="py-8 bg-main-color text-white">
                    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                        <div className="flex justify-evenly flex-wrap">
                            <Link href="/" className="my-4 min-w-flex-100 text-center hover:underline">
                                Home
                            </Link>
                            <div className="my-4 text-gray-600">|</div>
                            <Link href="/work" className="my-4 min-w-flex-100 text-center hover:underline">
                                Work & CV
                            </Link>
                            <div className="my-4 text-gray-600">|</div>
                            <Link href="/reports" className="my-4 min-w-flex-100 text-center hover:underline">
                                Reports & Talks
                            </Link>
                            <div className="my-4 text-gray-600">|</div>
                            <Link href="/projects" className="my-4 min-w-flex-100 text-center hover:underline">
                                Projects
                            </Link>
                            <div className="my-4 text-gray-600">|</div>
                            <Link href="/gear" className="my-4 min-w-flex-100 text-center hover:underline">
                                Gear
                            </Link>
                            <div className="my-4 text-gray-600">|</div>
                            <Link href="/contact" className="my-4 min-w-flex-100 text-center hover:underline">
                                Contact
                            </Link>
                            <div className="my-4 text-gray-600">|</div>
                            <Link href="/imprint" className="my-4 min-w-flex-100 text-center hover:underline">
                                Imprint
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};
