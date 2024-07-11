import ReactDOM from "react-dom/client";
import React from "react"
import AppRouter from "./routing/AppRouter";
import { Provider } from "react-redux";
import {store} from './store'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store = {store}>
        <AppRouter />
    </Provider>
);