import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { getPostsSelector } from '../app-state';
import * as postAction from '../app-state/actions/index.action';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  user: any;
  tasks: any[] = [];
  constructor(public store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(postAction.getPosts());
    this.store.select(getPostsSelector).subscribe((response) => {
      console.log('asdf', response);
      this.tasks = response;
    });
  }

  todoForm = new FormGroup({
    title: new FormControl('', Validators.nullValidator && Validators.required),
    price: new FormControl('', Validators.nullValidator && Validators.required),
    category: new FormControl(
      '',
      Validators.nullValidator && Validators.required
    ),
  });

  onSubmit() {
    console.log(this.todoForm.value);
    const post = {
      title: this.todoForm.value.title,
      price: this.todoForm.value.price,
      category: this.todoForm.value.category,
    };
    this.store.dispatch(postAction.createTask({ post }));
    this.todoForm.reset();
    alert('added');
  }
}
