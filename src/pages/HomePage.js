import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Categories } from '../components/Categories'
import { MyLoader } from '../components/Loader'
import { PizzaBlock } from '../components/PizzaBlock'
import { SortBy } from '../components/SortBy'
import { getCart, getFilters, getPizzas } from '../selectors'
import { addToCart } from '../slices/cart'

import { setCategories, setSortBy } from '../slices/filters'

const categoriesArr = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']
const sortByArr = [
    { name: 'популярности', type: 'popular', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавиту', type: 'title', order: 'asc' },
]

export const HomePage = ({ data }) => {
    const dispatch = useDispatch()
    const { isLoaded } = useSelector(getPizzas)
    const { categories, sortBy } = useSelector(getFilters)
    const { items } = useSelector(getCart)

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
    const onClickAddPizza = useCallback(
        (piz) => {
            dispatch(addToCart(piz))
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
                <SortBy
                    activeSortBy={sortBy.type}
                    onClickSortType={onSelectSortType}
                    items={sortByArr}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded
                    ? data.map((obj) => (
                          <PizzaBlock
                              addedPizzaCount={items[obj.id] && items[obj.id].length}
                              onClickAddPizza={onClickAddPizza}
                              key={obj.id}
                              {...obj}
                          />
                      ))
                    : Array(10)
                          .fill(0)
                          .map((_, idx) => <MyLoader key={idx} />)}
            </div>
        </div>
    )
}
