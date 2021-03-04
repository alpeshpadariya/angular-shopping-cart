import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  createTask,
  createTaskSuccess,
  getPosts,
  getPostsSuccess,
  GET_TASKS,
  GET_TASKS_SUCCESS,
} from '../actions/post.action';
import { exhaustMap, map, tap } from 'rxjs/operators';
import { ApiService } from 'src/app/api.service';
import { PostModel } from '../models/post.model';
@Injectable()
export class PostEffect {
  constructor(private actions$: Actions, public service: ApiService) {}

  createPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createTask),
      exhaustMap((action) =>
        this.service
          .addProduct(JSON.stringify(action.post))
          .pipe(map((response: any) => createTaskSuccess(response)))
      )
    )
  );

  getPostsFromApi$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPosts),
      exhaustMap((action) =>
        this.service
          .getProducts()
          .pipe(map((post: PostModel[]) => getPostsSuccess({ post })))
      )
    )
  );
}
