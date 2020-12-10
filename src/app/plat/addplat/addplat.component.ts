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
  userFile ;
  public imagePath;
  imgURL: any;
  public message: string;


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


 
 onSelectFile(event) {
  if (event.target.files.length > 0)
  {
    const file = event.target.files[0]; 
    this.userFile = file;
    this.f['profile'].setValue(file);

  var mimeType = event.target.files[0].type;
  if (mimeType.match(/image\/*/) == null) {
    this.message = "Only images are supported.";
    return;
  }

  var reader = new FileReader();
  
  this.imagePath = file;
  reader.readAsDataURL(file); 
  reader.onload = (_event) => { 
    this.imgURL = reader.result; 
  }
}
   
    
  }
}
