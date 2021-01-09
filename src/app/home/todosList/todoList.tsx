import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import { ITodo } from "@/src/app/home/shared/models/itodo";
import { Todo } from "@/src/app/home/todo/todo";
import { DEFAULT_QUERY, fetchTodos, FETCHTODOS_KEY } from "@/src/app/home/todosList/services/todos-api.service";
import { FetchTodosQueryParams } from "@/src/app/home/todosList/models/fetchTodosQueryParams";

interface Props {}

export const TodoList: React.FC<Props> = (props: Props) => {
    const todosQuery = useQuery<ITodo[], Error>({
        queryKey: [FETCHTODOS_KEY, { default_query: DEFAULT_QUERY, page: null } as FetchTodosQueryParams],
        queryFn: fetchTodos,
        staleTime: 1000,
        cacheTime: 5000,
    });

    if (todosQuery.status === "loading") return <h1>Loading...</h1>;
    if (todosQuery.status === "error") return <span>{todosQuery.error.message}</span>;

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
