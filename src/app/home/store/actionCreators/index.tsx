import * as constants from "@/src/app/home/store/actions";
import { CounterActionTypes } from "@/src/app/home/store/actionTypes";

export function incrementConterActionCreator(): CounterActionTypes {
    return {
        type: constants.INCREMENT_COUNTER,
        payload: 1,
    };
}

export function decrementConterActionCreator(): CounterActionTypes {
    return {
        type: constants.DECREMENT_COUNTER,
        payload: 1,
    };
}
