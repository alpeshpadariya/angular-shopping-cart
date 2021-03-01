import { createAction } from '@ngrx/store';
import { ProductModel } from '../../product.model';

export const addProduct = createAction(
  '[Product] Add',
  (product: ProductModel) => ({ product })
);

export const deleteProduct = createAction(
  '[Product] Delete',
  (product: ProductModel) => ({ product })
);
