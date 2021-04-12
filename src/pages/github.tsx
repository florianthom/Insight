import { NextPage } from "next";
import React, { useEffect } from "react";
import { Router, useRouter } from "next/router";

interface Props {}

const Github: NextPage<Props> = (props: Props) => {
    const router = useRouter();
    useEffect(() => {
        window.location.replace("https://github.com/FlorianTh2");
    });

    return <div>You should be redirected to: https://github.com/FlorianTh2</div>;
};

export default Github;
