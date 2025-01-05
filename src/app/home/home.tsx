import React from "react";
import { NavBar } from "@/src/app/shared/navbar/navbar";
import Image from "next/image";
import { Footer } from "@/src/app/shared/footer/footer";
import { discord_link, email_string, github_link, linkedin_link, twitter_link } from "../shared/constants/constants";
import { ShowcaseCard } from "../shared/showcasecard/showcasecard";
import { showcaseData } from "../shared/utils/showcaseData";
import { LandingpageButton } from "../shared/landingpagebutton/landingpagebutton";
import { LandingpageSocialmediaButton } from "../shared/landingpageSocialmediaButton/landingpageSocialmediaButton";
import * as constants from "@/src/app/shared/constants/constants";
import { ContactForm } from "../shared/contactform/contactform";
import Link from "next/link";

export interface Props { }

export const Home: React.FC<Props> = (props: Props) => {
    function handleScroll(): void {
        setTimeout(() => {
            this.scrollIntoView({ behavior: "smooth" });
        }, 500);
    }

    return (
        <div>
            <div>
                <Image
                    src={"/static/images/IMG_0410-min.JPG"}
                    alt="florian thom"
                    width={0}
                    height={0}
                    className="object-cover object-[top_0%_left_80%] lg:object-center h-screen w-full"
                    priority={true}
                    quality={100}
                    unoptimized={constants.static_site}
                />
                <NavBar/>
                <div className="absolute inset-0 flex justify-center items-center transform">
                    <div className="max-w-[66%] md:max-w-[50%]">
                        <div className="flex justify-start items-center pt-24 gap-8">
                            <Image
                                src={"/static/images/florianthom_koenigsberg_logo_white.svg"}
                                alt="florian thom logo"
                                width={0}
                                height={0}
                                className="w-20 hidden invisible sm:block sm:visible"
                                priority={true}
                                quality={100}
                                unoptimized={constants.static_site}
                            />
                            <h1 className="text-white font-medium tracking-headline text-3xl sm:text-5xl lg:text-5xl">
                                FLORIAN THOM
                            </h1>
                        </div>
                        <h2 className="text-white text-xl sm:text-3xl lg:text-3xl pt-5">
                            Freelancer covering professional services in IT & Media.
                            From webapps to cloud expertise I offer tailored solutions to elevate your business.
                        </h2>
                        <div className="pt-10 flex justify-start gap-4">
                            <LandingpageSocialmediaButton link={"mailto:" + email_string} size={28}
                                                          iconPath={"/static/images/mail_tranparent.png"}/>
                            <LandingpageSocialmediaButton link={linkedin_link} size={28}
                                                          iconPath={"/static/images/linkedIn_transparent.png"}/>
                            <LandingpageSocialmediaButton link={github_link} size={28}
                                                          iconPath={"/static/images/github_transparent.png"}/>
                            <LandingpageSocialmediaButton link={twitter_link} size={26}
                                                          iconPath={"/static/images/x_logo_transparent.png"}/>
                        </div>
                        <div className="pt-8 md:pt-20 flex justify-between items-stretch flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-24">
                            <LandingpageButton displayName={"Service Portfolio"} link={"/#services"} className={"flex-1"}/>
                            <LandingpageButton displayName={"E-Rechnung Software"} link={constants.erechnungWebsite} className={"flex-1"}/>
                        </div>
                    </div>
                </div>
            </div>
            <div id="services" className="bg-main-color">
                <div className="py-32 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                    <h2 className="text-white text-3xl tracking-headline">SERVICES & OFFERING</h2>
                    <div className="text-base text-white pt-24">
                        Explore my offerings, designed to guide your digital presence and support your business.
                        Consulting Services designed to cover your unique needs:
                        From web development to comprehensive IT solutions, discover how I can bring your vision to life.
                        Explore my services below and get an idea in which areas i can help you.
                    </div>
                    <div className="pt-16 pb-8">
                        <h2 className="text-2xl text-white py-8">
                            Portfolio
                        </h2>

                        <div className="py-4">
                            <div className="text-base text-white">Contract & Project Consulting</div>
                            <ul className="list-disc text-base text-white list-outside space-y-0 pl-4">
                                <li>
                                    Independent screening & advising of upcomming projects before you sign them: We add ideas and save you money
                                </li>
                                <li>
                                    Independent as-is analysis of a project: We evaluate the projects state and make it transparent
                                </li>
                            </ul>
                        </div>
                        <div className="py-4">
                            <div className="text-base text-white">Product Development</div>
                            <ul className="list-disc text-base text-white list-outside space-y-0 pl-4">
                                <li>
                                    Web-/ Desktop Application Development
                                </li>
                                <li>
                                    API-/ Backend Services Development
                                </li>
                                <li>
                                    Wordpress (CMS) Development
                                </li>
                            </ul>
                        </div>
                        <div className="py-4">
                            <div className="text-base text-white">Cloud Consulting</div>
                            <ul className="list-disc text-base text-white list-outside space-y-0 pl-4">
                                <li>
                                    Cloud Architecture: Best Practices and Automation
                                </li>
                                <li>
                                    Cloud Infrastructure: Performance, Scalability, Cost Optimization,
                                </li>
                                <li>
                                    Cloud Security and Compliance
                                </li>
                                <li>
                                    Cloud Migration
                                </li>
                                <li>
                                    Cloud Workload Modernization
                                </li>
                            </ul>
                        </div>
                        <div className="py-4">
                            <div className="text-base text-white">Education & Staff Development</div>
                            <ul className="list-disc text-base text-white list-outside space-y-0 pl-4">
                                <li>
                                    Tech-Talk showcasing topic of interest
                                </li>
                                <li>
                                    Workshop covering topic of interest
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="py-32 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                    <h2 className="text-black text-3xl tracking-headline-mobile sm:tracking-headline">
                        REFERENCES & SHOWCASES
                    </h2>
                    <div className="text-base text-black pt-24">
                        Explore a snipped of my references, professional showcases and insightful observations.
                        These examples highlight the depth of my expertise and the quality of my work.
                        Look into a range of references, industry insights, and showcases that speak to my experience and commitment to delivering excellent results.
                        Single projects are open source.
                        Feel free to check them out on{" "}
                        <Link
                            href={constants.github_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base whitespace-nowrap underline"
                        >
                            github
                        </Link>
                        {" "} page.
                    </div>

                    <div className="py-8">
                        <div className="px-4 py-24 flex justify-around items-center lg:items-stretch flex-col lg:flex-row space-y-12 lg:space-y-0">
                            <ShowcaseCard showcaseData={showcaseData.elektronikRechnung} />
                            <ShowcaseCard showcaseData={showcaseData.lebenserinnerungen} />
                        </div>
                        <div className="px-4 py-16 flex justify-around items-center lg:items-stretch flex-col lg:flex-row space-y-12 lg:space-y-0">
                            <ShowcaseCard showcaseData={showcaseData.topnotch} imageBorderOffset={true} />
                            <ShowcaseCard showcaseData={showcaseData.cloudTemplate} />
                        </div>
                    </div>

                    <div className="text-base text-black pt-24">
                        This represents a selection. If you want to check out other initiatives, there is a separate {" "}
                        <Link
                            href="/work"
                            className="text-base whitespace-nowrap underline"
                        >
                            Work & References
                        </Link>
                        {" "} page.
                    </div>
                </div>
            </div>
            <div id="skills" className="bg-main-color">
                <div className="py-32 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                    <h2 className="text-white text-3xl tracking-headline">SKILLS</h2>
                    <div className="text-base text-white pt-24">
                        I encountered many technologies and gained experience in numerous areas. I love
                        to learn new technologies and to examine them for advantages and disadvantages compared to the
                        already known alternatives.
                    </div>
                    <div className="text-base text-white pt-24">
                        <div className="flex justify-evenly flex-col md:flex-row">
                            <div className="my-8 w-full">
                                <h3 className="text-2xl text-white py-4">Backend</h3>
                                <ul className="list-disc text-base text-white list-inside">
                                    <li>C# - .NET / Asp.net</li>
                                    <li>Java - Spring Boot, Spring Batch</li>
                                    <li>Rest - OpenApi / Swagger</li>
                                    {/* <li>GraphQL - Apollo</li> */}
                                    <li>Databases - Postgres SQL, MongoDB</li>
                                    <li>Docker (Compose), Helm</li>
                                    <li>Kubernetes</li>
                                    <li>Clean Architecture</li>
                                    <li>Domain Driven Design</li>
                                </ul>
                            </div>
                            <div className="my-8 w-full">
                                <h3 className="text-2xl text-white py-4">Cloud & DevOps</h3>
                                <ul className="list-disc text-base text-white list-outside pl-4">
                                    <li>
                                        Cloud Provider AWS, Azure
                                        <ul className="list-disc text-base text-white list-outside pl-4">
                                            <li>Network: VPC, VNet</li>
                                            <li>Compute - ECS, ACA / EKS, AKS</li>
                                            <li>Database - RDS, DocumentDB, DynamoDB, Azure SQL</li>
                                            <li>Storage - S3, Blob Storage</li>
                                            <li>Analytics - OpenSearch, Elastic Cloud</li>
                                            <li>Security - IAM, MS Entra (External) Id</li>
                                        </ul>
                                    </li>
                                    <li>Infrastructure as Code - Terraform, Pulumi</li>
                                    <li>CI/CD - Jenkins, Gitlab, Argo CD (GitOps)</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex justify-center items-center py-24">
                            <div className="border-t border-gray-400 w-full"></div>
                        </div>

                        <div className="flex justify-evenly flex-col md:flex-row">
                            <div className="my-8 w-full">
                                <h3 className="text-2xl text-white py-4">Frontend & Mobile</h3>
                                <ul className="list-disc text-base text-white list-inside">
                                    <li>Angular</li>
                                    <li>React / Next.js</li>
                                    <li>Flutter</li>
                                    <li>Wordpress</li>
                                    <li>Material Design</li>
                                    <li>Tailwind CSS</li>
                                </ul>
                            </div>
                            <div className="my-8 w-full">
                                <h3 className="text-2xl text-white py-4">Marketing (AI) Advising</h3>
                                <ul className="list-disc text-base text-white list-inside">
                                    <li>
                                        SEO
                                        <ul className="list-disc text-base text-white list-inside indent-4">
                                            <li>Google Seach Console (GSC)</li>
                                            <li>Google Analytics (GA4) & Tag Manager</li>
                                            <li>Google keyword planner</li>
                                            <li>Bing Webmaster</li>
                                            <li>Ahrefs & SEMrush</li>
                                            <li>Lighthouse</li>
                                            <li>Screaming frog</li>
                                            <li>Schema.org</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Local Visibility
                                        <ul className="list-disc text-base text-white list-inside indent-4">
                                            <li>Google Business Profile (GMB)</li>
                                            <li>Bing Places</li>
                                            <li>Apple Business Connect</li>
                                            <li>Amazon KDP</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Social Media
                                        <ul className="list-disc text-base text-white list-inside indent-4">
                                            <li>video: visla, pictory, woxo</li>
                                            <li>image: midjourney, firefly</li>
                                            <li>content: tweethunter, jasper, perplexity</li>
                                            <li>auto-posting: hootsuite, socialbee</li>
                                            <li>automation: zapier</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="my-8 w-full">
                                <h3 className="text-2xl text-white py-4">Design & Visualization</h3>
                                <ul className="list-disc text-base text-white list-inside">
                                    <li>Figma</li>
                                    <li>Affinity</li>
                                    <li>Photoshop</li>
                                    <li>Lightroom</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="py-32 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                    <h2 className="text-black text-3xl tracking-headline">FURTHER KNOWLEDGE</h2>
                    <div className="text-base text-black pt-24">
                        Exploring additional Insights:  Here is my supplementary knowledge.
                        In addition to my primary skills, take a look at my complementary knowledge and insights which I mostly developed by doing side-projects and hobbies.
                    </div>
                    <div className="text-base text-black pt-12 md:pt-24">
                        <div className="flex justify-around flex-col md:flex-row">
                            <div className="my-8">
                                <h3 className="text-2xl py-4">Big Data & Data Science</h3>
                                <ul className="list-disc text-base list-inside">
                                    <li>Terminal</li>
                                    <li>Shell-Scripting</li>
                                    <li>Python</li>
                                    <li>Spark & Flink</li>
                                    <li>Hadoop</li>
                                </ul>
                            </div>
                            {/* <div className="my-8 w-full">
                                <h3 className="text-2xl py-4">IOT</h3>
                                <ul className="list-disc text-base list-inside">
                                    <li>TI MSP430G2553</li>
                                    <li>Arduino</li>
                                    <li>Raspberry Pi</li>
                                    <li>Code Composer Studio</li>
                                    <li>TI EnergyTrace Technology</li>
                                    <li>Ultra-Low Power Advisor</li>
                                </ul>
                            </div> */}
                            <div className="my-8">
                                <h3 className="text-2xl py-4">Artificial Intelligence</h3>
                                <ul className="list-disc text-base list-inside">
                                    <li>Algebra & Analysis</li>
                                    <li>Stochastic</li>
                                    <li>Regression & Classification</li>
                                    <li>Backpropagation</li>
                                    <li>ANN</li>
                                    <li>RNN, LSTM/GRU, Transformer</li>
                                    <li>CNN</li>
                                    <li>GAN</li>
                                    <li>Tensorflow</li>
                                    <li>PyTorch</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="pt-48 pb-16 flex justify-center flex-col items-center gap-4">
                        <div className="text-xl sm:text-3xl lg:text-3xl">
                            Have a Project in Mind? Let’s Discuss
                        </div>
                        <div>
                            Someone has to make the first click. Guaranteed feedback within 24 hours.
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </div>
            <Footer />
        </div>
    );
};
