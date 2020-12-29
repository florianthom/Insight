import React from "react";
import { Home } from "./home/home";

export interface Props {}

const App: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <Home></Home>
        </div>
    );
};
