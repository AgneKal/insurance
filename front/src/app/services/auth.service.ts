import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  public registerUser(user: User) {
    console.log("Registruojame naują vartotoją");
    return this.httpClient.post("http://localhost:2999/auth/signin", user)
  }

  public loginUser(user: User) {
    return this.httpClient.post("http://localhost:2999/auth/login", user)
  }


}
