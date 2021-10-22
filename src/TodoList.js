import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./TodoList.css";
import { loadTodos } from "./state/todos";

class TodoListBase extends Component {
  componentWillMount() {
    this.props.loadTodos();
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <h1>My Todo List</h1>
          <input placeholder="Todo" />
          <button> Add Todo </button>
        </div>
        <div>
          <ol class="todoList">
            {this.props.todos.map(todo => (
              <li>{todo}</li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.list
});

const mapDispatchToProps = dispatch => ({
  loadTodos: bindActionCreators(loadTodos, dispatch)
});

export const TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListBase);
