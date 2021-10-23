import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {applyMiddleware, compose, createStore} from "redux";
import {todos} from "./state/todos";
import thunk from "redux-thunk";
import {Provider} from "react-redux";

const store = createStore(todos, compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    </Provider>,
    document.getElementById('root')
);
