import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  API_URL = 'http://localhost:3030/api';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(`${this.API_URL}/products`);
  }
}
