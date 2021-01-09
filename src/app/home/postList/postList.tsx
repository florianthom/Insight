import { useState } from "react";
import { IPost } from "@/src/app/home/shared/models/ipost";
import { QueryFunction, QueryKey, useQuery } from "react-query";
import { Post } from "@/src/app/home/post/post";

interface Props {}

export const PostList: React.FC<Props> = (props: Props) => {
    const API: string = "https://jsonplaceholder.typicode.com";
    const DEFAULT_QUERY: string = "/posts";

    const [posts, setPosts] = useState([] as IPost[]);
    const postsQuery = useQuery(["posts", DEFAULT_QUERY, null] as QueryKey, fetchPosts, {
        staleTime: 0,
        cacheTime: 5000,
    });

    // ich kann irgendwie nicht so richtig mehrere parameter bestimmen für fetchPosts
    async function fetchPosts(test) {
        const res = await fetch(API + default_query);
        return res.json() as Promise<IPost[]>;
    }

    if (postsQuery.status === "loading") return <h1>Loading...</h1>;
    if (postsQuery.status === "error") return <span>Error: {postsQuery.error}</span>;
    if (postsQuery.status === "success" && !postsQuery.data.length) return <span>There are no posts!</span>;

    return (
        <div>
            <h2>PostList</h2>
            <div>
                {postsQuery.data
                    .map((a) => {
                        return <Post post={a}></Post>;
                    })
                    .slice(0, 5)}
            </div>
        </div>
    );
};
