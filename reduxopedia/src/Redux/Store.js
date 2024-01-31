import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./Slices/CounterSlice";
import { destinationReducer } from "./Slices/DestinationSlice";

export const store = configureStore({
    reducer: {
        counterStore: counterReducer,
        destinationStore: destinationReducer
    }
});