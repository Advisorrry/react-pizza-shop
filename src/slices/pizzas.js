import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    isLoaded: false
}

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        setPizzas: (state, { payload }) => {
            state.items = payload
            state.isLoaded = true
        },
    },
})
export const { setPizzas } = pizzasSlice.actions

export default pizzasSlice.reducer
