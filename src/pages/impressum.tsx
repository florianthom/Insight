import { NextPage } from "next";
import { Impressum } from "@/src/app/impressum/impressum";
import React from "react";

interface Props {}

const ImpressumPage: NextPage<Props> = (props: Props) => {
    return (
        <div>
            <Impressum></Impressum>
        </div>
    );
};

export default ImpressumPage;
