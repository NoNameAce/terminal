import { configureStore } from "@reduxjs/toolkit";
import  tableReducer  from "./table-slice/tableSlice";

export const store = configureStore({
    reducer: {
        table: tableReducer,
    }
})

export type Rootstate = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useDispatch = store.dispatch