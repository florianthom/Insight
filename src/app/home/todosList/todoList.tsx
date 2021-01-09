import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import { ITodo } from "@/src/app/home/shared/models/itodo";
import { Todo } from "@/src/app/home/todo/todo";

const API: string = "https://jsonplaceholder.typicode.com";
const DEFAULT_QUERY: string = "/todos";

export async function getStaticProps() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["todos", { default_query: DEFAULT_QUERY, page: null } as FetchTodosQueryParams],
        queryFn: fetchTodos,
        staleTime: 50000,
        cacheTime: 50000,
    });

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
}

async function fetchTodos(reactQueryInput): Promise<ITodo[]> {
    const [_key, queryParams]: [string, FetchTodosQueryParams] = reactQueryInput.queryKey;
    const res = await fetch(API + queryParams.default_query);
    if (!res.ok) {
        throw new Error("Network response was not ok");
    }

    await setTimeout(() => console.log("finished timeout"), 5000);

    return res.json();
}

interface Props {}

interface FetchTodosQueryParams {
    default_query: string;
    page: string;
}

export const TodoList: React.FC<Props> = (props: Props) => {
    const todosQuery = useQuery({
        queryKey: ["todos", { default_query: DEFAULT_QUERY, page: null } as FetchTodosQueryParams],
        queryFn: fetchTodos,
        staleTime: 50000,
        cacheTime: 50000,
    });

    if (todosQuery.status === "loading") return <h1>Loading...</h1>;
    if (todosQuery.status === "error") return <span>{todosQuery.error.toString()}</span>;

    return (
        <div>
            <h2>TodoList</h2>
            <div>
                {todosQuery.data
                    .map((a) => {
                        return <Todo key={a.id} todo={a}></Todo>;
                    })
                    .slice(0, 5)}
            </div>
        </div>
    );
};
