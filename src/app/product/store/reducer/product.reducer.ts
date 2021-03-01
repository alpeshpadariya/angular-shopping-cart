import { createReducer, on, Action } from '@ngrx/store';
import { ProductModel } from '../../product.model';
import * as productAction from '../action/product.action';

export const ProductFeatureKey = 'product';

export interface ProductState {
  Products: ProductModel[];
}

export const initialState: ProductState = {
  Products: [],
};

export const productReducer = createReducer(
  initialState,
  on(productAction.addProduct, (state: ProductState, { product }) => ({
    ...state,
    Products: [...state.Products, product],
  })),
  on(productAction.deleteProduct, (state: ProductState, { product }) => ({
    ...state,
    Products: state.Products.filter(
      (x) => x.ProductName !== product.ProductName
    ),
  }))
);

export function reducer(state: ProductState | undefined, action: Action): any {
  return productReducer(state, action);
}
