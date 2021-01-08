import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/app/store/store";
import { incrementConterActionCreator, decrementConterActionCreator } from "@/src/app/home/store/slices/counterSlice";

import styles from "@/src/app/home/counter/counter.module.scss";

export interface Props {}

export const Counter: React.FC<Props> = (props: Props) => {
    const counterState = useSelector((state: RootState) => state.counter);
    const dispatch = useDispatch();

    function handleIncrementCounterButton(): void {
        dispatch(incrementConterActionCreator({ numbertoAdjustCounter: 1 }));
    }

    function handleDecrementCounterButton(): void {
        dispatch(decrementConterActionCreator({ numbertoAdjustCounter: 1, isCompleted: true }));
    }

    return (
        <div className="flex justify-center">
            <h1>Counter: {counterState.Counter}</h1>
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
