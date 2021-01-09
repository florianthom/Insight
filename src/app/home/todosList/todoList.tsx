import { QueryClient, useQuery } from "react-query";
import { IPost } from "@/src/app/home/shared/models/ipost";
import { dehydrate } from "react-query/hydration";
import { Post } from "@/src/app/home/post/post";
import { ITodo } from "@/src/app/home/shared/models/itodo";

const API: string = "https://jsonplaceholder.typicode.com";
const DEFAULT_QUERY: string = "/todos";

export async function getStaticProps() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery("posts", fetchPosts);

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
}

async function fetchPosts(reactQueryInput): Promise<ITodo[]> {
    const [_key, queryParams]: [string, FetchPostsQueryParams] = reactQueryInput.queryKey;
    const res = await fetch(API + queryParams.default_query);
    if (!res.ok) {
        throw new Error("Network response was not ok");
    }
    return res.json();
}

interface Props {}

interface FetchPostsQueryParams {
    default_query: string;
    page: string;
}

export const TodoList: React.FC<Props> = (props: Props) => {
    const postsQuery = useQuery({
        queryKey: ["posts", { default_query: DEFAULT_QUERY, page: null } as FetchPostsQueryParams],
        queryFn: fetchPosts,
        staleTime: 0,
        cacheTime: 5000,
    });

    if (postsQuery.status === "loading") return <h1>Loading...</h1>;
    if (postsQuery.status === "error") return <span>{postsQuery.error.toString()}</span>;

    return (
        <div>
            <h2>TodoList</h2>
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
