import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl : string = 'http://localhost:3000/users'

  constructor(private http: HttpClient) { }

  getUsers() : Observable<User[]> {
    let uri = this.apiUrl
    return this.http.get<User[]>(uri);
  }

  toggleUser(user : User){
    let uri = this.apiUrl + "/" + user.id;

    let body = {completed: user.completed }

    return this.http.patch(uri, body);
  }

  createUser(user : User) {
    let uri = this.apiUrl;
    return this.http.post(uri, user);
  }

  deleteUser(user: User){
    let uri = this.apiUrl + "/" + user.id;

    return this.http.delete(uri);
  }
  updateUser(){
    
  }

}
