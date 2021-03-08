import { createAction, props } from '@ngrx/store';
import { PostModel } from '../models/post.model';

export const CREATE_TASK = '[TASK] CREATE';
export const CREATE_TASK_SUCCESS = '[TASK] CREATE SUCCESS';
export const CREATE_TASK_FAILED = '[TASK] CREATE FAILED';

export const GET_TASKS = '[GET] POSTS';
export const GET_TASKS_SUCCESS = '[GET] POSTS SUCCESS';
export const GET_TASKS_FAILED = '[GET] POSTS FAILED';

export const DELETE_POST = '[DELETE] POSTS';
export const DELETE_POST_SUCCESS = '[DELETE] POSTS SUCCESS';
export const DELETE_POST_FAILED = '[DELETE] POSTS FAILED';

export const createTask = createAction(CREATE_TASK, props<{ post: any }>());
export const createTaskSuccess = createAction(
  CREATE_TASK,
  props<{ post: any }>()
);
export const createTaskFailed = createAction(
  CREATE_TASK,
  props<{ post: any }>()
);

export const getPosts = createAction(GET_TASKS);
export const getPostsSuccess = createAction(
  GET_TASKS_SUCCESS,
  props<{ post: PostModel[] }>()
);
export const getPostsFailed = createAction(GET_TASKS_FAILED, props<{ any }>());

export const deletePosts = createAction(DELETE_POST);
export const deletePostsSuccess = createAction(
  DELETE_POST_SUCCESS,
  props<{ post: PostModel }>()
);
export const deletePostsFailed = createAction(
  DELETE_POST_FAILED,
  props<{ any }>()
);
