import React from "react";
import { NextPage } from "next";

interface Props {}

const Custom404: NextPage<Props> = (props: Props) => {
    return <div>404 Page not Found</div>;
};

export default Custom404;
