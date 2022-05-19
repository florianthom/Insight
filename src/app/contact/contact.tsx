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

interface Props {}

export const Contact: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <NavBar></NavBar>
            <div>
                <div className="pt-56 pb-32 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                    <h2 className="text-black text-3xl tracking-headline">CONTACT ME</h2>

                    <div className="text-base text-black pt-24">
                        I can help you with software developing, topics around entrepreneurship, business architecture
                        and freelancing. While am decent at communicating via smoke signals, there are simpler ways for
                        us to get in touch and team up to solve problems. I am there for you!
                    </div>

                    <div className="pt-24">
                        <BC />
                    </div>

                    <div className="text-base text-black pt-24">
                        I would appreciate it if I could get to know you. Networking is one of the greatest things you
                        can do today and since platforms like LinkedIn exist it is not even hard. So send me a message
                        on one of the following platforms.
                    </div>

                    <div className="pt-24">
                        <div className="flex justify-around items-center flex-col md:flex-row">
                            <PlatformCard
                                image_path="/static/images/linkedIn_transparent_svg.svg"
                                platform_name="LinkedIn"
                                user_name="Florian Thom"
                                text="Just “Connect” with me."
                                link_string={linkedin_link}
                            ></PlatformCard>
                            <PlatformCard
                                image_path="/static/images/twitter_logo.png"
                                platform_name="Twitter"
                                user_name="florianthomdev"
                                text="Just message me or leave a follow."
                                link_string={twitter_link}
                            ></PlatformCard>
                        </div>
                        <div className="pt-16 flex justify-around items-center flex-col md:flex-row">
                            <PlatformCard
                                image_path="/static/images/GitHub-Mark.svg"
                                platform_name="GitHub"
                                user_name="florianthom"
                                text="Checkout my repositories, follow me."
                                link_string={github_link}
                            ></PlatformCard>
                            <PlatformCard
                                image_path="/static/images/mail_tranparent_svg.svg"
                                platform_name="Mail"
                                user_name={email_string}
                                text="Just write me an email."
                                link_string={"mailto:" + email_string}
                            ></PlatformCard>
                        </div>
                        <div className="pt-16 flex justify-around">
                            <PlatformCard
                                image_path="/static/images/discord_transparent_svg.svg"
                                platform_name="Discord"
                                user_name="FlorianTh"
                                text="Just join my discord-server and write a private or public message."
                                link_string={discord_link}
                            ></PlatformCard>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};
