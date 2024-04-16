import { Product } from "./reducers/models/product.model";

export interface AppState {
  readonly product: Product[];
}