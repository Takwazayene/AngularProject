import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators,FormControl} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id;
  user;
  form: FormGroup;
  name ;

  constructor(private fb: FormBuilder,
              private userservice: UserService,
              private route: ActivatedRoute,
              private router: Router) {

   


    this.form = this.fb.group({
      id: ['', [Validators.required]],
      name: ['',[Validators.required]],
      username: ['', Validators.required],
      //email: ['',[ Validators.required , Validators.email] ],
      
      password: new FormControl('',[Validators.required , Validators.minLength(3)]) ,
    
      email: new FormControl('',[
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      
      
      
      });
    
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.userservice.getUserbyid(this.id).subscribe((result) => {
      this.user = result;
      this.form.patchValue(this.user);
    });
  }

  submit() {
    //if(this.form.dirty){}
    this.userservice
      .updateUser(this.form.value, this.id)
      .subscribe(() => {
        //console.log(this.form.value);
        this.router.navigate(['/list']);
      });

  }

  get f(){
    return this.form.controls;
 }

}
