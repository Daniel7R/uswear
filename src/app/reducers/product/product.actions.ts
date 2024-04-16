import { createAction, props } from "@ngrx/store";

export const ADD_PRODUCT= createAction('[PRODUCT] ADD',props<{item: any}>())
export const RESET= createAction('[PRODUCT] RESET')