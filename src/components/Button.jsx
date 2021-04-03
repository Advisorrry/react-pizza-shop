import classNames from 'classnames'
import React from 'react'

export const Button = ({children, outline, add, cart, onClick}) => {
    return (
        <button onClick={onClick} className={classNames('button', {
            'button--outline': outline,
            'button--add': add,
            'button--cart': cart
        })}>{children}</button>
    )
}
