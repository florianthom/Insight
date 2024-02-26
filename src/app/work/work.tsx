import { NavBar } from "@/src/app/shared/navbar/navbar";
import { Footer } from "@/src/app/shared/footer/footer";
import React from "react";
import Image from "next/image";
import * as constants from "@/src/app/shared/constants/constants";

interface Props { }

export const Work: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <NavBar></NavBar>
            <div>
                <div className="pt-36 sm:pt-56 pb-32 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 ">
                    <h2 className="text-black text-3xl tracking-headline">WORK & REFERENCES</h2>
                    <div className="text-base text-black pt-24">
                        Discover a snipped of the portfolio of crafted work and successful client projects.
                        The proven track record demonstrates the ability to cultivate strong customer relationships and consistently deliver tailored results.
                        Whether it&apos;s expanding your client base through successful marketing initiatives, developing various applications, or effectively managing cloud environments, the dedication shines through.
                        This kind of end-to-end responsibility can be experienced by you too.
                    </div>
                    <div className="pt-32 pb-32 flex justify-between gap-16 flex-col lg:flex-row">
                        <div>
                            <h3 className="text-2xl text-black">Topnotch</h3>
                            <div className="py-6">
                                <div className="py-4">
                                    Company
                                </div>
                                <div>
                                    Topnotch is a review-sharing platform where users can evaluate competing state of the art offerings.
                                    It serves as a hub for product- and service providers to reach a global audience, while users can discover and
                                    engage with a diverse range of their offerings.
                                    Topnotch implements a platform business model including actors like viewer, advertisers and
                                    content creators like product manufacturers or service providers (companies).
                                    Topnotch tries to build a community ecosystem to address questions like “What is the best off-road automobile” or
                                    “What is the best platform to release on first web, mobile or Desktop”.
                                </div>
                                <div className="py-4 pt-8">
                                    Solution
                                </div>
                                <div>
                                    Topnotch is a company based on entrepreneurial work which emphasizes the hands-on competition of different offerings.
                                    Most of the decisions were open for discussion.
                                    The focus was mainly to work on modeling the business domain and prototyping a first web application.
                                    The infrastructure was set up in the cloud environment for the resulting frontend and backend.
                                    In addition, the SEO was optimized by optimizing the website by targeting selected keywords and
                                    setting up SEO tools especially in the Google environment.
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center my-auto">
                            <Image
                                src={"/static/images/topnotch_logo.svg"}
                                alt="Cover of the work for topnotch"
                                width={0}
                                height={0}
                                className="w-[32rem] lg:w-[128rem]"
                                priority={true}
                                quality={100}
                                unoptimized={constants.static_site}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-main-color text-white">
                <div className="py-32 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                    <div className="flex justify-between gap-16 flex-col lg:flex-row">
                        <div>
                            <h3 className="text-2xl">Lebenserinnerungen e. V.</h3>
                            <div className="py-6">
                                <div className="py-4">
                                    Company
                                </div>
                                <div>
                                    The association promotes personal, verbal and biographical storytelling with storytelling opportunities.
                                    It provides formats and suggestions for shared storytelling and promotes projects that serve this purpose.
                                </div>
                                <div className="py-4 pt-8">
                                    Solution
                                </div>
                                <div>
                                    The customer has an existing html website as a baseline.
                                    Content cannot be added or maintained.
                                    The focus was to address these issues by expanding the website capabilities maintainability.
                                    The website was rebuilt using Wordpress to meet the requirements.
                                    For the page builder Elementor was selected and should help the team to update the website by themself.
                                    The service included the developing on the corporate identity.
                                    Especially the corporate design and the corporate language.
                                    At the end, the team received training on how to add their own content to the Wordpress site.
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center my-auto">
                            <Image
                                src={"/static/images/lebenserinnerungen.png"}
                                alt="Cover of the work for lebenserinnerungen"
                                width={0}
                                height={0}
                                className="w-[32rem] lg:w-[128rem]"
                                priority={true}
                                quality={100}
                                unoptimized={constants.static_site}
                            />
                        </div>
                    </div>
                </div>
                <div className="pb-32 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                    <div className="flex justify-between gap-16 flex-col lg:flex-row">
                        <div>
                            <h3 className="text-2xl">Bitlabs.global</h3>
                            <div className="py-6">
                                <div className="py-4">
                                    Company
                                </div>
                                <div>
                                    Bitlabs is a venture specializing in process and product development and consulting for customers.
                                    They have been providing this service since 2022.
                                    Their goal is to help businesses thrive by providing them with the tools needed to succeed.
                                </div>
                                <div className="py-4 pt-8">
                                    Solution
                                </div>
                                <div>
                                    The customer needed a web presence to get their first customers in the surrounding area.
                                    SEO was an important aspect.
                                    To address the problem the development of a corporate identity for the customer was started.
                                    The website design was refined based on corporate identity.
                                    The website was development utilizing SEO-friendly server-side-rendering (SSR).
                                    The next step was to improve the marketing by further optimizing SEO on the application and web-space level.
                                    Data streams of website analytics were put into place to analyze current visitors and potential customers.
                                    A Google Business Profile/GMB was created.
                                    After only three months the customer was getting 15+ request/month via the developed website alone.
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center my-auto">
                            <Image
                                src={"/static/images/snippetBitlabs.png"}
                                alt="Cover of the work for bitlabs"
                                width={0}
                                height={0}
                                className="w-[32rem] lg:w-[128rem]"
                                priority={true}
                                quality={100}
                                unoptimized={constants.static_site}
                            />
                        </div>
                    </div>
                </div>
            </div >

            <div className="">
                <div className="py-32 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                    <div className="flex justify-between gap-16 flex-col lg:flex-row">
                        <div>
                            <h3 className="text-2xl text-black">Master-Thesis - HTW Berlin, Charité Berlin</h3>
                            <div className="pl-1">
                                <div className="text-xs" style={{ color: "black" }}>
                                    “WEB APPLICATION FOR DEVELOPING PLATFORM-BASED BUSINESS MODELS IN THE CONTEXT OF DIGITAL HEALTH”
                                </div>
                            </div>

                            <div className="py-6">
                                <div className="py-4">
                                    Domain
                                </div>
                                <div>
                                    The thesis covers the development of a web application (self-service) for the collaborative creation
                                    of platform-based business models in the Digital Health sector.
                                    The challenges include establishing the theoretical foundations, focusing on the systematic
                                    of business model development, which entails identifying, describing, and analyzing these models, as well as selecting an appropriate systematic.
                                    Additionally, implementing the business model development process according to the chosen systematic
                                    involves developing algorithms for computer-assisted implementation and integrating these algorithms into the context effectively.
                                </div>
                                <div className="py-4">
                                    Solution
                                </div>
                                <div>
                                    Various approaches to business model development were examined.
                                    One particularly promising systematic for business model development was selected.
                                    IT system and architecture was established according to the selected approach.
                                    That includes designing  algorithms and appropriate domain models for the consistency matrix,
                                    the computation of the strategy bundles, to conduct the cluster analysis and the calculation of the characteristic&apos;s matrix.
                                    The theoretical foundation was implemented through a Proof of Concept (PoC) in the form of a web application.
                                    Finally, the integration of the algorithm and the domain model was successfully achieved.
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center my-auto">
                            <Image
                                src={"/static/images/masterSnippetWebsite.svg"}
                                alt="Snippet master thesis website"
                                width={0}
                                height={0}
                                className="w-[32rem] lg:w-[128rem]"
                                priority={true}
                                quality={100}
                                unoptimized={constants.static_site}
                            />
                        </div>
                    </div>
                    <div className="pt-16 flex justify-between gap-16 flex-col lg:flex-row">
                        <div>
                            <h3 className="text-2xl text-black">Bachelor-Thesis - HTW Berlin, Charité Berlin</h3>
                            <div className="pl-1">
                                <div className="text-xs" style={{ color: "black" }}>
                                    “NEURAL NETWORKS - PREDICTION-BASED CACHING OF DOCUMENTS”
                                </div>
                            </div>
                            <div className="py-6">
                                <div className="py-4">
                                    Domain
                                </div>
                                <div>
                                    The thesis covers the creation and integration of a system that determines whether any given document
                                    will be accessed again within a specified period based on past document accesses.
                                    Scalability investigations are conducted regarding the number of computers utilized.
                                    Challenges encompass three distinct areas.
                                    <ul className="list-disc text-base text-black list-outside pl-8">
                                        <li>Development of the system infrastructure: orchestration of compute nodes for the neural network</li>
                                        <li>Data analysis to get insights of the data: feature engineering for the neural network</li>
                                        <li>Development of a neural network</li>
                                    </ul>
                                </div>
                                <div className="py-4">
                                    Solution
                                </div>
                                <div>
                                    Achievements have been made across all critical areas: infrastructure, data analysis and the neural network.
                                    On the infrastructure site virtual servers have been deployed.
                                    These servers formed the computing cluster by installing spark (data processing) alongside with kubernetes (neural network processing) orchestration.
                                    The distributed storage was managed by NFS.
                                    In the realm of data analysis for Gigabytes of data, HDFS and Spark with Scala have been utilized,
                                    complemented by the RDD-API and Dataframe-API for streamlined processing.
                                    The data preprocessing involved the creation of batches tailored for computation with RNNs.
                                    A Recurrent Neural Network architecture was designed and implemented to tackle the classification problem.
                                    The network includes an encoder (Relu), Recurrent Layer (tanh) and a Decoder (Softmax).
                                    The Cost function is defined by argmax(Cross Entropy+L2-Regularization).
                                    For the optimization Gradient Descent (Adam Optimizer) was utilized.
                                    For research purposes PyTorch & MXNet and for the distributed training Tensorflow were used.
                                    Training Time was about several hours.
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center my-auto">
                            <Image
                                src={"/static/images/bachelorSnippedNetwork.svg"}
                                alt="Snippet bachelor thesis website"
                                width={0}
                                height={0}
                                className="w-[32rem] lg:w-[128rem]"
                                priority={true}
                                quality={100}
                                unoptimized={constants.static_site}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div >
    );
};
