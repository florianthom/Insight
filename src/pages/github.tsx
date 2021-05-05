import { NextPage } from "next";
import React, { useEffect } from "react";
import { Router, useRouter } from "next/router";
import { github_link } from "@/src/app/shared/constants/constants";

interface Props {}

const Github: NextPage<Props> = (props: Props) => {
    const router = useRouter();
    useEffect(() => {
        window.location.replace(github_link);
    });

    return <div>You should be redirected to: https://github.com/FlorianTh2</div>;
};

export default Github;
