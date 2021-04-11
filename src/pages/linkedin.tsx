import { NextPage } from "next";
import React, { useEffect } from "react";
import { Router, useRouter } from "next/router";

interface Props {}

const Linkedin: NextPage<Props> = (props: Props) => {
    const router = useRouter();
    useEffect(() => {
        window.location.replace("https://www.linkedin.com/in/florianthom/");
    });

    return <div>You should be redirected to: https://www.linkedin.com/in/florianthom/</div>;
};

export default Linkedin;
