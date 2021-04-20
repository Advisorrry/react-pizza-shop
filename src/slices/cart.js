import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            if (!state.items[payload.id]) {
                state.items[payload.id] = []
            }
            state.items[payload.id].push(payload)

            state.totalCount++
            state.totalPrice += payload.price
        },
        setTotalPrice: (state, { payload }) => {
            state.totalPrice = payload
        },
        setTotalCount: (state, { payload }) => {
            state.totalCount = payload
        },
        removePizza: (state, { payload }) => {
            delete state.items[payload]
        },
        clearCart: (state) => {
            state.items = []
            state.totalPrice = 0
            state.totalCount = 0
        },
    },
})
export const { setTotalPrice, setTotalCount, addToCart, removePizza, clearCart } = cartSlice.actions

export default cartSlice.reducer
