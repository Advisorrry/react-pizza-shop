import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFilters, getPizzas } from '../selectors'
import { setPizzas, setLoaded } from '../slices/pizzas'

export const useFetchPizzas = () => {
    const dispatch = useDispatch()
    const { items } = useSelector(getPizzas)
    const { sortBy, categories } = useSelector(getFilters)

    React.useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3001/pizzas?${
                        categories !== null ? `category=${categories}` : ''
                    }&_sort=${sortBy.type}&_order=${sortBy.order}`,
                )
                const { data } = response

                dispatch(setPizzas(data))
            } catch (e) {
                throw new Error(e)
            }
        }
        dispatch(setLoaded(false))
        getData()
    }, [dispatch, sortBy, categories])
    return {
        items,
    }
}
