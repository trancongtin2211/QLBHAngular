import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from '../models/restaurant.model';
import { Role } from '../models/role.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API:string =  "https://localhost:5001/api";
  private httpOptions = {
    headers:new HttpHeaders({
    'Content-Type':'application/json'
  }),
};

  constructor(private httpClient:HttpClient) { }

  public getAllRestaurant(): Observable<Restaurant[]>
  {
    const url = `${this.API}/restaurant`;
    return this.httpClient.get<Restaurant[]>(url,this.httpOptions);
  }

  public postRestaurant(payload:Restaurant): Observable<any>
  {
    const url = `${this.API}/restaurant`;
    return this.httpClient.post<Restaurant>(url,payload,this.httpOptions);
  }

  public getAllRoles(): Observable<Role[]>
  {
    const url = `${this.API}/role`;
    return this.httpClient.get<Role[]>(url,this.httpOptions);
  }
}
