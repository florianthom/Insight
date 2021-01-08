import React from "react";
import { Counter } from "@/src/app/home/counter/counter";
import styles from "@/src/app/home/home.module.scss";
import { AlbumList } from "@/src/app/home/albumList/albumList";
import { PostList } from "@/src/app/home/postList/postList";

export interface Props {}

export const Home: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <h1>Home.tsx</h1>
            <div className="p-5">
                <Counter></Counter>
                <PostList></PostList>
                <AlbumList></AlbumList>
            </div>
        </div>
    );
};
