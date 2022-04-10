import { NextPage } from "next";
import React, { useEffect } from "react";
import { Router, useRouter } from "next/router";
import * as constants from "@/src/app/shared/constants/constants";

interface Props {}

const XingPage: NextPage<Props> = (props: Props) => {
    const router = useRouter();
    useEffect(() => {
        window.location.replace(constants.xing_link);
    });

    return <div>You should be redirected to: {constants.xing_link}</div>;
};

export default XingPage;
