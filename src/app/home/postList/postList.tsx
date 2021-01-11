import { useState } from "react";
import { IPost } from "@/src/app/home/shared/models/ipost";
import { QueryFunction, QueryKey, useQuery } from "react-query";
import { Post } from "@/src/app/home/post/post";

interface Props {}

interface FetchPostsQueryParams {
    default_query: string;
    page: string;
}

export const PostList: React.FC<Props> = (props: Props) => {
    const API = "https://jsonplaceholder.typicode.com";
    const DEFAULT_QUERY = "/posts";

    const postsQuery = useQuery({
        queryKey: ["posts", { default_query: DEFAULT_QUERY, page: null } as FetchPostsQueryParams],
        queryFn: fetchPosts,
        staleTime: 0,
        cacheTime: 5000,
    });

    async function fetchPosts(reactQueryInput): Promise<IPost[]> {
        const [_key, queryParams]: [string, FetchPostsQueryParams] = reactQueryInput.queryKey;
        const res = await fetch(API + queryParams.default_query);
        if (!res.ok) {
            throw new Error("Network response was not ok");
        }
        return res.json();
    }

    if (postsQuery.status === "loading") return <h1>Loading...</h1>;
    if (postsQuery.status === "error") return <span>{postsQuery.error.toString()}</span>;

    return (
        <div>
            <h2>PostList</h2>
            <div>
                {postsQuery.data
                    .map((a) => {
                        return <Post key={a.id} post={a}></Post>;
                    })
                    .slice(0, 5)}
            </div>
        </div>
    );
};
