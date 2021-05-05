import { NextPage } from "next";
import React, { useEffect } from "react";
import { Router, useRouter } from "next/router";
import { discord_link } from "../src/app/shared/constants/constants";

interface Props {}

const Discord: NextPage<Props> = (props: Props) => {
    const router = useRouter();
    useEffect(() => {
        window.location.replace(discord_link);
    });

    return <div>You should be redirected to: {discord_link}</div>;
};

export default Discord;
