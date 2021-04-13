import React from 'react'

export const Categories = React.memo(({ items, onClickItem }) => {
    const [activeItem, setActiveItem] = React.useState(0)

    const onSelectItem = (idx) => {
        setActiveItem(idx)
        onClickItem(idx)
    }
    return (
        <div className="categories">
            <ul>
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
})
