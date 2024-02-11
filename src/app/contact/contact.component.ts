import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name:string = "d-none"
  age:string = "d-none"
  email:string = "d-none"
  password:string = "d-none"
display(x:any){
  console.log(x) ;
if (x.target.value != "" && x.target.name=="userName"){
    this.name="d-block" ;
  }
  if (x.target.value == "" && x.target.name=="userName"){
    this.name="d-none" ;
  }
  else if (x.target.value != "" && x.target.name=="userAge") {
    this.age="d-block" ;
  }
  else if (x.target.value == "" && x.target.name=="userAge") {
    this.age="d-none" ;
  }
  else if (x.target.value != "" && x.target.name=="userEmail") {
    this.email="d-block" ;
  }
  else if (x.target.value == "" && x.target.name=="userEmail") {
    this.email="d-none" ;
  }
  else if (x.target.value != "" && x.target.name=="userPassword") {
    this.password="d-block" ;
  }
  else if (x.target.value == "" && x.target.name=="userPassword") {
    this.password="d-none" ;
  }


// else{
//   this.name =  this.age = this.email = this.password = "d-none"
// }
}
}
