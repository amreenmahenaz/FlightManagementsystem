import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user=new User();
  // public barLabel: string = "Password strength:";
  // public myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];
  private _userService:UserService;
  constructor(private userService:UserService,private router: Router) {
    this._userService=userService;
   }
   btnClick= function () {
    this.router.navigateByUrl('/loginLink');
};

  ngOnInit():void {
  }
  public registerUser(){
    this._userService.registerUser(this.user).subscribe(
      data=>{
        console.log(JSON.stringify(data));
       this.user=data;
      }
    );
    
    //console.log(JSON.stringify(this.user));
  }
  // UserName Validations
  nameFlag: boolean= false;
  validateName() {
    var flag =  /^[a-zA-Z ]+$/.test(this.user.firstName);
    if(!flag) {
      this.nameFlag=true;
    }
    else {
      this.nameFlag=false;
    }
  }
  nameFlag2: boolean= false;
  validateName2() {
    var flag =  /^[a-zA-Z ]+$/.test(this.user.lastName);
    if(!flag) {
      this.nameFlag2=true;
    }
    else {
      this.nameFlag2=false;
    }
  }

  // UserPhone valdiations
  phoneFlag:boolean=false;
    validatePhone(){
        let phone=String(this.user.userMobile);
        if(phone.length!=10){
            this.phoneFlag=true;
        }else{
            this.phoneFlag=false;
        }
    }

    //UserEmail Validation
    emailFlag:boolean=false;
    validateEmail(){
        var flag=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.user.userEmail);
        if(!flag){
            this.emailFlag=true;
        }else{
            this.emailFlag=false;
        }
    }
    dateFlag:boolean=false;
    validateDate(){
        var flag=this.user.userDateOfBirth;
        if(flag=null){
            this.dateFlag=true;
        }else{
            this.dateFlag=false;
        }
    }

    buttonFlag:boolean=true;
    enableButton(){
        this.buttonFlag=this.nameFlag && this.nameFlag2 && this.emailFlag && this.phoneFlag && this.dateFlag;
    }
}
