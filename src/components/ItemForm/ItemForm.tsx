import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../Store/Store';
import { itemSlice } from '../ItemSlice/ItemSlice';

export const ItemForm: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const editItem = useSelector((state: RootState) => state.items.editItem);
    const [name, setName] = useState('');

    useEffect(() => {
        if (editItem) setName(editItem.name);
    }, [editItem]);

    const handleSubmit = () => {
        if (editItem) {
            dispatch(itemSlice.actions.updateItem({ ...editItem, name }));
        } else {
            dispatch(itemSlice.actions.addItem({ id: Date.now(), name }));
        }
        setName('');
    };

    const handleCancel = () => {
        dispatch(itemSlice.actions.cancelEdit());
        setName('');
    };

    return (
        <div>
            <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter item name"
            />
            <button onClick={handleSubmit}>{editItem ? 'Save' : 'Add'}</button>
            {editItem && <button onClick={handleCancel}>Cancel</button>}
        </div>
    );
};