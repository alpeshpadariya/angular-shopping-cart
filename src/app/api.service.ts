import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import ProductModel from './product/product.model';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  loadProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
