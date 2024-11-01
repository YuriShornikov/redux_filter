import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../Store/Store';
import { itemSlice } from '../ItemSlice/ItemSlice';

export const ItemList: React.FC = () => {
    const filter = useSelector((state: RootState) => state.items.filter);
    const items = useSelector((state: RootState) => state.items.items);
    const dispatch = useDispatch<AppDispatch>();

    // Фильтрация элементов на основе введенного значения
    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
            {/* Поле с фильтром */}
            
            <input 
                type="text" 
                placeholder="Фильтр по названию" 
                value={filter} 
                onChange={(e) => dispatch(itemSlice.actions.setFilter(e.target.value))} 
            />
            <ul>
                {filteredItems.map(item => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => dispatch(itemSlice.actions.setEditItem(item.id))}>Edit</button>
                        <button onClick={() => dispatch(itemSlice.actions.deleteItem(item.id))}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
