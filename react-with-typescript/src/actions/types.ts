import { DeleteTodoAction, FetchTodosAction } from ".";

export enum ActionTypes {
    FETCHTODOS,
    DELETETODO
}


export type Action = DeleteTodoAction | FetchTodosAction;