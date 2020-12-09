import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { RestoService } from 'src/app/shared/resto.service';
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";

@Component({
  selector: 'app-editresto',
  templateUrl: './editresto.component.html',
  styleUrls: ['./editresto.component.css']
})
export class EditrestoComponent implements OnInit {
resto;
id;
form: FormGroup;
  constructor(private fb: FormBuilder,private restoservice: RestoService, private route: ActivatedRoute,private router: Router)
   { 


    this.form = this.fb.group({
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



    }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.restoservice.getRestobyid(this.id).subscribe((result) => {
      this.resto = result;
      this.form.patchValue(this.resto);
    });

   
  }

  submit() {
    //if(this.form.dirty){}
    this.restoservice
      .updateResto(this.form.value, this.id)
      .subscribe(() => {
        //console.log(this.form.value);
        this.router.navigate(['/list/resto']);
      });

  }



  get f(){
    return this.form.controls;
 }

}
