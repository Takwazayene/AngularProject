import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import { Router } from '@angular/router';
import { RestoService } from 'src/app/shared/resto.service';
@Component({
  selector: 'app-addresto',
  templateUrl: './addresto.component.html',
  styleUrls: ['./addresto.component.css']
})
export class AddrestoComponent implements OnInit {
  errorMsg: string;


  constructor( private fb: FormBuilder,   private router: Router, public restoservice: RestoService) { }

  form = this.fb.group({
    id: ['', [Validators.required ,Validators.pattern('^(0|[1-9][0-9]*)$')]],
    employeId: ['',[Validators.required ,Validators.pattern('^(0|[1-9][0-9]*)$')]],
    nomResto: ['', Validators.required],

    lieu: ['', [Validators.required]],
    nbreEmploye: ['',[Validators.required,Validators.pattern('^(0|[1-9][0-9]*)$')]],
    promotion: ['', [ Validators.required,Validators.min(0),Validators.max(100) ]],

    rating: ['', [Validators.required,Validators.pattern('[0-5]')]],
    etat: ['',[Validators.required,Validators.pattern('[0,1]')]],
    image: ['', Validators.required],
      
    });


  ngOnInit(): void {
  }


  get f(){
    return this.form.controls;
 }


}
