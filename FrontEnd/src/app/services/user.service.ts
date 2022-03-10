import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private readonly API =  ;

  constructor(private httpClient:HttpClient) { }
}
