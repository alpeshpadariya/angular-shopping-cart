import { createReducer, on, State, Action } from '@ngrx/store';
import {
  createTask,
  deletePostsSuccess,
  getPostsSuccess,
} from '../actions/post.action';
import { PostModel } from '../models/post.model';

export interface PostState {
  post?: PostModel[];
  currentPost?: PostModel;
  deletePostId?: any;
  result?: any;
  isLoading?: boolean;
  isLoadingSuccess?: boolean;
  isLoadingFailure?: boolean;
}

export const initialState: PostState = {
  post: [],
  currentPost: {},
  deletePostId: '',
  result: '',
  isLoading: false,
  isLoadingSuccess: false,
  isLoadingFailure: false,
};

const postReducer = createReducer(
  initialState,
  on(createTask, (state, { post }) => ({
    ...state,
    isLoading: true,
    currentPost: post,
  })),
  on(getPostsSuccess, (state, action) => ({
    ...state,
    isLoadingSuccess: state.isLoadingSuccess,
    post: action.post,
  })),
  on(deletePostsSuccess, (state, action) => ({
    ...state,
    isLoadingSuccess: true,
    post: state.post.filter((x) => x.title !== action.post.title),
  }))
);

export function reducer(state: PostState | undefined, action: Action): any {
  return postReducer(state, action);
}
