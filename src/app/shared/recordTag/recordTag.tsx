import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export interface Props {
    tagName: string;
}

export const RecordTag: React.FC<Props> = (props: Props) => {
    return <div className="py-2 px-4 bg-main-color inline-block rounded-3xl text-white border">{props.tagName}</div>;
};
