import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  enteredSearchValue:string="";

  @Output()
  searchTextChanged:EventEmitter<string>=new EventEmitter<string>();

onSearchTextChanged(){
  this.searchTextChanged.emit(this.enteredSearchValue);
  console.log(this.enteredSearchValue)
}

f(){
  this.router.navigate(['/fruits']);
}
v(){
  this.router.navigate(['/fruits']);
}
d(){
  this.router.navigate(['/fruits']);
}
p(){
  this.router.navigate(['/fruits']);
}
}
