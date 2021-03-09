import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { getPostsSelector } from '../app-state';
import * as postAction from '../app-state/actions/index.action';
import { deletePostsSuccess } from '../app-state/actions/post.action';
import { PostModel } from '../app-state/models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  user: any;
  tasks: any[] = [];
  modalRef: BsModalRef;
  constructor(public store: Store, public modalService: BsModalService) {}

  ngOnInit(): void {
    this.store.dispatch(postAction.getPosts());
    this.store.select(getPostsSelector).subscribe((response) => {
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
  editForm = new FormGroup({
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
  }

  openModal(ref: TemplateRef<any>, product) {
    this.modalRef = this.modalService.show(ref);
    this.editForm.setValue({
      title: product.title,
      price: product.price,
      category: product.category,
    });
  }

  delProduct(post: PostModel) {
    const data = confirm('Are you sure to delete?');
    if (data === true) {
      this.store.dispatch(deletePostsSuccess({ post }));
    }
  }
}
