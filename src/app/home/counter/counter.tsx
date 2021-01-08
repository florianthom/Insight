import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/app/store/reducers/rootReducer";
import { CounterState } from "../store/reducers/counterReducer";
import { incrementConterActionCreator, decrementConterActionCreator } from "@/src/app/home/store/actionCreators";

import styles from "@/src/app/home/counter/counter.module.scss";

export interface Props {}

export const Counter: React.FC<Props> = (props: Props) => {
    const state: CounterState = useSelector((state: RootState) => state.CounterState);
    const dispatch = useDispatch();

    function handleIncrementCounterButton(): void {
        dispatch(incrementConterActionCreator());
    }

    function handleDecrementCounterButton(): void {
        dispatch(decrementConterActionCreator());
    }

    return (
        <div className="flex justify-center">
            <h1>Counter: {state.Counter}</h1>
            <div className="pl-5 pr-5">
                <span className="p-5">
                    <button
                        className="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-purple-700 hover:bg-purple-900 text-white font-normal py-2 px-4 mr-1 rounded"
                        onClick={handleIncrementCounterButton}
                    >
                        +
                    </button>
                    <button
                        className="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-purple-700 hover:bg-purple-900 text-white font-normal py-2 px-4 mr-1 rounded"
                        onClick={handleDecrementCounterButton}
                    >
                        -
                    </button>
                </span>
            </div>
        </div>
    );
};
