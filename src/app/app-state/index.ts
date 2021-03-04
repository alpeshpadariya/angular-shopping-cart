import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  State,
} from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { PostState } from './reducers/post.reducer';

export const reducers: ActionReducerMap<PostState> = {};

export const metaReducers: MetaReducer<PostState>[] = !environment.production
  ? []
  : [];

export const getPostState = createFeatureSelector<PostState>('post');

export const getPostsSelector = createSelector(
  getPostState,
  (state) => state.post
);
