import { NextPage } from "next";
import React, { useEffect } from "react";
import { Router, useRouter } from "next/router";
import * as constants from "../app/shared/constants/constants";

interface Props {}

const DiscordPage: NextPage<Props> = (props: Props) => {
    const router = useRouter();
    useEffect(() => {
        window.location.replace(constants.discord_link);
    });

    return <div>You should be redirected to: {constants.discord_link}</div>;
};

export default DiscordPage;
