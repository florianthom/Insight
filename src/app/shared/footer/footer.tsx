import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import * as constants from "@/src/app/shared/constants/constants";

export interface Props {}

export const Footer: React.FC<Props> = (props: Props) => {
    return (
        <footer>
            <div className="footer-color">
                <div className="py-32 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                    <div className="text-white text-base tracking-more-than-wide text-center">KEEP IN TOUCH</div>
                    <div className="pt-16 flex justify-evenly">
                        <a href="https://www.linkedin.com/in/florianthom/" target="_blank" rel="noopener noreferrer">
                            <Image src="/linkedIn_transparent.png" alt="linkedIn-link" width="32" height="32" />
                        </a>
                        <a href="https://github.com/FlorianTh2" target="_blank" rel="noopener noreferrer">
                            <Image src="/github_transparent.png" alt="github-link" width="32" height="32" />
                        </a>
                        <a href={"mailto:" + constants.email} target="_blank" rel="noopener noreferrer">
                            <Image src="/mail_tranparent.png" alt="mail-adresse" width="32" height="32" />
                        </a>
                        <a href="https://discord.gg/quMb9N42Uj" target="_blank" rel="noopener noreferrer">
                            <Image src="/discord_transparent.png" alt="discordServer-link" width="32" height="32" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="py-8 main-color text-white">
                <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                    <div className="flex justify-evenly flex-wrap">
                        <Link href="/">
                            <a className="my-4 min-w-flex-100 text-center whitespace-nowrap hover:underline">Home</a>
                        </Link>
                        <div className="my-4 text-gray-600">|</div>
                        <Link href="/work">
                            <a className="my-4 min-w-flex-100 text-center whitespace-nowrap hover:underline">
                                Work & CV
                            </a>
                        </Link>
                        <div className="my-4 text-gray-600">|</div>
                        <Link href="/reports">
                            <a className="my-4 min-w-flex-100 text-center whitespace-nowrap hover:underline">
                                Reports & Talks
                            </a>
                        </Link>
                        <div className="my-4 text-gray-600">|</div>
                        <Link href="/projects">
                            <a className="my-4 min-w-flex-100 text-center hover:underline">Projects</a>
                        </Link>
                        <div className="my-4 text-gray-600">|</div>
                        <Link href="/gear">
                            <a className="my-4 min-w-flex-100 text-center hover:underline">Gear</a>
                        </Link>
                        <div className="my-4 text-gray-600">|</div>
                        <Link href="/contact">
                            <a className="my-4 min-w-flex-100 text-center hover:underline">Contact</a>
                        </Link>
                        <div className="my-4 text-gray-600">|</div>
                        <Link href="/impressum">
                            <a className="my-4 min-w-flex-100 text-center hover:underline">Impressum</a>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
