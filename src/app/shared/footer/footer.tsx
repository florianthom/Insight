import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export interface Props {}

export const Footer: React.FC<Props> = (props: Props) => {
    return (
        <footer>
            <div className="footer-color">
                <div className="py-32 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                    <div className="text-white text-base tracking-more-than-wide text-center">KEEP IN TOUCH</div>
                    <div className="pt-16 flex justify-evenly">
                        <a href="https://www.linkedin.com/in/florianthom/" className="pr-4">
                            <Image src="/linkedIn_transparent.png" alt="me" width="32" height="32" />
                        </a>
                        <a href="https://github.com/FlorianTh2" className="pr-4">
                            <Image src="/github_transparent.png" alt="me" width="32" height="32" />
                        </a>
                        <a href="mailto:thom.florian@yahoo.de" className="pr-4">
                            <Image src="/mail_tranparent.png" alt="me" width="32" height="32" />
                        </a>
                        <a href="https://www.linkedin.com/in/florianthom/" className="pr-4">
                            <Image src="/discord_transparent.png" alt="me" width="32" height="32" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="py-8 main-color text-white">
                <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                    <div className="flex justify-evenly">
                        <Link href="/">
                            <a className="whitespace-nowrap">Home</a>
                        </Link>
                        <div className="text-gray-600">|</div>
                        <Link href="/">
                            <a className="whitespace-nowrap">Work & CV</a>
                        </Link>
                        <div className="text-gray-600">|</div>
                        <Link href="/documents">
                            <a className="whitespace-nowrap">Reports & Talks</a>
                        </Link>
                        <div className="text-gray-600">|</div>
                        <Link href="/projects">
                            <a className="">Projects</a>
                        </Link>
                        <div className="text-gray-600">|</div>
                        <Link href="/projects">
                            <a className="">Gear</a>
                        </Link>
                        <div className="text-gray-600">|</div>
                        <Link href="/projects">
                            <a className="">Contact</a>
                        </Link>
                        <div className="text-gray-600">|</div>
                        <Link href="/projects">
                            <a className="">Impressum</a>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
