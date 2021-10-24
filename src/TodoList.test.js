// add test coverage for the TodoList component here
import React from 'react';
import {render, screen} from '@testing-library/react';
import {applyMiddleware, createStore} from "redux";
import {todos} from "./state/todos";
import {Provider} from "react-redux";
import TodoList from "./TodoList";
import thunk from "redux-thunk";
import Task from "./Task";

const store = createStore(todos, applyMiddleware(thunk));
const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
);

const initialValues = {list:[{id: Math.random(), name: "todo one"}, {id: Math.random(), name:"todo two"}]};

it("tests something", () => {
    const doc = render(<TodoList />, { wrapper: Wrapper });
    const inputElement = doc.getByTestId('input');
    const todos = doc.queryAllByTestId('todo');
    const createButtonElement = screen.getByTestId('createButton');
    expect(inputElement.getAttribute('value')).toBe('');
    expect(createButtonElement).toBeTruthy();
    expect(todos.length).toBe(0);

    render(<Task todo={initialValues}/>, { wrapper: Wrapper });
    const todoDeleteButton = doc.getByTestId('deleteButton');
    const todoEditButton = doc.getByTestId('editButton');
    expect(todoDeleteButton).toBeTruthy();
    expect(todoEditButton).toBeTruthy();
});