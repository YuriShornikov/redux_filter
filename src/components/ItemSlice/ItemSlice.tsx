import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Item {
    id: number;
    name: string;
}

export interface ItemState {
    items: Item[];
    editItem: Item | null;
    filter: string;
}

export const initialState: ItemState = {
    items: [],
    editItem: null,
    filter: '',
};

export const itemSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Item>) => {
            state.items.push(action.payload);
        },
        setEditItem: (state, action: PayloadAction<number>) => {
            state.editItem = state.items.find(item => item.id === action.payload) || null;
        },
        updateItem: (state, action: PayloadAction<Item>) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload;
                state.editItem = null;
            }
        },
        deleteItem: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            if (state.editItem?.id === action.payload) {
                state.editItem = null;
            }
        },
        cancelEdit: (state) => {
            state.editItem = null;
        },
        setFilter: (state, action: PayloadAction<string>) => {
            state.filter = action.payload;
        }
    }
});

