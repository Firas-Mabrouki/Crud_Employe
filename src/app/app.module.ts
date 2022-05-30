import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { environment } from 'src/environments/environment';


import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgetPAsswordComponent } from './forget-password/forget-password.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HomeComponent } from './home/home.component';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { VerifyMailComponent } from './verify-mail/verify-mail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EmployeesComponent } from './employees/employees.component';
import { DetailsComponent } from './details/details.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetPAsswordComponent,
    SideBarComponent,
    HomeComponent,
    DashboardMainComponent,
    HeaderComponent,
    RegisterComponent,
    VerifyMailComponent,
    NotFoundComponent,
    EmployeesComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
