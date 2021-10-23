import React, {useState} from "react";
import "./App.css";
import delIcon from "./image/del_icon.jpg";
import {connect} from "react-redux";
import {editTodo, loadTodos, deleteTodo} from "./state/todos";

function Task(props) {

    const {deleteTodo, editTodo, todo} = props;

    const [newName, setNewName] = useState('');
    const [toggle, setToggle] = useState(false);

    return (

        <div className='todoContainer'>
            {todo.name}
            <button onClick={() => deleteTodo(todo.id)} className="buttonDelAdd"><img src={delIcon}
                                                                                      alt="del"/>
            </button>
            <button onClick={()=>setToggle(true)} >edit</button>
            {toggle && <input value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="change todo"/>}
            {toggle && <button onClick={() => {editTodo(todo.id, newName);setToggle(false)}} >save</button>}

        </div>

    );
}

const mapStateToProps = state => ({
    todos: state.list
});

export default connect(mapStateToProps, {loadTodos, deleteTodo, editTodo})(Task);