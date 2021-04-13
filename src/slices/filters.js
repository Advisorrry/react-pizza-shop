import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categories: 0,
    sortBy: 'popular',
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setSortBy: (state, { payload }) => {
            state.sortBy = payload
        },
        setCategories: (state, { payload }) => {
            state.categories = payload
        },
    },
})
export const { setSortBy, setCategories } = filtersSlice.actions

export default filtersSlice.reducer
