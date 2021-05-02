import { NextPage } from "next";
import React, { useEffect } from "react";
import { Router, useRouter } from "next/router";
import { xing_link } from "@/src/app/shared/constants/constants";

interface Props {}

const Xing: NextPage<Props> = (props: Props) => {
    const router = useRouter();
    useEffect(() => {
        window.location.replace(xing_link);
    });

    return <div>You should be redirected to: https://www.xing.com/profile/Florian_Thom9</div>;
};

export default Xing;
