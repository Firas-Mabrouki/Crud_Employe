import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  DocumentChange,
} from '@angular/fire/compat/firestore';
import {ChangeDetectorRef} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SharedService } from '../shared/shared.service';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  Uid: any;
  successMessage: any;
  dataArray: any = [];

  constructor(private fs: AngularFirestore, private as: AuthService,private shared:SharedService,private ref: ChangeDetectorRef) {
    this.as.user.subscribe((user) => {
      this.Uid = user.Uid;
    });
  }

  ngOnInit(): void {
    this.fs
    .collection('employe')
    .snapshotChanges()
    .subscribe((data) => {
      data.map((elm) => {
          return  this.dataArray.push({ id: elm.payload.doc.id, data: elm.payload.doc.data() })
        })
    
    });
  }

   addemloyees (f: any) {
    let data = f.value;
    this.fs
      .collection('employe')
      .add({
        firstname: data.firstname,
        lastname: data.lastname,
        date: data.date,
        place: data.place,
        cin: data.cin,
        phonenumber: data.phonenumber,
        image: data.image,
      })
      .then((data) => {
      
        this.successMessage = 'added';
        this.ngOnInit()

      });
  }
 findById =(id:String)=>{
  let  newData = [...this.dataArray].find(e=>e.id==id)
  this.shared.setData(newData)
 }
delete= (id:any)=>{
 this.fs.collection("employe").doc(id).delete().then(()=>{
  console.log("deleted")
})
}  
}
