import React from 'react'

export const Categories = ({ items, onClickItem }) => {
    const [activeItem, setActiveItem] = React.useState(null)

    const onSelectItem = (idx) => {
        setActiveItem(idx)
    }
    return (
        <div className="categories">
            <ul>
                <li
                    className={activeItem === null ? 'active' : ''}
                    onClick={() => onSelectItem(null)}>
                    Все
                </li>
                {items.map((item, idx) => (
                    <li
                        className={activeItem === idx ? 'active' : ''}
                        onClick={() => onSelectItem(idx)}
                        key={idx}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}
