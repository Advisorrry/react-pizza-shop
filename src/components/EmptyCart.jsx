import React from 'react'
import { Link } from 'react-router-dom'
import imgCart from '../scss/assets/img/empty-cart.png'
import { Button } from './Button'

export const EmptyCart = () => {
    return (
        <div className="cart cart--empty">
            <h2>
                Корзина пустая <icon>😕</icon>
            </h2>
            <p>
                Вероятней всего, вы не заказывали ещё пиццу.
                <br />
                Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src={imgCart} alt="Empty cart" />
            <Button black>
                <Link to="/">
                    <span>Вернуться назад</span>
                </Link>
            </Button>
        </div>
    )
}
