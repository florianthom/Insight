import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export interface Props {}

export const NavBar: React.FC<Props> = (props: Props) => {
    let listener = null;
    const [scrollState, setScrollState] = useState("top");
    const [burgerMenuOpenState, setBurgerMenuOpenState] = useState(false);

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

    function burgerMenuClick(e) {
        setBurgerMenuOpenState(!burgerMenuOpenState);
        console.log(burgerMenuOpenState);
    }

    return (
        <nav
            className={
                "top-0 left-0 right-0 fixed transition-all duration-500 overflow-hidden z-50 " +
                (scrollState === "top" ? "p-4 " : "p-0 ") +
                (scrollState === "top"
                    ? router.pathname === "/" || router.pathname === "/home"
                        ? // tailwind = mobile first (sm != mobile) = ohne prefix = mobile and wenn man dann sagt: "height-1 sm:height-5..."
                          // dann heißt dass, dass mobile=height-1 und alles darüber hinaus = height-5
                          "bg-main-color md:bg-opacity-0"
                        : "bg-main-color "
                    : "bg-main-color ") +
                ""
            }
        >
            <div className="max-w-7xl mx-auto px-3 md:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16 transition-all">
                    <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                        <button
                            onClick={burgerMenuClick}
                            className="inline-flex items-center justify-center p-2 text-gray-400 border rounded hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-expanded="false"
                        >
                            <div className={burgerMenuOpenState ? "hidden" : "" + ""}>
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
                            </div>
                            <div className={burgerMenuOpenState ? "" : "hidden"}>
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </div>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
                        <Link href="/">
                            <a className="transition text-white text-base font-medium flex-shrink-0 flex items-center">
                                FLORIAN THOM
                            </a>
                        </Link>
                        <div className="hidden md:block md:ml-6">
                            <div className="flex space-x-4">
                                <Link href="/work">
                                    <a className="transition text-white hover:bg-gray-300 hover:bg-opacity-30 hover:text-white px-3 py-2 rounded-md text-base font-medium whitespace-nowrap">
                                        WORK & CV
                                    </a>
                                </Link>
                                <Link href="/reports">
                                    <a className="transition text-white hover:bg-gray-300 hover:bg-opacity-30 hover:text-white px-3 py-2 rounded-md text-base font-medium whitespace-nowrap">
                                        REPORTS & TALKS
                                    </a>
                                </Link>
                                <Link href="/projects">
                                    <a className="transition text-white hover:bg-gray-300 hover:bg-opacity-30  hover:text-white px-3 py-2 rounded-md text-base font-medium">
                                        PROJECTS
                                    </a>
                                </Link>
                                <Link href="/gear">
                                    <a className="transition text-white hover:bg-gray-300 hover:bg-opacity-30 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                                        GEAR
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0 hidden md:block md:ml-16">
                        <Link href="/contact">
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
                <div className={"transition-all " + (burgerMenuOpenState ? "max-h-72" : "max-h-0 opacity-0")}>
                    <ul className="text-white text-base font-medium pt-5">
                        <li className="my-4">
                            {" "}
                            <Link href="/work">
                                <a className="transition text-white hover:bg-gray-300 hover:bg-opacity-30 hover:text-white px-3 py-2 rounded-md text-base font-medium whitespace-nowrap">
                                    WORK & CV
                                </a>
                            </Link>
                        </li>
                        <li className="my-4">
                            {" "}
                            <Link href="/reports">
                                <a className="transition text-white hover:bg-gray-300 hover:bg-opacity-30 hover:text-white px-3 py-2 rounded-md text-base font-medium whitespace-nowrap">
                                    REPORTS & TALKS
                                </a>
                            </Link>
                        </li>

                        <li className="my-4">
                            {" "}
                            <Link href="/projects">
                                <a className="transition text-white hover:bg-gray-300 hover:bg-opacity-30  hover:text-white px-3 py-2 rounded-md text-base font-medium">
                                    PROJECTS
                                </a>
                            </Link>
                        </li>

                        <li className="my-4">
                            {" "}
                            <Link href="/gear">
                                <a className="transition text-white hover:bg-gray-300 hover:bg-opacity-30 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                                    GEAR
                                </a>
                            </Link>
                        </li>
                        <li className="my-4">
                            <Link href="/contact">
                                <a className="transition text-white hover:bg-gray-300 hover:bg-opacity-30 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                                    CONTACT
                                </a>
                            </Link>
                        </li>
                        <li className="my-4">
                            <Link href="/impressum">
                                <a className="transition text-white hover:bg-gray-300 hover:bg-opacity-30 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                                    IMPRESSUM
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
