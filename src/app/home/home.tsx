import React from "react";
import { Counter } from "@/src/app/home/counter/counter";
import { TodoList } from "@/src/app/home/todosList/todoList";
import { NavBar } from "@/src/app/shared/navbar/navbar";

{
    /*        <Counter></Counter>*/
}
{
    /*        <TodoList></TodoList>*/
}
export interface Props {}

export const Home: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <div className="custom-background-image">
                <NavBar></NavBar>
                <div className="absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2">
                    <div className="text-white">FLORIAN THOM</div>
                    <div>
                        <div className="p-80">test</div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
            </div>
            <div className="md:container md:mx-auto p-5">text</div>
            <footer></footer>
        </div>
    );
};
