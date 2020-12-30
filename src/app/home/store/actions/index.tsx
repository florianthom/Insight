import * as constants from "../actionTypes/actionTypes";

interface IncrementCounter_Action {
    type: constants.INCREMENT_COUNTER;
    payload?: number;
}
interface DecrementCounter_Action {
    type: constants.DECREMENT_COUNTER;
    payload?: number;
}

export type Actions = IncrementCounter_Action | DecrementCounter_Action;

// without thunk, used by thunk
// returns only 1 object
// with this you can call in view (if you dont want to use thunk):
// function onIncrementCounter(): Actions {
//     return dispatch(increment());
// }

export function increment(): Actions {
    return {
        type: constants.INCREMENT_COUNTER,
    };
}

export function decrement(): Actions {
    return {
        type: constants.DECREMENT_COUNTER,
    };
}
