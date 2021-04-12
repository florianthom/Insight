import { NextPage } from "next";
import React, { useEffect } from "react";
import { Router, useRouter } from "next/router";

interface Props {}

const Xing: NextPage<Props> = (props: Props) => {
    const router = useRouter();
    useEffect(() => {
        window.location.replace("https://www.xing.com/profile/Florian_Thom9");
    });

    return <div>You should be redirected to: https://www.xing.com/profile/Florian_Thom9</div>;
};

export default Xing;
