import React from "react";
import { Counter } from "./counter/counter";
import style from "./home.module.scss";

export interface Props {}

export const Home: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <div>Home.tsx</div>
            <Counter></Counter>
        </div>
    );
};
