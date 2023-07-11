import { CountAction, CountState } from "../types";

export function reducerFunction(state:CountState, action: CountAction) {
    const { type, payload } = action;
    console.log(type, typeof state, payload)
    // switch case can go here
    switch (type) {
        case 'increment':
            return { ...state, count: state.count + payload }
        case 'decrement':
            return { ...state, count: state.count - payload }    
        default:
            return state;
    }
}