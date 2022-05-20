import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export interface Props {
    tagName: string;
}

export const RecordTag: React.FC<Props> = (props: Props) => {
    return (
        <div className="px-1 sm:px-2 inline-block">
            <div className="py-1 sm:py-2 px-4 sm:px-6 bg-main-color rounded-3xl text-white border">{props.tagName}</div>
        </div>
    );
};
