import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Restaurant } from '../models/restaurant.model';
import { Role } from '../models/role.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API = environment.api;
  private httpOptions = {
    headers:new HttpHeaders({
    'Content-Type':'application/json'
  }),
};

  constructor(private httpClient:HttpClient) { }

  public getAllRestaurants(): Observable<Restaurant[]>
  {
    const url = `${this.API}/restaurant`;
    return this.httpClient.get<Restaurant[]>(url,this.httpOptions);
  }

  public postRestaurant(payload:Restaurant): Observable<Restaurant>
  {
    const url = `${this.API}/restaurant`;
    return this.httpClient.post<Restaurant>(url,payload,this.httpOptions);
  }

  public putRestaurant(payload:Restaurant):Observable<Restaurant>
  {
    const url = `${this.API}/restaurant`;
    return this.httpClient.put<Restaurant>(url,payload,this.httpOptions);
  }

  public getAllRoles(): Observable<Role[]>
  {
    const url = `${this.API}/role`;
    return this.httpClient.get<Role[]>(url,this.httpOptions);
  }

  public postRole(payload:Role):Observable<Role>
  {
    const url = `${this.API}/role`;
    return this.httpClient.post<Role>(url,payload,this.httpOptions);
  }
}
