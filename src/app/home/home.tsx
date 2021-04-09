import React from "react";
import { Counter } from "@/src/app/home/counter/counter";
import { TodoList } from "@/src/app/home/todosList/todoList";
import { NavBar } from "@/src/app/shared/navbar/navbar";
import Image from "next/image";

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
                <div className="absolute top-1/2 left-1/2 custom-transform-mid pt-32">
                    <h1 className="text-white text-5xl tracking-more-than-wide">FLORIAN THOM</h1>
                    <h2 className="text-white text-3xl pt-5">
                        Computer science enthusiast - Interested in research & development. Open to new technologies in
                        software and hardware
                    </h2>
                    {/*social home group*/}
                    <div className="pt-5">
                        <a href="https://www.linkedin.com/in/florianthom/" className="pr-4">
                            <Image src="/linkedIn_transparent.png" alt="me" width="32" height="32" />
                        </a>
                        <a href="https://github.com/FlorianTh2" className="pr-4">
                            <Image src="/github_transparent.png" alt="me" width="32" height="32" />
                        </a>
                        <a href="mailto:thom.florian@yahoo.de" className="pr-4">
                            <Image src="/mail_tranparent.png" alt="me" width="32" height="32" />
                        </a>
                        <a href="https://www.linkedin.com/in/florianthom/" className="pr-4">
                            <Image src="/discord_transparent.png" alt="me" width="32" height="32" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="main-color">
                <div className="md:container md:mx-auto p-5">
                    <h2 className="text-white text-3xl">RECENT WORK</h2>
                    <div className="text-base text-white">
                        Over the course of my career I have encountered many technologies and gained experience in
                        numerous areas. I love to learn new technologies and to examine them for advantages and
                        disadvantages compared to the already known alternatives. Since some projects could be private,
                        arent even published on github or mentioned at my CV, here is a small snipped of my recent work.
                    </div>
                </div>
            </div>
            <footer></footer>
        </div>
    );
};
