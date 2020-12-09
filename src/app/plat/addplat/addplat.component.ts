import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import { Router } from '@angular/router';
import { PlatService } from 'src/app/shared/plat.service';

@Component({
  selector: 'app-addplat',
  templateUrl: './addplat.component.html',
  styleUrls: ['./addplat.component.css']
})
export class AddplatComponent implements OnInit {
  errorMsg: string;
  constructor(private fb: FormBuilder,   private router: Router, public platservice: PlatService) { }


    form = this.fb.group({
    id: ['', [Validators.required]],
    resto: ['',[Validators.required]],
    name: ['', Validators.required],

    categorie: ['', [Validators.required]],
    price: ['',[Validators.required]],
    chef: ['', Validators.required],

    rating: ['', [Validators.required]],
    image: ['', Validators.required],
      
    });


  ngOnInit(): void {
  }


  get f(){
    return this.form.controls;
 }

}
