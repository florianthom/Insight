import { NavBar } from "@/src/app/shared/navbar/navbar";
import { Footer } from "@/src/app/shared/footer/footer";
import React from "react";
import { RepositoryTable } from "@/src/app/projects/repositoryTable/repositoryTable";
import { PersonalWebsiteServicesTable } from "@/src/app/projects/personalWebsiteServicesTable/personalWebsiteServicesTable";
import * as constants from "@/src/app/shared/constants/constants";

interface Props { }

export const Projects: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="bg-white">
                <div className="pt-36 sm:pt-56 pb-32 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
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
                <div className="py-32 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                    <h2 className="text-white text-3xl tracking-headline">WEBSITE TECHNOLOGY STACK</h2>
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
                                    <li>Next.js</li>
                                    <li>React.js</li>
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
                                    <li>.NET 5</li>
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
                                    <li>Ansible</li>
                                    <li>Packer</li>
                                    <li>AWS</li>
                                    <li>IAM</li>
                                    <li>VPC</li>
                                    <li>EKS</li>
                                    <li>NAT</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="pt-24">
                        <div>
                            <h3 className="text-2xl text-white">Services</h3>
                            <div className="pt-8 text-white">
                                <PersonalWebsiteServicesTable></PersonalWebsiteServicesTable>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};
