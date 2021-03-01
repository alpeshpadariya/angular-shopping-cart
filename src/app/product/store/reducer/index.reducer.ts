import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import * as fromProduct from '../reducer/product.reducer';

export interface State {}

export const reducers: ActionReducerMap<State> = {
  [fromProduct.ProductFeatureKey]: fromProduct.productReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
