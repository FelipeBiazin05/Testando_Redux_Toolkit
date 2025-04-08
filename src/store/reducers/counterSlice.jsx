import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name: 'Counter',
    initialState: { valor: 0 },
    reducers: {
        incrementar: (state) => {
            state.valor += 1
        },
        decrementar: (state) => {
            state.valor -= 1
        }
    }
})

export const { incrementar, decrementar } = CounterSlice.actions;

export default CounterSlice.reducer;