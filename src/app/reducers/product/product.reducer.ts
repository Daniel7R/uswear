import { createReducer, on } from '@ngrx/store';
import { ADD_PRODUCT, RESET } from './product.actions';

import { Product } from './../models/product.model';

export const initialState={
    products: []
};

export const productReducer= createReducer(initialState, 
    on(ADD_PRODUCT, (state, {item})=> {
        return{
        ...state, arr: [...state.products, item]
    }} ),
    on(RESET, (state)=> ( {...state, products: []})),
)