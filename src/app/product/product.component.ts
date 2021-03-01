import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductModel } from './product.model';
import { addProduct, deleteProduct } from './store/action/product.action';
import { ProductState } from './store/reducer/product.reducer';
import { selectProducts } from './store/selector/product.selector';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  productDatas$: Observable<ProductModel[]>;
  constructor(public store: Store<ProductState>) {
    this.productDatas$ = this.store.pipe(select(selectProducts));
    //  console.log('test', this.productDatas$);
  }

  ngOnInit(): void {}

  addProduct(name: string): void {
    const productModel = new ProductModel();
    productModel.ProductName = name;
    this.store.dispatch(addProduct(productModel));
    console.log(productModel);
  }

  deleteProduct(product) {
    console.log(product);
    const productModel = new ProductModel();
    productModel.ProductName = product;
    this.store.dispatch(deleteProduct(productModel));
    console.log(productModel);
  }
}
