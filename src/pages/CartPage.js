import React from 'react'
import { EmptyCart } from '../components/EmptyCart'
import { FilledCart } from '../components/FilledCart'

export const CartPage = () => {
    return (
        <div className="container container--cart">
            <FilledCart />
        </div>
    )
}
