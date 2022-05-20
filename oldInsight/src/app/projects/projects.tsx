import { NavBar } from "@/src/app/shared/navbar/navbar";
import { Footer } from "@/src/app/shared/footer/footer";
import React from "react";
import { RepositoryTable } from "@/src/app/projects/repositoryTable/repositoryTable";
import { PersonalWebsiteServicesTable } from "@/src/app/projects/personalWebsiteServicesTable/personalWebsiteServicesTable";

interface Props {}

export const Projects: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="bg-white">
                <div className="pt-56 pb-32 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                    <h2 className="text-black text-3xl tracking-headline">MY SOFTWARE REPOSITORY</h2>
                    <div className="text-base text-black pt-24">
                        My software repository is based on github. There are some private and public repositories. Here
                        is a list of some (public and private) projects with additional information.
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
                        This website and its infrastracture was not just build because i want to had an online presence.
                        This kind of project was meant to create a plattform for all kinds of projects. So its possible
                        to deploy a projects and show the effort online.
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
                                    <li>Redux.js</li>
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
                                    <li>N-Tier-Architecture</li>
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
