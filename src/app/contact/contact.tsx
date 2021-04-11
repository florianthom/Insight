import { NavBar } from "@/src/app/shared/navbar/navbar";
import { Footer } from "@/src/app/shared/footer/footer";
import React from "react";

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
                    <div className="pt-24">tmp</div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};
