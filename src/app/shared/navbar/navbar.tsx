import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export interface Props {}

export const NavBar: React.FC<Props> = (props: Props) => {
    let listener = null;
    const [scrollState, setScrollState] = useState("top");

    const router = useRouter();

    useEffect(() => {
        listener = document.addEventListener("scroll", (e) => {
            var scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= 100) {
                if (scrollState !== "down") setScrollState("down");
            } else {
                if (scrollState !== "top") setScrollState("top");
            }
        });
        return () => {
            document.removeEventListener("scroll", listener);
        };
    }, [scrollState]);

    return (
        <nav
            style={{
                padding: scrollState === "top" ? 16 : 0,
                backgroundColor:
                    scrollState === "top"
                        ? router.pathname === "/" || router.pathname === "/home"
                            ? "rgba(27, 38, 44, 0)"
                            : "rgba(27, 38, 44, 1)"
                        : "rgba(27, 38, 44, 1)",
                // color: scrollState === "top" ? "white" : "blue",
                top: 0,
                right: 0,
                left: 0,
                transition: "background-color 250ms linear, padding 250ms linear",
                position: "fixed",
                overflow: "hidden",
                zIndex: 50,
            }}
        >
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg
                                className="hidden h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        {/*<div className="flex-shrink-0 flex items-center">*/}
                        {/*    <div className="text-white text-xs">FLORIAN THOM</div>*/}
                        {/*</div>*/}
                        <Link href="/">
                            <a className="transition text-white text-base font-medium flex-shrink-0 flex items-center">
                                FLORIAN THOM
                            </a>
                        </Link>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <Link href="/work">
                                    <a className="transition text-white hover:bg-gray-300 hover:bg-opacity-30 hover:text-white px-3 py-2 rounded-md text-base font-medium whitespace-nowrap">
                                        WORK & CV
                                    </a>
                                </Link>
                                <Link href="/documents">
                                    <a className="transition text-white hover:bg-gray-300 hover:bg-opacity-30 hover:text-white px-3 py-2 rounded-md text-base font-medium whitespace-nowrap">
                                        REPORTS & TALKS
                                    </a>
                                </Link>
                                <Link href="/projects">
                                    <a className="transition text-white hover:bg-gray-300 hover:bg-opacity-30  hover:text-white px-3 py-2 rounded-md text-base font-medium">
                                        PROJECTS
                                    </a>
                                </Link>
                                <Link href="/projects">
                                    <a className="transition text-white hover:bg-gray-300 hover:bg-opacity-30 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                                        GEAR
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden sm:block sm:ml-6">
                        <Link href="/impressum">
                            <a className="transition text-white hover:bg-gray-300 hover:bg-opacity-30 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                                CONTACT
                            </a>
                        </Link>
                        <Link href="/impressum">
                            <a className="transition text-white hover:bg-gray-300 hover:bg-opacity-30 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                                IMPRESSUM
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};
