import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        add: (state) => {state.value += 1},
        subtract: (state) => {state.value -= 1},
        addWithValue: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    }
})

//export actions
export const { add, subtract, addWithValue } = counterSlice.actions;

//export reducer
export default counterSlice.reducer
