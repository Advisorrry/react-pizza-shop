import React from 'react'

export const Categories = React.memo(({ items, onClickItem, activeCategory }) => {

    const onSelectItem = (idx) => {
        onClickItem(idx)
    }
    return (
        <div className="categories">
            <ul>
                {items.map((item, idx) => (
                    <li
                        className={activeCategory === idx ? 'active' : ''}
                        onClick={() => onSelectItem(idx)}
                        key={idx}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
})
