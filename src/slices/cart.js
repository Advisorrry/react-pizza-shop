import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setTotalPrice:(state, {payload}) => {
            state.totalPrice = payload
        },
        setTotalCount:(state, {payload}) => {
            state.totalCount = payload
        },
        
    },
})
export const { setTotalPrice, setTotalCount } = cartSlice.actions

export default cartSlice.reducer
