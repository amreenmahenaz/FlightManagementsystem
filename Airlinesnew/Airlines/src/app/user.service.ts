import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
}) 
export class UserService {
  user:User
  constructor(private http:HttpClient) {}
  public registerUser(user:User):Observable<User>{
    return this.http.post<User>('http://localhost:8989/addUser',user);
  }
  public viewAllUsers():Observable<User[]>{
    return this.http.get<User[]>('http://localhost:8989/viewAllUsers');
  }
  public findUser(userId: number): Observable<User> {
    return this.http.get<User>('http://localhost:8989/findUserById/'+userId);
  }
  public isValidUser(userEmail:string,userPassword:string){
   return this.http.get<User>('http://localhost:8989/validUser/'+userEmail+'/'+userPassword);
 
}
}