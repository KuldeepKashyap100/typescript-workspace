import { Todo, ActionTypes, Action } from "../actions";

export const todosReducer = (state: Todo[] = [], action: Action) => {
    switch(action.type) {
        case ActionTypes.FETCHTODOS: 
            return action.payload;
        case ActionTypes.DELETETODO:
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
}