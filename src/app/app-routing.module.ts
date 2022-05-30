import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { DetailsComponent } from './details/details.component';
import { EmployeesComponent } from './employees/employees.component';
import { ForgetPAsswordComponent } from './forget-password/forget-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './services/guard/authGuard.service';
import { NoAuthGuardService } from './services/guard/no-auth-guard.service';
import { VerifyMailComponent } from './verify-mail/verify-mail.component';
const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent,canActivate:[NoAuthGuardService]},
  {path:'forgetPass',component:ForgetPAsswordComponent,canActivate:[NoAuthGuardService]},
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent,canActivate:[NoAuthGuardService]},
  {path:'verify-mail',component:VerifyMailComponent,canActivate:[NoAuthGuardService]},
  {path:'home',component:HomeComponent,canActivate:[AuthGuardService],children:[
    {path:'dashboard-main',component:DashboardMainComponent},
    {path:'employees',component:EmployeesComponent},
   
  ]},
  {path:'details',component:DetailsComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
