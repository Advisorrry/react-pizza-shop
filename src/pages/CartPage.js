import React from 'react'
import { useSelector } from 'react-redux'
import { EmptyCart } from '../components/EmptyCart'
import { FilledCart } from '../components/FilledCart'
import { getCart } from '../selectors'

export const CartPage = () => {
    const {items} = useSelector(getCart)
    const totalAddedPizza = Object.values(items).map(key => (key.length))
    return (
        <div className="container container--cart">
            {!Object.keys(items).length ? <EmptyCart /> : <FilledCart items={items} totalAddedPizza={totalAddedPizza} /> }
        </div>
    )
}
