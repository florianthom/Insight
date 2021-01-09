import { FetchTodosQueryParams } from "@/src/app/home/todosList/models/fetchTodosQueryParams";

export const API: string = "https://jsonplaceholder.typicode.com";
export const DEFAULT_QUERY: string = "/todos";

export const FETCHTODOS_KEY: string = "todos";

export async function fetchTodos(reactQueryInput) {
    const [_key, queryParams]: [string, FetchTodosQueryParams] = reactQueryInput.queryKey;
    const res = await fetch(API + queryParams.default_query);
    if (!res.ok) {
        throw new Error("Network response was not ok");
    }
    return res.json();
}
