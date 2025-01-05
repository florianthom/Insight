import { NavBar } from "@/src/app/shared/navbar/navbar";
import { Footer } from "@/src/app/shared/footer/footer";
import React from "react";
import { PlatformCard } from "@/src/app/contact/platformCard/platformCard";
import {
    discord_link,
    email_string,
    github_link,
    linkedin_link,
    twitter_link,
} from "@/src/app/shared/constants/constants";
import { BC } from "@/src/app/shared/bc/bc";
import * as constants from "@/src/app/shared/constants/constants";
import Image from "next/image";
import {ContactForm} from "@/src/app/shared/contactform/contactform";

interface Props { }

export const Contact: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <NavBar></NavBar>
            <div>
                <div className="pt-36 sm:pt-56 pb-32 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                    <h2 className="text-black text-3xl tracking-headline">CONTACT ME</h2>
                    <div className="text-base text-black pt-24">
                        Whether it&apos;s about consultations, inquiries, or exploring opportunities, I will have an answer for your needs.
                        Understanding your unique business landscape and goals, I create solutions to address your current requirements,
                        while also taking care of a resilient foundation for future scalability and sustained growth.
                        Looking forward to collaborating with you on your next project.
                    </div>
                    <div className="flex justify-center py-16 sm:py-24">
                        <Image
                            src={"/static/images/florianthom_koenigsberg_withslogan.svg"}
                            alt="florian thom logo"
                            width={0}
                            height={0}
                            className="w-full lg:w-[48rem] pr-4"
                            priority={true}
                            quality={100}
                            unoptimized={constants.static_site}
                        />
                    </div>

                    <div>
                        <div className="text-base py-4">
                            Opting for my services allows you to benefit from...
                        </div>


                        <ul className="list-disc text-base list-outside pl-4 space-y-4">
                            <li>
                                End-to-end responsibility: Following the DevOps approach I will provide End-to-End
                                responsibility. Let&apos;s get stuff done faster, better
                                and/or cheaper
                                than you have in the past.
                            </li>
                            <li>
                                Up-to-Date tech know-how: Stay at the forefront of technology trends with the latest
                                knowledge and solutions in cloud and web environments.
                            </li>
                            <li>
                                Ready to understand your domain: With experience in dealing with complex domains, I am
                                equipped to immediately familiarize myself with complicated areas and create value right
                                from the start
                            </li>
                            <li>
                                Fresh perspectives: I will input fresh perspectives, awareness and creativity into new
                                and current solutions.
                            </li>
                            <li>
                                Agile approach: Let&apos;s adapt to the current state of requirements, prioritize and
                                continuously improve to deliver value efficiently.
                            </li>
                            <li>
                                Partnership: I believe in collaborating as partners to achieve the best outcomes for our
                                stakeholders
                            </li>
                            <li>
                                Scaling with your needs: I will support you with in depth knowledge on your scaling
                                needs - build a mvp, your first app, integrated testing, expanding the product line to
                                different platforms, building / going cloud native, scaling to large numbers of DAUs and
                                more
                            </li>
                            <li>
                                Guidance by industry tech standards: Embrace industry best practices to stay ahead in
                                the competitive digital landscape.
                            </li>
                            <li>
                                Real results and impact: Proven track record of driving success through all kinds of
                                business sizes.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div className="pt-32 pb-16 flex justify-center flex-col items-center gap-4">
                            <div className="text-xl sm:text-3xl lg:text-3xl">
                                Have a topic in mind? Let’s discuss
                            </div>
                            <div>
                                Someone has to make the first click. Guaranteed feedback within 24 hours.
                            </div>
                        </div>
                        <ContactForm/>
                    </div>

                    <div className="flex justify-center py-16">
                        <hr className="border-gray-300 w-2/4"/>
                    </div>
                    <div className="text-base text-black pt-12">
                        I value the opportunity to connect and build professional relationships.
                        Networking has become incredibly accessible through platforms like LinkedIn.
                        Please feel free to reach out to me by sending a message through any of the following platforms.
                    </div>

                    <div className="pt-24">
                        <div className="flex justify-around items-center flex-col md:flex-row space-y-12 lg:space-y-0">
                            <PlatformCard
                                image_path="/static/images/mail_tranparent_svg.svg"
                                platform_name="Mail"
                                user_name={email_string}
                                link_string={"mailto:" + email_string}
                            />
                            <PlatformCard
                                image_path="/static/images/linkedIn_transparent_svg.svg"
                                platform_name="LinkedIn"
                                user_name="Florian Thom"
                                link_string={linkedin_link}
                            />
                        </div>
                        <div className="pt-16 flex justify-around items-center flex-col md:flex-row space-y-12 lg:space-y-0">
                            <PlatformCard
                                image_path="/static/images/GitHub-Mark.svg"
                                platform_name="GitHub"
                                user_name="florianthom"
                                link_string={github_link}
                            />
                            <PlatformCard
                                image_path="/static/images/x_logo_transparent.png"
                                platform_name="X"
                                user_name="florianthomdev"
                                link_string={twitter_link}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};
