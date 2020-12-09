import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PlatService } from 'src/app/shared/plat.service';
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import { Router } from '@angular/router';
import {Category } from 'src/app/model/category' ;
import { ListcategoryComponent } from 'src/app/category/listcategory/listcategory.component';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

/*
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';*/
pdfMake.vfs = pdfFonts.pdfMake.vfs; 
//pdfmake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-listplat',
  templateUrl: './listplat.component.html',
  styleUrls: ['./listplat.component.css']
})
export class ListplatComponent implements OnInit {
  plat;
  searchResult ;
  name:any;
  p:number=1 ;
 chaine:any;
 categorie:any;
 resto:any;
 @Input() category :Category;
 @Output() liked = new EventEmitter() ;
 @Output() prix = new EventEmitter() ;

  constructor(public platservice: PlatService) { 

  }

  ngOnInit(): void {
 this.searchResult=[] ;

    this.platservice.getallplat()
    .subscribe(
      (data) => {
        this.plat = data;
        console.log(this.plat);
      },
      errors => {
        console.log(errors);
        alert(errors.status);
      },
      //() => alert('i finshed')
    )
  ;
  }

  addPrix(prix){
    this.prix.emit(prix);
  }


  SendNotif() {
    this.liked.emit();
  }


SearchName() {

    const name=this.chaine.trim();

    
  if( name =="") {
  
    this.ngOnInit() ;
}
else 
     {
      this.platservice.findByName(name).
      subscribe(
        (data) => {
        this.plat = data;
        console.log( this.plat);
         
        }
      );
    }
     

    }

Search ()
{
  if(this.name =="") {
  
    this.ngOnInit() ;
}
    else {
      this.plat =this.plat.filter(res =>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase()) ;
      })

    }

  
}

SearchNameResto() {

  if(this.resto =="") {
  
    this.ngOnInit() ;
}
    else {

      this.platservice.findByName(this.resto.trim())
    .subscribe(
      (data) => {
        this.plat = data;
        console.log(this.plat);
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


SearchCategory() {

  if(this.categorie =="") {
  
    this.ngOnInit() ;
}
    else {

      this.platservice.findByCategory(this.categorie.trim())
    .subscribe(
      (data) => {
        this.plat = data;
        console.log(this.plat);
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


search()  {

  if((this.name =="") && (this.categorie =="") && (this.resto =="") )
{
  this.ngOnInit() ;
}

else if (this.name !="") {
  this.plat =this.plat.filter(res =>{
    return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase()) ;
  })
}
else if  (this.categorie !="") {
  this.platservice.findByCategory(this.categorie.trim())
  .subscribe(
    (data) => {
      this.plat = data;
      console.log(this.plat);
    },
    errors => {
      console.log(errors);
      alert(errors.status);
    },
    //() => alert('i finshed')
  )
;


}

else if (this.resto !="")
{
  this.platservice.findByName(this.resto.trim())
  .subscribe(
    (data) => {
      this.plat = data;
      console.log(this.plat);
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

key:string='id' ;
reverse: boolean=false;

sort(key){
  this.key=key;
  this.reverse =!this.reverse;
}





generatePdf(p){

  console.log(p);
  const documentDefinition = { content: 'nom Offre'+ p.resto +"Diplome demander "+ p.name +" location "+p.categorie + ""};
  pdfMake.createPdf(documentDefinition).open();
  pdfMake.createPdf(documentDefinition).download();
 }


  }


