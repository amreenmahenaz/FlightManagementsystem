import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { __values } from 'tslib';
import { User } from '../user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
loggedin(){
  return localStorage.getItem('token');
  

}
onlogout(){
  localStorage.removeItem('token');
  this.router.navigateByUrl('/homeLink');
}
}
