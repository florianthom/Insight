import * as constants from "@/src/app/home/store/actions";

interface IncrementCounterActionType {
    type: constants.INCREMENT_COUNTER;
    payload: number;
}
interface DecrementCounterActionType {
    type: constants.DECREMENT_COUNTER;
    payload: number;
}

export type CounterActionTypes = IncrementCounterActionType | DecrementCounterActionType;
