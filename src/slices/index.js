import { combineReducers } from 'redux'
import filtersSlice from './filters'
import pizzasSlice from './pizzas'
import cartSlice from './cart'

const rootReducer = combineReducers({
    filtersState: filtersSlice,
    pizzasState: pizzasSlice,
    cartState: cartSlice,
})

export default rootReducer
