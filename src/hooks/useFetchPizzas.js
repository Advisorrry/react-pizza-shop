import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPizzas } from '../selectors'
import { setPizzas } from '../slices/pizzas'

export const useFetchPizzas = () => {
    const dispatch = useDispatch()
    const { items } = useSelector(getPizzas)

    React.useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/db.json')
                const { pizzas } = response.data

                dispatch(setPizzas(pizzas))
            } catch (e) {
                throw new Error(e)
            } 
        }
        getData()
    }, [dispatch])
    return {
        items
    }
}
