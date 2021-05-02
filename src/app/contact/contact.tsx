import { NavBar } from "@/src/app/shared/navbar/navbar";
import { Footer } from "@/src/app/shared/footer/footer";
import React from "react";
import { PlatformCard } from "@/src/app/contact/platformCard/platformCard";
import { discord_link, email_string, linkedin_link, xing_link } from "@/src/app/shared/constants/constants";

interface Props {}

export const Contact: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <NavBar></NavBar>
            <div>
                <div className="pt-56 pb-32 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                    <h2 className="text-black text-3xl tracking-more-than-wide">CONTACT ME</h2>
                    <div className="text-base text-black pt-24">
                        I would appreciate it if I can get in touch with you. Networking is one of the greatest things
                        you can do today and since platform like Xing or LinkedIn exist it is not even hard. So just
                        send me a message on one of the following platform.
                    </div>
                    <div className="pt-24">
                        <div className="flex justify-around">
                            <PlatformCard
                                image_path="/linkedIn_transparent_svg.svg"
                                platform_name="LinkedIn"
                                user_name="Florian Thom"
                                text="Just “Connect” with me."
                                link_string={linkedin_link}
                            ></PlatformCard>
                            <PlatformCard
                                image_path="/xing_transparent_svg.svg"
                                platform_name="Xing"
                                user_name="Florian Thom"
                                text="Just add me to your network."
                                link_string={xing_link}
                            ></PlatformCard>
                        </div>
                        <div className="pt-16 flex justify-around">
                            <PlatformCard
                                image_path="/mail_tranparent_svg.svg"
                                platform_name="Mail"
                                user_name="thom.florian@yahoo.de"
                                text="Just write me an email."
                                link_string={"mailto:" + email_string}
                            ></PlatformCard>
                            <PlatformCard
                                image_path="/discord_transparent_svg.svg"
                                platform_name="Discord"
                                user_name="FlorianTh"
                                text="Just join my discord-server and write a private or public message"
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
