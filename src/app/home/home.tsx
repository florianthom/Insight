import React from "react";
import { Counter } from "@/src/app/home/counter/counter";
import { TodoList } from "@/src/app/home/todosList/todoList";

export interface Props {}

export const Home: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <h1>Home</h1>
            <div className="p-5">
                <div className="p-5">
                    <Counter></Counter>
                </div>
                <div className="p-5">
                    <TodoList></TodoList>
                </div>
            </div>
        </div>
    );
};
