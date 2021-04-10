import React from 'react'
import { Categories } from '../components/Categories'
import { PizzaBlock } from '../components/PizzaBlock'
import { SortBy } from '../components/SortBy'

export const HomePage = ({data}) => {
    return (
        <div className="container">
            <div className="content__top">
                <Categories items={['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']} />
                <SortBy items={['популярности', 'цене', 'алфавиту']} />
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
