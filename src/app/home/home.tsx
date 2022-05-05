import React from "react";
import { SignificantProjectsTable } from "@/src/app/home/significantProjectsTable/significantProjectsTable";
import { NavBar } from "@/src/app/shared/navbar/navbar";
import Image from "next/image";
import { Footer } from "@/src/app/shared/footer/footer";
import { IndividualWork } from "@/src/app/shared/workIndividualOrGroup/individualWork";
import { GroupWork } from "@/src/app/shared/workIndividualOrGroup/groupWork";
import { discord_link, email_string, github_link, linkedin_link } from "../shared/constants/constants";

export interface Props {}

export const Home: React.FC<Props> = (props: Props) => {
    function handleScroll(): void {
        setTimeout(() => {
            this.scrollIntoView({ behavior: "smooth" });
        }, 500);
    }

    return (
        <div>
            <div className="custom-background-image h-screen bg-no-repeat bg-cover bg-center">
                <NavBar></NavBar>
                <div className="absolute top-1/2 left-1/2 sm:top-1/2 sm:left-1/2 lg:top-1/2 lg:left-1/2 transform -translate-x-2/4 -translate-y-2/4">
                    <h1 className="text-white tracking-headline text-3xl sm:text-5xl lg:text-5xl pt-24">
                        FLORIAN THOM
                    </h1>
                    <h2 className="text-white text-xl sm:text-3xl lg:text-3xl pt-5">
                        Computer science enthusiast - Interested in research & development. Open to new technologies in
                        software and hardware
                    </h2>
                    {/*social home group*/}
                    <div className="pt-10">
                        <a href={linkedin_link} target="_blank" rel="noopener noreferrer" className="pr-4 sm:pr-6">
                            <Image
                                src="/static/images/linkedIn_transparent.png"
                                alt="me"
                                width="28"
                                height="28"
                                priority={true}
                                quality={25}
                            />
                        </a>
                        <a href={github_link} target="_blank" rel="noopener noreferrer" className="pr-4 sm:pr-6">
                            <Image
                                src="/static/images/github_transparent.png"
                                alt="me"
                                width="28"
                                height="28"
                                priority={true}
                                quality={25}
                            />
                        </a>
                        <a
                            href={"mailto:" + email_string}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pr-4 sm:pr-6"
                        >
                            <Image
                                src="/static/images/mail_tranparent.png"
                                alt="me"
                                width="28"
                                height="28"
                                priority={true}
                                quality={25}
                            />
                        </a>
                        <a href={discord_link} target="_blank" rel="noopener noreferrer" className="pr-4 sm:pr-6">
                            <Image
                                src="/static/images/discord_transparent.png"
                                alt="me"
                                width="28"
                                height="28"
                                priority={true}
                                quality={25}
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-main-color">
                <div className="py-32 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                    <h2 className="text-white text-3xl tracking-headline">RECENT WORK</h2>
                    <div className="text-base text-white pt-24">
                        Over the years I have encountered many technologies and gained experience in numerous areas. I
                        love to learn new technologies and to examine them for advantages and disadvantages compared to
                        the already known alternatives. Since some projects could be private, arent even published on
                        github or mentioned at my CV, here is a small snipped of my recent work.
                    </div>
                    <div className="pt-24">
                        <h3 className="text-2xl text-white">During freetime</h3>
                        <div className="pl-1">
                            <IndividualWork color="white"></IndividualWork>
                        </div>
                        <div className="pt-4">
                            <ul className="list-disc text-base text-white list-inside">
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
                                        <li>Created cloud-platform for all kinds of projects</li>
                                    </ul>
                                </li>
                                <li>
                                    Azure Infrastructure
                                    <ul className="list-inside pl-4">
                                        <li>Create cloud-platform in comparison to AWS</li>
                                    </ul>
                                </li>
                                <li>
                                    Unity ml-agents
                                    <ul className="list-inside pl-4">
                                        <li>Simulation in which a cap has to find its parking slot</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-24">
                        <h3 className="text-2xl text-white">
                            Results of course work at university - M.Sc. Computer Science
                        </h3>
                        <div className="pl-1">
                            <GroupWork color="white"></GroupWork>
                        </div>
                        <div className="pt-4">
                            <ul className="list-disc text-base text-white list-inside">
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
                                    IT Security - Handling of Numbers {">"} 2^64
                                    <ul className="list-inside pl-4">
                                        <li>Implemented own BigInteger-Representation through bit-shift-operations</li>
                                    </ul>
                                </li>
                                <li>
                                    NVIDIA - CUDA programming
                                    <ul className="list-inside pl-4">
                                        <li>
                                            The calculation of the gaussian convolution of an image and the conversation
                                            of rgb to YCbCr
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
                    {/*unfortunatly the word significant is to wide so i had to reduce the size only for this headline here
                    (all others remain the same size)*/}
                    <h2 className="text-black text-3xl tracking-headline-mobile sm:tracking-headline">
                        SIGNIFICANT PROJECTS
                    </h2>
                    <div className="text-base text-black pt-24">
                        I have worked on a couple of projects till today. Here I like to present a list with selected
                        projects from github I like most. This are projects I spend a lot of time on while having a lot
                        of fun. Feel free to check them out on{" "}
                        <a className="hover:underline" href={github_link} target="_blank" rel="noopener noreferrer">
                            github
                        </a>
                        .
                    </div>
                    <div className="pt-24">
                        <SignificantProjectsTable></SignificantProjectsTable>
                    </div>
                    <div className="text-base text-black pt-24">
                        This represents only a small snipped of projects. If you want to check out my other projects, I
                        provide a separate projects page
                    </div>
                </div>
            </div>
            <div id="skills" className="bg-main-color">
                <div className="py-32 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                    <h2 className="text-white text-3xl tracking-headline">MY SKILLS</h2>
                    <div className="text-base text-white pt-24">
                        Over the years I encountered many technologies and gained experience in numerous areas. I love
                        to learn new technologies and to examine them for advantages and disadvantages compared to the
                        already known alternatives.
                    </div>
                    <div className="text-base text-white pt-24">
                        <div className="flex justify-between items-center md:items-stretch flex-col md:flex-row">
                            <div className="my-8 w-2/3">
                                <h3 className="text-2xl text-white">Frontend</h3>
                                <ul className="list-disc text-base text-white list-inside">
                                    <li>Next.js</li>
                                    <li>React.js</li>
                                    <li>Angular</li>
                                    <li>Nuxt.js</li>
                                    <li>Vue.js</li>
                                    <li>D3.js</li>
                                    <li>Bootstrap</li>
                                    <li>Material Design</li>
                                    <li>Tailwind CSS</li>
                                    <li>Figma</li>
                                    <li>Affinity</li>
                                </ul>
                            </div>
                            <div className="my-8 w-2/3">
                                <h3 className="text-2xl text-white">Backend</h3>
                                <ul className="list-disc text-base text-white list-inside">
                                    <li>.NET 6</li>
                                    <li>ASP.NET Core</li>
                                    <li>Java 17</li>
                                    <li>Spring Boot (+Security)</li>
                                    <li>Node.js</li>
                                    <li>REST</li>
                                    <li>GraphQL (+DataLoader)</li>
                                    <li>Ruby (On Rails)</li>
                                    <li>PSQL</li>
                                    <li>Hangfire</li>
                                </ul>
                            </div>
                            <div className="my-8 w-2/3">
                                <h3 className="text-2xl text-white">Mobile & Game</h3>
                                <ul className="list-disc text-base text-white list-inside">
                                    <li>Flutter</li>
                                    <li>Responsive Design</li>
                                    <li>Android Studios</li>
                                    <li>Unity</li>
                                    <li>OpenGL</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-between pt-16  items-center md:items-stretch flex-col md:flex-row">
                            <div className="my-8 w-2/3">
                                <h3 className="text-2xl text-white">IOT</h3>
                                <ul className="list-disc text-base text-white list-inside">
                                    <li>TI MSP430G2553</li>
                                    <li>Arduino</li>
                                    <li>Raspberry Pi</li>
                                    <li>Code Composer Studio</li>
                                    <li>TI EnergyTrace Technology</li>
                                    <li>Ultra-Low Power Advisor</li>
                                </ul>
                            </div>
                            <div className="my-8 w-2/3">
                                <h3 className="text-2xl text-white">Cloud & DevOps</h3>
                                <ul className="list-disc text-base text-white list-inside">
                                    <li>Docker (Compose)</li>
                                    <li>WSL 2</li>
                                    <li>Kubernetes</li>
                                    <li>Ansible</li>
                                    <li>Terraform</li>
                                    <li>Vagrant</li>
                                    <li>Packer</li>
                                    <li>AWS</li>
                                    <li>EKS</li>
                                    <li>Azure</li>
                                    <li>AKS</li>
                                    <li>Github CI</li>
                                    <li>Grafana</li>
                                    <li>Prometheus</li>
                                </ul>
                            </div>
                            <div className="my-8 w-2/3">
                                <h3 className="text-2xl text-white">Big Data & Data Science</h3>
                                <ul className="list-disc text-base text-white list-inside">
                                    <li>Terminal</li>
                                    <li>Shell/Bash-Scripting</li>
                                    <li>Scala (& Java)</li>
                                    <li>Python</li>
                                    <li>Spark</li>
                                    <li>Flink</li>
                                    <li>MapReduce</li>
                                    <li>Hadoop</li>
                                    <li>Graphviz dot</li>
                                    <li>Gnuplot</li>
                                </ul>
                            </div>
                            <div className="my-8 w-2/3">
                                <h3 className="text-2xl text-white">Artificial Intelligence</h3>
                                <ul className="list-disc text-base text-white list-inside">
                                    <li>Algebra</li>
                                    <li>Analysis</li>
                                    <li>Geometry</li>
                                    <li>Stochastic</li>
                                    <li>Regression</li>
                                    <li>Classification</li>
                                    <li>Backpropagation</li>
                                    <li>ANN</li>
                                    <li>Basic RNN</li>
                                    <li>LSTM (-Gates)</li>
                                    <li>GRU (-Gates)</li>
                                    <li>Transformer</li>
                                    <li>CNN</li>
                                    <li>GAN</li>
                                    <li>Jupyter</li>
                                    <li>Tensorflow</li>
                                    <li>PyTorch</li>
                                    <li>MxNet</li>
                                    <li>Unity ml-gents</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="py-32 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                    <h2 className="text-black text-3xl tracking-headline">FUTURE VENTURES</h2>
                    <div className="text-base text-black pt-24">
                        I always like to test new stuff. Here I present a small list of technologies that I will
                        probably try to learn in upcoming projects. I divided the list into Software Architecture,
                        Distributed Systems and Machine Learning. These are probably the areas, I will spend most time
                        on.
                    </div>
                    <div className="text-base text-black pt-24">
                        <div className="flex justify-evenly flex-col md:flex-row">
                            <div className="my-8">
                                <h3 className="text-2xl text-black">Software Architecture</h3>
                                <ul className="list-disc text-base text-black list-inside">
                                    <li>Clean Architecture</li>
                                    <li>mediatR</li>
                                    <li>CQRS</li>
                                    <li>GraphQL in .Net (hotchocolate)</li>
                                    <li>SignalR / Socket.io</li>
                                </ul>
                            </div>
                            <div className="my-8">
                                <h3 className="text-2xl text-black">Distributed Systems Development</h3>
                                <ul className="list-disc text-base text-black list-inside">
                                    <li>Microservices</li>
                                    <li>gRPC</li>
                                    <li>Scaling databases</li>
                                    <li>Kafka</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-evenly pt-16 flex-col md:flex-row">
                            <div className="my-8">
                                <h3 className="text-2xl text-black">Cloud & DevOps</h3>
                                <ul className="list-disc text-base text-black list-inside">
                                    <li>Istio</li>
                                    <li>ELK / EFK / Loki</li>
                                    <li>Google Cloud</li>
                                    <li>Scalability investigations</li>
                                </ul>
                            </div>
                            <div className="my-8">
                                <h3 className="text-2xl text-black">Machine Learning</h3>
                                <ul className="list-disc text-base text-black list-inside">
                                    <li>
                                        Unity ml-agents: integrate <br />
                                        other reinforcement approaches
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};
