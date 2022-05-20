import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export interface Props {
    color: string;
}

export const GroupWork: React.FC<Props> = (props: Props) => {
    return (
        <div className="text-xs" style={{ color: props.color === "white" ? "white" : "black" }}>
            OFTEN GROUP WORK
        </div>
    );
};
