import { tokenName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent implements OnInit {
  user=new User();
  success:boolean;
  invalidLogin:boolean=false;
  
  constructor(private authService:AuthService,private router:Router,private userService:UserService) { }
  btnClick= function () {
    console.log("Hii");
    this.router.navigateByUrl('/searchFlight');
};

  ngOnInit():void {
  }
onLogin(loginForm:NgForm){
  console.log(loginForm.value);
  const token=this.authService.authUser(loginForm.value);
  console.log(token);
  if(token) {
    //localStorage.setItem('token',token.Email)
    console.log('login successful');
  } else{
    console.log('unsuccessful login');
  }
}

// public isValidUser(){
  

// return   this.userService.isValidUser(this.user.userEmail,this.user.userPassword).subscribe(
//       data => {​​
//         if(data == true) {​​
//           this.success = true;
//            localStorage.setItem('token',this.user.userEmail)
//            localStorage.setItem('token',this.user.userPassword)
//         }​​
//         if(this.success)
//         {
//           this.btnClick();

//         }
//         else{
//         console.log("Invalid Login Credentials..");
//       this.invalidLogin = true;
//       console.log(this.invalidLogin);
//         }

//       }  

//     );
// }

}