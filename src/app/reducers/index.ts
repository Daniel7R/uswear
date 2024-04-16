import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer
 } from "@ngrx/store";
import { productReducer } from "./product/product.reducer";

 export interface State{

 }

 export const reducers: ActionReducerMap<State>={
    product: productReducer
 };

 export const metaReducers: MetaReducer<State>[]= [];