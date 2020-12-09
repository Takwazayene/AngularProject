import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddrestoComponent } from '../addresto/addresto.component';
import { RestoService } from 'src/app/shared/resto.service';
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: 'app-listresto',
  templateUrl: './listresto.component.html',
  styleUrls: ['./listresto.component.css']
})
export class ListrestoComponent implements OnInit {
resto;
nomResto:any;
lieu:any;
  constructor(  public restoservice: RestoService) { }

  ngOnInit(): void {

    this.restoservice.getallresto()
    .subscribe(
      (data) => {
        this.resto = data;
        console.log(this.resto);
      },
      errors => {
        console.log(errors);
        alert(errors.status);
      },
      //() => alert('i finshed')
    )
  ;
  }

  Search(){
    if((this.nomResto =="") && (this.lieu=="")) {
  
      this.ngOnInit() ;
  }
      else {

    this.restoservice.findByNameLocation(this.nomResto.trim(),this.lieu.trim())
    .subscribe(
      (data) => {
        this.resto = data;
        console.log(this.resto);
      },
      errors => {
        console.log(errors);
        alert(errors.status);
      },
      //() => alert('i finshed')
    )
  ;


      
    }

  }

}
