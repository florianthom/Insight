import Head from "next/head";
import { NextPage } from "next";
import React from "react";
import { Home } from "@/src/app/home/home";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { DEFAULT_QUERY, fetchTodos, FETCHTODOS_KEY } from "@/src/app/home/todosList/services/todos-api.service";
import { FetchTodosQueryParams } from "@/src/app/home/todosList/models/fetchTodosQueryParams";

export async function getStaticProps() {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({
        queryKey: [FETCHTODOS_KEY, { default_query: DEFAULT_QUERY, page: null } as FetchTodosQueryParams],
        queryFn: fetchTodos,
        staleTime: 1000,
        cacheTime: 5000,
    });
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
}

interface Props {}

const IndexPage: NextPage<Props> = (props: Props) => {
    return (
        <div>
            <Head>
                <link rel="icon" href="/homeFill.svg" />
                <title>Florian Thom</title>
            </Head>
            <Home></Home>
        </div>
    );
};

export default IndexPage;
