import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  public getUsers(){
    return this.http.get<User[]>('http://localhost:2999/users/');
  }

  public getUser(id:number){
    return this.http.get<User>('http://localhost:2999/users/' + id);
  }

  public updateUser(user:User){
    return this.http.put('http://localhost:2999/users/' + user.id, user);
  }
  public deleteUser(id:number){
    return this.http.delete('http://localhost:2999/users/' + id);
  }
}
