import { combineReducers } from 'redux'
import filtersSlice from './filters'
import pizzasSlice from './pizzas'

const rootReducer = combineReducers({
    filtersState: filtersSlice,
    pizzasState: pizzasSlice
})

export default rootReducer
