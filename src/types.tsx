export type RootStackParamList = {
    Home: undefined,
    useReducer: undefined,
    useContext: undefined,
    reduxToolKit: undefined,
}

export interface PokemonState {
    value: number,
    data: any,
    loading: string,
}

// An interface for our actions
export interface CountAction {
    type: string;
    payload: number;
}
  
// An interface for our state
export interface CountState {
    count: number;
}

export interface TodoListAction {
    type: string,
    payload: any
}

export type TodoListState = TodoListContextType

export type TodoListContextType = {
    list: {
        item: string,
        checked: boolean,
    }[],
    setTodo: (type: string) => void
}