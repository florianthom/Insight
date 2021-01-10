import { NextPage } from "next";
import { Impressum } from "@/src/app/impressum/impressum";
import React from "react";

interface Props {}

const IndexPage: NextPage<Props> = (props: Props) => {
    return (
        <div>
            <Impressum></Impressum>
        </div>
    );
};

export default IndexPage;
