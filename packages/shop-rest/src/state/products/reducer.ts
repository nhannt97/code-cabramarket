import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export const namespace = 'products'

// Reducer with inital state
const INITAL_STATE = {
    loading: true,
    products: null,
    error: false
};

const slice = createSlice({
    name: namespace,
    initialState: INITAL_STATE,
    reducers: {
        getProducts: (state: any, action: PayloadAction<any>): any => ({
            ...state,
            loading: true,
            error: false,
        }),
        getProductsFinish: (state: any, action: PayloadAction<any>): any => {
            return {
                ...state,
                loading: false,
                products: action.payload.data ? (state.products || []).concat(action.payload.data) : state.products,
                error: action.payload.error ? action.payload.error : false
            }
        }
    }
});

export const reducer = slice.reducer;

export const { getProducts, getProductsFinish } = slice.actions;

export const productsSelector = state => state[namespace]
