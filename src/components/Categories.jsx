import React from 'react'

export const Categories = React.memo(({ items, onClickItem, activeCategory }) => {

    
    return (
        <div className="categories">
            <ul>
            <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onClickItem(null)}>
          Все
        </li>
                {items.map((item, idx) => (
                    <li
                        className={activeCategory === idx ? 'active' : ''}
                        onClick={() => onClickItem(idx)}
                        key={idx}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
})
