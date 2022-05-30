import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  DocumentChange,
} from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
empData:any=[]
  constructor(private fs: AngularFirestore) { }
setData = (data:any)=>{
this.empData=data
}
getData = ()=>{
  return this.empData
}

}
