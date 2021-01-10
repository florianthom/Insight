import { NextPage } from "next";
import { Privacy } from "@/src/app/privacy/privacy";
import React from "react";

interface Props {}

const PrivacyPage: NextPage<Props> = (props: Props) => {
    return (
        <div>
            <Privacy></Privacy>
        </div>
    );
};

export default PrivacyPage;
