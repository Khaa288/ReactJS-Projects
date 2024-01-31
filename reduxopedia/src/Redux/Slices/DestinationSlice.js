import { createSlice } from "@reduxjs/toolkit";
import { resetReduxOpedia } from "../Actions/Action";

const initialState = () => {
    return {
        destinations: [{
                name: "Hong Kong",
                days: 7,
                fact: "World's longest covered escalator"
            },
            {
                name: "Japan",
                days: 10,
                fact: "Mostly covered by mountains"
            },
            {
                name: "New Zealand",
                days: 14,
                fact: "Last country in the world inhabited(lived in) by humans"
            }
        ],
        destinationSelected: null,
    };
}

const destinationSlice = createSlice({
    name: "destination",
    initialState: initialState,
    reducers: {
        destinationClicked: (state, action) => {
            state.destinationSelected = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(resetReduxOpedia.toString(), (state) => {
            state.destinationSelected = undefined;
        });
    }
});

export const { destinationClicked, resetDestination } = destinationSlice.actions;
export const destinationReducer = destinationSlice.reducer;