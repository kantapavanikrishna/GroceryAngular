import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit(): void {
  }
  
  
  onSubmit(){
    this.router.navigate(['/login']);
  }
  back(){
    this.router.navigate(['/login']);
  }

}
