import { Injectable } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user=new User();
  constructor(private userService:UserService) { }
  authUser(user:any){
    
    //console.log("dfdf")
  return   this.userService.isValidUser(this.user.userEmail,this.user.userPassword).subscribe(
               data=>{
                 this.user=data;
                 console.log(JSON.stringify(data));
               }
  )
   
}
}
