import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export const namespace = 'categories';

// Reducer with inital state
const INITAL_STATE = {
    loading: true,
    categories: null,
    error: false
};

const slice = createSlice({
    name: namespace,
    initialState: INITAL_STATE,
    reducers: {
        getCategories: (state: any, action: PayloadAction<any>): any => ({
            ...state,
            loading: true,
            error: false,
        }),
        getCategoriesFinish: (state: any, action: PayloadAction<any>): any => {
            return {
                ...state,
                loading: false,
                categories: action.payload.data ? (state.categories || []).concat(action.payload.data) : state.categories,
                error: action.payload.error ? action.payload.error : false
            }
        }
    }
});

export const reducer = slice.reducer;

export const { getCategories, getCategoriesFinish } = slice.actions;

export const categoriesSelector = state => state[namespace]
