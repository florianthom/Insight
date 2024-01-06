import { NavBar } from "@/src/app/shared/navbar/navbar";
import { Footer } from "@/src/app/shared/footer/footer";
import React from "react";
import { IndividualWork } from "@/src/app/shared/workIndividualOrGroup/individualWork";
import { GroupWork } from "@/src/app/shared/workIndividualOrGroup/groupWork";
import { cv_germany_link, cv_international_link } from "@/src/app/shared/constants/constants";

interface Props { }

export const Work: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <NavBar></NavBar>
            <div>
                <div className="pt-56 pb-32 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                    <h2 className="text-black text-3xl tracking-headline">WORK</h2>
                    <div className="text-base text-black pt-24">
                        Over the years I have encountered many technologies and gained experience in numerous areas. I
                        love to learn new technologies and to examine them for advantages and disadvantages compared to
                        the already known alternatives. Since some projects could be private, arent even published on
                        github or mentioned at my CV, here is a small snipped of my work.
                    </div>
                    <div className="pt-24">
                        <h3 className="text-2xl text-black">During freetime</h3>
                        <div className="pl-1">
                            <IndividualWork color="black"></IndividualWork>
                        </div>
                        <div className="pt-4">
                            <ul className="list-disc text-base text-black list-inside">
                                <li>
                                    Voyager
                                    <ul className="list-inside pl-4">
                                        <li>Spring Boot Microservice regarding career opportunities</li>
                                    </ul>
                                </li>
                                <li>
                                    Darwin
                                    <ul className="list-inside pl-4">
                                        <li>Basic (Micro-) Service to handle identity management</li>
                                    </ul>
                                </li>
                                <li>
                                    AWS infrastructure
                                    <ul className="list-inside pl-4">
                                        <li>Created cloud-plattform for all kinds of projects</li>
                                    </ul>
                                </li>
                                <li>
                                    Azure Infrastructure
                                    <ul className="list-inside pl-4">
                                        <li>Create cloud-plattform in comparison to AWS</li>
                                    </ul>
                                </li>
                                <li>
                                    Unity ml-agents
                                    <ul className="list-inside pl-4">
                                        <li>Simulation in which a cap has to find its parking slot</li>
                                    </ul>
                                </li>
                                <li>
                                    General AI-forcast projects
                                    <ul className="list-inside pl-4">
                                        <li>stocks</li>
                                        <li>mnist</li>
                                        <li>sinus / cosinus with a controlled amount of pertubations</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-24">
                        <h3 className="text-2xl text-black">
                            Results of course work at university - M.Sc. Computer Science
                        </h3>
                        <div className="pl-1">
                            <GroupWork color="black"></GroupWork>
                        </div>
                        <div className="pt-4">
                            <ul className="list-disc text-base text-black list-inside">
                                <li>
                                    “Conino” Maturity Index
                                    <ul className="list-inside pl-4">
                                        <li>
                                            Portal / Webapp to evaluate the maturity level of your own (future) company
                                            / venture
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    “HealthCareCareer”
                                    <ul className="list-inside pl-4">
                                        <li>
                                            Portal / Webapp to create an own Business Model through leveraging of
                                            Business Model Pattern by Gassmann et al.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    IT Secruity - Handling of Numbers {">"} 2^64
                                    <ul className="list-inside pl-4">
                                        <li>Implemented own BigInteger-Representation through bit-shift-operations</li>
                                    </ul>
                                </li>
                                <li>
                                    NVIDIA - CUDA programming
                                    <ul className="list-inside pl-4">
                                        <li>
                                            The calculation of the gaussian convolution of an image and the conversation
                                            of rgb to ycbcr
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-main-color">
                <div className="py-32 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                    <h3 className="text-2xl text-white">Big Data - Research Group & internship</h3>
                    <div className="pl-1">
                        <GroupWork color="white"></GroupWork>
                    </div>
                    <div className="pt-4">
                        <ul className="list-disc text-base text-white list-inside">
                            <li>
                                AI - libraries
                                <ul className="list-inside pl-4">
                                    <li>Evaluation and Comparison of Tensorflow & MXNet</li>
                                </ul>
                            </li>
                            <li>
                                Neural Network forecasts
                                <ul className="list-inside pl-4">
                                    <li>non-harmonic periodic functions</li>
                                </ul>
                            </li>
                            <li>
                                Real-time streaming
                                <ul className="list-inside pl-4">
                                    <li>Evaluation and Comparison of Spark & Flink</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="pt-24">
                        <h3 className="text-2xl text-white">
                            Results of course work at university - B.A. Computer Science
                        </h3>
                        <div className="pl-1">
                            <GroupWork color="white"></GroupWork>
                        </div>
                        <div className="pt-4">
                            <ul className="list-disc text-base text-white list-inside">
                                <li>
                                    Thesis: “Neuronale Netze - Prognosen zum Caching von Dokumenten”
                                    <ul className="list-inside pl-4">
                                        <li>
                                            Created software-infrastructure in a given hardware-cluster (kubernetes,
                                            spark, hdfs, nfs, ...)
                                        </li>
                                        <li>
                                            Analysed an extend amount of Log-Data of Cern via Spark (e.g. feature
                                            engineering & data preparation)
                                        </li>
                                        <li>
                                            Created RNN to predict if this document has to be cached / will be accesed
                                            later
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    AnSearch Webapp
                                    <ul className="list-inside pl-4">
                                        <li>
                                            Search engine to display current police reports taken from the official
                                            police-website using TF-IDF / Levenshtein-algorithm
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Music API
                                    <ul className="list-inside pl-4">
                                        <li>
                                            Interface to deliver a music list / playlist for a static set of song names
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="py-32 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                    <h2 className="text-black text-3xl tracking-headline">Curriculum Vitae</h2>
                    <div className="text-base text-black pt-24">
                        In the past a created my CV. As each company needs a unique set of skills, I usually create a
                        separate CV for each job application. Nevertheless I created a general CV too, to provide some
                        insights if someone I am not familiar with, wants to get some impressions.
                    </div>
                    <div className="flex justify-evenly pt-24">
                        <a
                            href={cv_international_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition bg-white text-main-color border border-main-color font-bold py-2 px-4 rounded w-1/4 text-center shadow hover:bg-main-color hover:text-white"
                        >
                            CV - International
                            <br />
                            <div className="text-xs pt-2">(without personal data like image)</div>
                        </a>
                        <a
                            href={cv_germany_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition bg-white text-main-color border border-main-color font-bold py-2 px-4 rounded w-1/4 text-center shadow hover:bg-main-color hover:text-white"
                        >
                            CV - Germany
                            <br />
                            <div className="text-xs pt-2">(including personal data like image)</div>
                        </a>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};
