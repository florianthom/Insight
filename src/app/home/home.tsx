import React from "react";
import { Counter } from "@/src/app/home/counter/counter";

export interface Props {}

export const Home: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <div>Home.tsx</div>
            <Counter></Counter>
        </div>
    );
};
