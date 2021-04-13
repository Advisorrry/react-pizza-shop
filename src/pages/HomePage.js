import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Categories } from '../components/Categories'
import { MyLoader } from '../components/Loader'
import { PizzaBlock } from '../components/PizzaBlock'
import { SortBy } from '../components/SortBy'
import { getFilters, getPizzas } from '../selectors'

import { setCategories, setSortBy } from '../slices/filters'

const categoriesArr = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']
const sortByArr = [
    { name: 'популярности', type: 'popular' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'alphabet' },
]

export const HomePage = ({ data }) => {
    const dispatch = useDispatch()
    const { isLoaded } = useSelector(getPizzas)
    const { categories, sortBy } = useSelector(getFilters)

    const onSelectCategories = React.useCallback(
        (idx) => {
            dispatch(setCategories(idx))
        },
        [dispatch],
    )
    const onSelectSortType = React.useCallback(
        (type) => {
            dispatch(setSortBy(type))
        },
        [dispatch],
    )
    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={categories}
                    onClickItem={onSelectCategories}
                    items={categoriesArr}
                />
                <SortBy activeSortBy={sortBy} onClickSortType={onSelectSortType} items={sortByArr} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded
                    ? data.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
                    : Array(10)
                          .fill(0)
                          .map((_, idx) => <MyLoader key={idx} />)}
            </div>
        </div>
    )
}
