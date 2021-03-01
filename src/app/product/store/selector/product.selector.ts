import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import * as fromProduct from '../reducer/product.reducer';

export const productSelectorState = createFeatureSelector<fromProduct.ProductState>(
  fromProduct.ProductFeatureKey
);

export const selectProducts = createSelector(
  productSelectorState,
  (state: fromProduct.ProductState) => state.Products
);
