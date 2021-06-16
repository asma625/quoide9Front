import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../interfaces/Category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/navbarCategories`);
  }

  getRandomCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/randomProductCategory`);
  }

  getTrendingCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/trendingCategories`);
  }

}
