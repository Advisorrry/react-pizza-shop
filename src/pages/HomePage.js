import React from 'react'
import { Categories } from '../components/Categories'
import { Header } from '../components/Header'
import { PizzaBlock } from '../components/PizzaBlock'
import { SortBy } from '../components/SortBy'


export const HomePage = () => {
    return (
        <div classNameName="wrapper">
            <Header />
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories />
                        <SortBy />
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                       <PizzaBlock />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
