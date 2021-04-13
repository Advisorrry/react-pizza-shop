import React from 'react'
import { useDispatch } from 'react-redux'
import { Categories } from '../components/Categories'
import { PizzaBlock } from '../components/PizzaBlock'
import { SortBy } from '../components/SortBy'

import { setCategories } from '../slices/filters'

const categoriesArr = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']
const sortByArr = [
    { name: 'популярности', type: 'popular' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'alphabet' },
]

export const HomePage = ({ data }) => {
    const dispatch = useDispatch()

    const onSelectCategories = React.useCallback((idx) => {
        dispatch(setCategories(idx))
    }, [dispatch])
    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickItem={onSelectCategories} items={categoriesArr} />
                <SortBy items={sortByArr} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {data.map((obj) => (
                    <PizzaBlock key={obj.id} {...obj} />
                ))}
            </div>
        </div>
    )
}
