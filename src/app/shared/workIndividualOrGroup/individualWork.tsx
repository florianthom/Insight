import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export interface Props {
    color: string;
}

export const IndividualWork: React.FC<Props> = (props: Props) => {
    return (
        <div className="text-xs" style={{ color: props.color === "white" ? "white" : "black" }}>
            MOSTLY INDIVIDUAL WORK
        </div>
    );
};
