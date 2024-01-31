import { createSlice } from "@reduxjs/toolkit";
import { resetReduxOpedia } from "../Actions/Action";

const initialState = () => { return { count: 0 } };

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: // contains all actions of a state
    {
        increment: (state) => {
            state.count += 1;
        },

        decrement: (state) => {
            state.count -= 1;
        },

        incrementMultiplier: (state, action) => {
            state.count += Number(action.payload);
        },

        decrementMultiplier: (state, action) => {
            state.count -= Number(action.payload);
        },
    },

    // the same as in the "reducers"
    // resetCounter: (state) => {
    //     state.count = 0;
    // }

    extraReducers: (builder) => {
        builder.addCase(resetReduxOpedia.toString(), (state) => {
            state.count = 0;
        });
    }
});

export const {
    increment,
    decrement,
    incrementMultiplier,
    decrementMultiplier
} = counterSlice.actions;

export const counterReducer = counterSlice.reducer;