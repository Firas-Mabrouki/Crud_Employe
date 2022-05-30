import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  messageError:any
  verifyNeed:any
  constructor(private sa:AuthService,private route:Router,private fa:AngularFireAuth) { }

  ngOnInit(): void {
  }

  login(f:any){
    let data =f.value
    this.sa.signIn(data.email,data.password).then(async (user:any)=>{
      if((await this.fa.currentUser)?.emailVerified==true){ 
      localStorage.setItem('connectedUser',user.user?.uid)
      console.log("Welcome !")
      this.route.navigate(['home'])
      }
      else{
        this.verifyNeed='You need to verify your email before '
        this.logout()
      }
    })
    .catch(()=>{
      console.log("error !")
      this.messageError="Incorrect password or email !"
    })
  }

  logout(){
    this.fa.signOut().then(()=>{
      localStorage.removeItem("connectedUser")
      console.log('loged out')
      //this.route.navigate([''])
    }).catch(()=>{
      console.log("error")
    })
  }

}
