import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    isLoaded: false,
}

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        setPizzas: (state, { payload }) => {
            state.items = payload
            state.isLoaded = true
        },
        setLoaded: (state, { payload }) => {
            state.isLoaded = payload
        },
    },
})
export const { setPizzas, setLoaded } = pizzasSlice.actions

export default pizzasSlice.reducer
