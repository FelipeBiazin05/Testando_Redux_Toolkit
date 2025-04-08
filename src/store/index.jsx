import { configureStore } from "@reduxjs/toolkit"

import CounterReducer from "./reducers/counterSlice"

const store = configureStore({
    reducer: {
        Counter: CounterReducer,
    }
})

export default store;


