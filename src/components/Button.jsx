import classNames from 'classnames'
import React from 'react'

export const Button = ({children, outline, add, cart, onClick, black, pay, goBack, circle}) => {
    return (
        <button onClick={onClick} className={classNames('button', {
            'button--outline': outline,
            'button--add': add,
            'button--cart': cart,
            'button--black': black,
            'pay-btn': pay,
            'go-back-btn': goBack,
            'button--circle': circle,
        })}>{children}</button>
    )
}
