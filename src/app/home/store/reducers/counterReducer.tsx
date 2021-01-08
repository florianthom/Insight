import * as constants from "@/src/app/home/store/actions";
import { CounterActionTypes } from "@/src/app/home/store/actionTypes";

export interface CounterState {
    Counter: number;
}

const initialState: CounterState = {
    Counter: 0,
};

export function counterReducer(state: CounterState = initialState, action: CounterActionTypes): CounterState {
    switch (action.type) {
        case constants.INCREMENT_COUNTER:
            return {
                ...state,
                Counter: state.Counter + action.payload,
            };
        case constants.DECREMENT_COUNTER:
            return {
                ...state,
                Counter: state.Counter - action.payload,
            };
        default:
            return state;
    }
}
