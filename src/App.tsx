import React from 'react';
import { ItemForm } from './components/ItemForm/ItemForm';
import { ItemList } from './components/ItemList/ItemList';

export const App: React.FC = () => {
    return (
        <div>
            <h1>Item Manager</h1>
            <ItemForm />
            <ItemList />
        </div>
    );
};
