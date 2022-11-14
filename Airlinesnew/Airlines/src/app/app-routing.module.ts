import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightsearchComponent } from './flightsearch/flightsearch.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:'loginLink',component:LoginComponent},
  {path:'registerLink',component:RegisterComponent},
  {path:'homeLink',component:HomeComponent},
  {path:'searchFlight',component:FlightsearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
