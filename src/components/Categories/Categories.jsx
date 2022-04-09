import React from 'react';

function Categories({ items, onClick }) {
  const [activeItem, SetActiveItem] = React.useState(null);
  return (
    <div className='categories'>
      <ul>
        <li onClick={() => SetActiveItem(null)} className={activeItem === null ? 'active' : ''}>
          Все
        </li>
        {items &&
          items.map((item, index) => (
            <li
              className={activeItem === index ? 'active' : ''}
              onClick={() => SetActiveItem(index)}
              key={`${item}_${index}`}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Categories;
