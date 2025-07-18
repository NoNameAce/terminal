import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    selected: "ВСЕ",
}
export const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        setData(state, action) {
            state.data = action.payload
        },
        setSelected(state, action) {
            state.selected = action.payload
        },
    }
})

export default tableSlice.reducer
export const {setData, setSelected} = tableSlice.actions