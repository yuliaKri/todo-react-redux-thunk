import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import "./TodoList.css";
import {addTodo, deleteTodo, loadTodos} from "./state/todos";
import delIcon from "./image/del_icon.jpg";
import loadingIcon from "./image/loading_icon.jpg";

function TodoList(props) {
    const {loadTodos, addTodo, todos, deleteTodo} = props;
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
                            <div className='todoContainer'>
                                {todo.name}
                                <button onClick={() => deleteTodo(todo.id)} className="buttonDelAdd"><img src={delIcon}
                                                                                                          alt="del"/>
                                </button>
                            </div>
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

export default connect(mapStateToProps, {loadTodos, addTodo, deleteTodo})(TodoList);
