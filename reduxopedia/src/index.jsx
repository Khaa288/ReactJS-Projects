import Header from "./App/Layout/Header";
import React from "react";
import ReactDOM  from "react-dom/client";
import { store } from "./Redux/Store";
import { Provider }from "react-redux";
import Counter from "./App/Components/Counter";
import DestinationList from "./App/Components/DestinationList";
import DestinationFact from "./App/Components/DestinationFact";
import ResetApp from "./App/Components/ResetApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <Provider store={store}>
            <Header/>
            <ResetApp/>
            <Counter/>
            <DestinationList/>
            <DestinationFact/>
        </Provider>
    </div>
);