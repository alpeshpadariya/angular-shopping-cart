import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { PostEffect } from '../app-state/effects/post.effect';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../app-state/reducers/post.reducer';
@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PostRoutingModule,
    StoreModule.forFeature('post', reducer),
    EffectsModule.forFeature([PostEffect]),
  ],
})
export class PostModule {}
