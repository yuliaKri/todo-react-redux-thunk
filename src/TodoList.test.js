/*
// add test coverage for the TodoList component here
it("tests something", () => {});
*/
import * as React from 'react';
import {ContextApp} from "./App";
import {cleanup, render} from "@testing-library/react";
import {afterEach, describe, it} from "jest-circus";
import TodoList from "./TodoList";
import {State} from "jest-circus";

describe('<TasksList />',() => {

    afterEach(cleanup);

    const testState: State = {
        newTask: '',
        tasks: [{name: 'test', id: 1}, {name: 'test2', id: 2}]
    }

    const Wrapper = () => {
        return (
            <ContextApp.Provider value={{state: testState}}>
                <TodoList/>
            </ContextApp.Provider>
        )
    }

    it('should render right tasks length', async () => {
        const {container} = render(<Wrapper/>);

// Проверяем длину отображаемого списка
        expect(container.querySelectorAll('li')).toHaveLength(testState.tasks.length);
    });

})
