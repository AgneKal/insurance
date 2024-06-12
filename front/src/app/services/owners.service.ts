import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Owner } from '../models/owner';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {

  constructor(private http: HttpClient) { }

  public getOwners() {
    return this.http.get<Owner[]>('http://localhost:2999/owners/');
  }

  public getOwner(id: number){
    return this.http.get<Owner>('http://localhost:2999/owners/'+id);
  }

  public addOwner(owner: Owner) {
    return this.http.post('http://localhost:2999/owners/', owner);
  }

  public updateOwner(owner: Owner){
    return this.http.put<Owner>('http://localhost:2999/owners/', owner);
  }

  public deleteOwner(id: number){
    return this.http.delete('http://localhost:2999/owners/'+id);
  }

}
