import React from "react";
import { Counter } from "@/src/app/home/counter/counter";
import styles from "@/src/app/home/home.module.scss";
import { AlbumList } from "@/src/app/home/albumList/albumList";

export interface Props {}

export const Home: React.FC<Props> = (props: Props) => {
    return (
        <div>
            Home.tsx
            <div className="p-5">
                <Counter></Counter>
                <AlbumList></AlbumList>
            </div>
        </div>
    );
};
