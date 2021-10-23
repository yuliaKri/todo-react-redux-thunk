import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import "./TodoList.css";
import {loadTodos, addTodo} from "./state/todos";
import loadingIcon from "./image/loading_icon.jpg";
import Task from "./Task";

function TodoList(props) {
    const {todos, loadTodos, addTodo} = props;
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
            loadTodos();
        }
        , []);

    return (
        <div className="todoListMain">
            <div className="header">
                <h1 className="App-header">My Todo List</h1>
                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="add todo"/>
                <button onClick={() => {
                    addTodo(inputValue);
                    setInputValue('')
                }}>Add todo
                </button>
            </div>
            <div>
                <ol className="todoList">
                    {todos.map(todo => (
                        <li key={todo.id}>
                            <Task todo={todo}/>
                        </li>
                    ))}
                </ol>
                {!todos.length && <img className="loading" src={loadingIcon} alt="loading..."/>}
            </div>
        </div>
    );

}

const mapStateToProps = state => ({
    todos: state.list
});

export default connect(mapStateToProps, {loadTodos, addTodo})(TodoList);
