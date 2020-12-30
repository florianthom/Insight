import React from "react";
import { Counter } from "@/src/app/home/counter/counter";
import styles from "@/src/app/home/home.module.scss";

export interface Props {}

export const Home: React.FC<Props> = (props: Props) => {
    return (
        <div>
            Home.tsx
            <div className="p-5">
                <Counter></Counter>
            </div>
        </div>
    );
};
