import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { PlatService } from 'src/app/shared/plat.service';
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";

@Component({
  selector: 'app-editplat',
  templateUrl: './editplat.component.html',
  styleUrls: ['./editplat.component.css']
})
export class EditplatComponent implements OnInit {
  plat;
  id;
  form: FormGroup;
  constructor(private fb: FormBuilder,private platservice: PlatService, private route: ActivatedRoute,private router: Router) { 


    this.form = this.fb.group({
      id: ['', [Validators.required]],
      resto: ['',[Validators.required]],
      name: ['', Validators.required],
  
      categorie: ['', [Validators.required]],
      price: ['',[Validators.required]],
      chef: ['', Validators.required],
  
      rating: ['', [Validators.required]],
      image: ['', Validators.required],
        
      });

  
  }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.platservice.getPlatbyid(this.id).subscribe((result) => {
      this.plat = result;
      this.form.patchValue(this.plat);
    });


  }


  submit() {
    //if(this.form.dirty){}
    this.platservice
      .updatePlat(this.form.value, this.id)
      .subscribe(() => {
        //console.log(this.form.value);
        this.router.navigate(['/list/plat']);
      });

  }
  get f(){
    return this.form.controls;
 }
  
}
