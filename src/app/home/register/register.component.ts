import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _RegisterService:RegisterService,private _router:Router) { }
  
 
contactForm = new FormGroup({
  email: new FormControl(""),
  name: new FormControl(""),
 
})
 
get email(){
  return this.contactForm.get('email')
}
get name(){
  return this.contactForm.get('name');
}

  ngOnInit(): void {
  }


  onSubmit(){
    let data:any=this.contactForm.value;
    this._RegisterService.register(this.contactForm.value).subscribe(data=>{
      console.log("user details:",data);
      this._router.navigate(['/dashboard'],{queryParams:{data:JSON.stringify(data)}});
    },
    err=>{
      console.log("An error occured");
    });    
  }

}
