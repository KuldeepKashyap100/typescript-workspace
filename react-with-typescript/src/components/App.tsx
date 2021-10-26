import { connect } from "react-redux";
import React from "react";
import { deleteTodo, fetchTodos, Todo } from "../actions";
import { StoreState } from "../reducers";

// const App = (props: AppProps): JSX.Element => {
//     return <div>{props.color}</div>
// }

interface AppProps {
    todos: Todo[],
    fetchTodos: Function,
    deleteTodo: typeof deleteTodo
}

interface AppState {
    loading: boolean;
}

class _App extends React.Component<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props);
        this.state = { loading: false };
    }

    onFetchButtonClick() {
        this.props.fetchTodos();
        this.setState({loading: true});
    }

    componentDidUpdate(prevProps: AppProps) {
        if(!prevProps.todos.length && this.props.todos.length)
            this.setState({loading: false});
    }

    renderTodoList(): JSX.Element[] {
        return this.props.todos.map(todo => 
            <div key={todo.id} onClick={() => this.props.deleteTodo(todo.id)}  style={{padding: "3rem", margin: "1rem", border: "2px solid black", background: "skyblue", color: "black"}}>
                <div>ID: {todo.id}</div>
                <div>Title: {todo.title}</div>
                <div>status: {todo.completed}</div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <button onClick={() => this.onFetchButtonClick()}>Fetch</button>
                {this.state.loading ? <h2>Loading</h2>: null}
                {this.renderTodoList()}
            </div>
        );
    }
}


const mapStateToProps = ({todos}: StoreState): { todos: Todo[]} => {
    return { todos };
}

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);