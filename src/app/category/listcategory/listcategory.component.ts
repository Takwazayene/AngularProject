import { Component, OnInit, Input, Output  } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CategoryService } from 'src/app/shared/category.service';
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import { Router } from '@angular/router';
import {Category } from 'src/app/model/category' ;

@Component({
  selector: 'app-listcategory',
  templateUrl: './listcategory.component.html',
  styleUrls: ['./listcategory.component.css']
})
export class ListcategoryComponent implements OnInit {
category;
like:number=0;
@Input() categoryName :any;

  constructor(public categoryservice: CategoryService) { 
    
  }

  ngOnInit(): void {

    this.categoryservice.getallCategory()
    .subscribe(
      (data) => {
        this.category = data;
        console.log(this.category);
      },
      errors => {
        console.log(errors);
        alert(errors.status);
      },
      //() => alert('i finshed')
    )
  ;
  }
  addLikes()
  {
   
    this.like++;

  }

}
