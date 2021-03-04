import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) {}

  // loadProducts(): Observable<ProductModel> {
  //   return this.http.get<ProductModel>(this.apiUrl);
  // }

  addProduct(product: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers };
    return this.http.post(this.apiUrl + '/products', { product }, options);
  }

  getProducts() {
    return this.http.get(this.apiUrl + '/products');
  }
}
