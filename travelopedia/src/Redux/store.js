import { configureStore } from "@reduxjs/toolkit";
import { destinationAPI } from "../Api/DestinationAPI";
import { randomDestinationAPI } from "../Api/RandomDestinationAPI";

export const store = configureStore({
    reducer: {
        [destinationAPI.reducerPath]: destinationAPI.reducer,
        [randomDestinationAPI.reducerPath]: randomDestinationAPI.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
        .concat(destinationAPI.middleware)
        .concat(randomDestinationAPI.middleware)
});