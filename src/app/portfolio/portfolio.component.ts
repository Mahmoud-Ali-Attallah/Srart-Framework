import { Component } from '@angular/core';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
src:string = "" ;
display: string = "d-none" ;
diplay(){
  this.display = "d-block"
};

takeData(jkljl:any){
  this.src = jkljl.target.getAttribute("src") ;
}

hide(){
  this.display="d-none"
  this.src = "" ;
}
}
