import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class SingnupService {

  private apiUrl = environment.apiUrl;

  constructor(private http :  HttpClient) { }
  public registerUser(user : User):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/inscription`,user) ;
  }
}
