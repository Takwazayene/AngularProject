import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';
import {UserService} from "../user.service";
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";

import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name:any ;username:any; email:any; password:any;

  form2: FormGroup;
  errorMsg: string;

  constructor(private fb: FormBuilder, public userservice: UserService,
    private router: Router) {
}



form = this.fb.group({
  id: ['', [Validators.required,Validators.pattern('^(0|[1-9][0-9]*)$')]],
  name: ['',[Validators.required]],
  username: ['', Validators.required],
  //email: ['',[ Validators.required , Validators.email] ],
  
  password: new FormControl('',[Validators.required , Validators.minLength(3)]) ,

  email: new FormControl('',[
  	Validators.required,
  	Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
  
  
  
  });



  ngOnInit(): void {
  }


  get f(){
    return this.form.controls;
 }

 

}
