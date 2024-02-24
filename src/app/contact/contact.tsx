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

interface Props { }

export const Contact: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <NavBar></NavBar>
            <div>
                <div className="pt-36 sm:pt-56 pb-32 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                    <h2 className="text-black text-3xl tracking-headline">CONTACT ME</h2>
                    <div className="text-base text-black pt-24">
                        Whether it&apos;s about consultations, inquiries, or exploring opportunities, I will provide you with exceptional service.
                        Understanding your unique business landscape and goals, I create solutions to address your current requirements,
                        but also to lay a resilient foundation for future scalability and sustained growth.
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
                        <ul className="list-disc text-base list-inside space-y-4">
                            <li>
                                Fresh Perspectives: Leverage the energy and creativity for innovative solutions tailored to your business.
                            </li>
                            <li>
                                Dynamic Adaptability: Agile approaches to swiftly adapt to changes, ensuring your business remains agile and competitive in the fast-paced tech world.
                            </li>
                            <li>
                                Seamless Integration: Streamline your systems and workflows effortlessly, ensuring a smooth transition to cloud-based solutions.
                            </li>
                            <li>
                                Up-to-Date Expertise: Stay at the forefront of technology trends with the latest knowledge and cutting-edge solutions in cloud and web environments.
                            </li>
                            <li>
                                Expert Guidance: Embrace industry best practices to stay ahead in the competitive digital landscape.
                            </li>
                            <li>
                                Real Results: Proven track record of driving success through all kinds of business sizes.
                            </li>
                            <li>
                                Proven Impact: Experience real results through the implementation of innovative IT strategies, propelling your business to new heights.
                            </li>
                        </ul>
                    </div>
                    <div className="py-16">
                        Contact me today and let&apos;s turn your aspirations into achievements. Looking forward to collaborating with you on your next endeavor.
                        Ready to infuse your business with innovation? Contact me today for a consultation and experience firsthand how my dynamic IT expertise can drive your success.
                    </div>
                    <div className="flex justify-center py-16">
                        <hr className="border-gray-300 w-2/4" />
                    </div>
                    <div className="py-24 flex justify-around items-center flex-col lg:flex-row space-y-12 lg:space-y-0">
                        <BC />
                        <PlatformCard
                            image_path="/static/images/mail_tranparent_svg.svg"
                            platform_name="Mail"
                            user_name={email_string}
                            link_string={"mailto:" + email_string}
                        />
                    </div>
                    <div className="flex justify-center py-16">
                        <hr className="border-gray-300 w-2/4" />
                    </div>
                    <div className="text-base text-black pt-12">
                        I value the opportunity to connect and build professional relationships.
                        Networking has become incredibly accessible through platforms like LinkedIn.
                        Please feel free to reach out to me by sending a message through any of the following platforms.
                    </div>

                    <div className="pt-24">
                        <div className="flex justify-around items-center flex-col md:flex-row space-y-12 lg:space-y-0">
                            <PlatformCard
                                image_path="/static/images/linkedIn_transparent_svg.svg"
                                platform_name="LinkedIn"
                                user_name="Florian Thom"
                                link_string={linkedin_link}
                            />
                            <PlatformCard
                                image_path="/static/images/x_logo_transparent.png"
                                platform_name="X"
                                user_name="florianthomdev"
                                link_string={twitter_link}
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
                                image_path="/static/images/discord_transparent_svg.svg"
                                platform_name="Discord"
                                user_name="FlorianTh"
                                link_string={discord_link}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};
