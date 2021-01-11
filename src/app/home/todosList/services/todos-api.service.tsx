import { FetchTodosQueryParams } from "@/src/app/home/todosList/models/fetchTodosQueryParams";

export const API = "https://jsonplaceholder.typicode.com";
export const DEFAULT_QUERY = "/todos";

export const FETCHTODOS_KEY = "todos";

export async function fetchTodos(reactQueryInput) {
    const [_key, queryParams]: [string, FetchTodosQueryParams] = reactQueryInput.queryKey;
    const res = await fetch(API + queryParams.default_query);
    if (!res.ok) {
        throw new Error("Network response was not ok");
    }
    return res.json();
}
