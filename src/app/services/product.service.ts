import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get('https://api.myjson.com/bins/qzuzi');
  }
}
