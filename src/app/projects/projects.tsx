import { NavBar } from "@/src/app/shared/navbar/navbar";
import { Footer } from "@/src/app/shared/footer/footer";
import React from "react";
import { RepositoryTable } from "@/src/app/projects/repositoryTable/repositoryTable";
import { PersonalWebsiteServicesTable } from "@/src/app/projects/personalWebsiteServicesTable/personalWebsiteServicesTable";
import * as constants from "@/src/app/shared/constants/constants";
import { LandingpageButton } from "../shared/landingpagebutton/landingpagebutton";
import Link from "next/link";

interface Props { }

export const Projects: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="bg-white">
                <div className="pt-36 sm:pt-56 pb-32 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                    <h2 className="text-black text-3xl tracking-headline">SOFTWARE REPOSITORY</h2>
                    <div className="text-base text-black pt-24">
                        My software repository is primarily hosted on{" "}
                        <a className="hover:underline" href={constants.github_link} target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                        , encompassing a range of both public and private repositories.
                        I&apos;m proud to present a curated selection of projects below, each accompanied by detailed information to provide you with a comprehensive understanding of my work.
                        These projects reflect a blend of my expertise and dedication to crafting innovative solutions.
                        For access to specific repositories or further information about any project, please don&apos;t hesitate to reach out.
                        I&apos;m committed to sharing insights and collaborating effectively.
                    </div>
                    <div className="pt-24">
                        <RepositoryTable></RepositoryTable>
                    </div>
                </div>
            </div>
            <div className="bg-main-color">
                <div className="py-32 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 text-white">
                    <div className="">
                        <h2 className="text-3xl tracking-headline">Curriculum Vitae</h2>
                        <div className="text-base pt-24">
                            In the past a created my CV.
                            As each company needs a unique set of skills, I usually create a separate CV for each job application.
                            Nevertheless, to provide some first insights I am publishing a general CV here too.
                        </div>
                        <div className="flex justify-evenly pt-24">
                            <Link href={constants.cv_international_link} target="_blank" rel="noopener noreferrer" className="font-medium tracking-wide transition-colors border-2 border-gray-200 hover:border-gray-400 backdrop-blur-sm bg-main-color bg-main-color drop-shadow-xl bg-opacity-50 text-white px-8 sm:px-12 lg:px-24 py-4 rounded-md text-md lg:text-xl lg:text-2xl whitespace-nowrap">
                                CV - International
                                <br />
                                <div className="text-xs pt-2">(without personal data)</div>
                            </Link>
                            <Link href={constants.cv_germany_link} target="_blank" rel="noopener noreferrer" className="font-medium tracking-wide transition-colors border-2 border-gray-200 hover:border-gray-400 backdrop-blur-sm bg-main-color bg-main-color drop-shadow-xl bg-opacity-50 text-white px-8 sm:px-12 lg:px-24 py-4 rounded-md text-md lg:text-xl lg:text-2xl whitespace-nowrap">
                                CV - Germany
                                <br />
                                <div className="text-xs pt-2">(including personal data)</div>
                            </Link>
                        </div>
                    </div>


                    <h2 className="pt-56 text-white text-3xl tracking-headline">WEBSITE TECHNOLOGY STACK</h2>
                    <div className="text-base text-white pt-24">
                        This website is crafted with state-of-the-art technology, employing a robust stack that ensures a seamless user experience and top-notch performance.
                        Each facet of this technology ensemble has been thoughtfully chosen to deliver a secure, responsive, and impeccable user experience.
                        The integration of these technologies aims to ensure a seamless journey for every visitor.
                        Here is an overview of the sophisticated tools and frameworks utilized in its development.
                        Interested in a deeper dive into how these components collaborate to shape a top-tier website?
                        Feel free to inquire for further insights or detailed information!
                    </div>
                    <div className="pt-24 flex justify-between flex-wrap">
                        <div className="my-8">
                            <h3 className="text-2xl text-white">Frontend</h3>
                            <div>
                                <ul className="list-disc text-base text-white list-inside">
                                    <li>Next.js & React.js</li>
                                    <li>TypeScript</li>
                                    <li>React Query</li>
                                    <li>Tailwind CSS</li>
                                </ul>
                            </div>
                        </div>
                        <div className="my-8">
                            <h3 className="text-2xl text-white">Backend</h3>
                            <div>
                                <ul className="list-disc text-base text-white list-inside">
                                    <li>C#</li>
                                    <li>.NET 8</li>
                                    <li>Entity Framework</li>
                                    <li>REST</li>
                                </ul>
                            </div>
                        </div>
                        <div className="my-8">
                            <h3 className="text-2xl text-white">Secruity</h3>
                            <div>
                                <ul className="list-disc text-base text-white list-inside">
                                    <li>JSON Web Token</li>
                                    <li>.NET Identity</li>
                                </ul>
                            </div>
                        </div>
                        <div className="my-8">
                            <h3 className="text-2xl text-white">Database</h3>
                            <div>
                                <ul className="list-disc text-base text-white list-inside">
                                    <li>Postgres</li>
                                </ul>
                            </div>
                        </div>
                        <div className="my-8">
                            <h3 className="text-2xl text-white">DevOps</h3>
                            <div>
                                <ul className="list-disc text-base text-white list-inside">
                                    <li>Docker</li>
                                    <li>Terraform</li>
                                    <li>Packer</li>
                                    <li>AWS VPC</li>
                                    <li>AWS IAM</li>
                                    <li>AWS EKS</li>
                                    <li>AWS NAT</li>
                                    <li>AWS S3</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="pt-12">
                        <div>
                            <h3 className="text-2xl text-white">Services</h3>
                            <div className="pt-8 text-white">
                                <PersonalWebsiteServicesTable />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};
