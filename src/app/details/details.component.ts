import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { ActivatedRoute } from '@angular/router';
import {
  AngularFirestore,
  DocumentChange,
} from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
empDetails:any=[]

  constructor(private route: ActivatedRoute,private fs: AngularFirestore,private shared:SharedService) { }

  ngOnInit(): void {
  
    this.empDetails.push(this.shared.getData())
  
  }

  update=(f:any)=>{
    const form = f.value
   
    this.fs.collection("employe").doc(this.empDetails[0].id).update({
      cin:form.cin,
      date:form.date,
      firstname:form.firstname,
      image:form.image,
      lastname:form.lastname,
      phonenumber:form.phonenumber,
      place:form.place

    })
    
  }

}
