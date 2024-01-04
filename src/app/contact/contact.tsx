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

interface Props { }

export const Contact: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <NavBar></NavBar>
            <div>
                <div className="pt-56 pb-32 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                    <h2 className="text-black text-3xl tracking-headline">CONTACT ME</h2>

                    <div className="text-base text-black pt-24">
                        Your journey deserves attention to detail and a personalized approach.
                        Whether it&aposs about consultations, inquiries, or exploring opportunities, I&aposm committed to providing you with exceptional service.
                        Contact me today and let&aposs turn your aspirations into achievements!
                        Looking forward to collaborating with you on your next endeavor!
                    </div>

                    <div className="pt-24 flex justify-around items-center flex-col lg:flex-row space-y-12 lg:space-y-0">
                        <BC />
                        <PlatformCard
                            image_path="/static/images/mail_tranparent_svg.svg"
                            platform_name="Mail"
                            user_name={email_string}
                            link_string={"mailto:" + email_string}
                        />
                    </div>

                    <div className="text-base text-black pt-24">
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
