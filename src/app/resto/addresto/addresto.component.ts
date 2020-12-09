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
    id: ['', [Validators.required]],
    employeId: ['',[Validators.required]],
    nomResto: ['', Validators.required],

    lieu: ['', [Validators.required]],
    nbreEmploye: ['',[Validators.required]],
    promotion: ['', Validators.required],

    rating: ['', [Validators.required]],
    etat: ['',[Validators.required]],
    image: ['', Validators.required],
      
    });


  ngOnInit(): void {
  }


  get f(){
    return this.form.controls;
 }


}
