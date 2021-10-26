import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

export interface Todo {
    id: number,
    title: string,
    completed: boolean
}

export interface FetchTodosAction {
    type: ActionTypes.FETCHTODOS,
    payload: Todo[],
}

export interface DeleteTodoAction {
    type: ActionTypes.DELETETODO,
    payload: number
}


const url = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get<Todo[]>(url);
        setTimeout(() => {
           dispatch<FetchTodosAction>({
            type: ActionTypes.FETCHTODOS,
            payload: response.data
        }); 
        }, 5000);
        
    }
}

export const deleteTodo = (id: number): DeleteTodoAction => {
    return {
        type: ActionTypes.DELETETODO,
        payload: id
    }
}