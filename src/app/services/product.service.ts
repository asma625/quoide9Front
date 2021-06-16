import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getProductsFromCategory(id: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/productsByCategoryAndLimit/${id}/9`);
  }

    loadOneTrendingCategory(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/getFirstTrendingCategory`);
  }

}
