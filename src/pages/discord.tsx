import { NextPage } from "next";
import React, { useEffect } from "react";
import { Router, useRouter } from "next/router";

interface Props {}

const Discord: NextPage<Props> = (props: Props) => {
    const router = useRouter();
    useEffect(() => {
        window.location.replace("https://discord.gg/quMb9N42Uj");
    });

    return <div>You should be redirected to: https://discord.gg/quMb9N42Uj</div>;
};

export default Discord;
