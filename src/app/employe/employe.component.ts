import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import { EmployeService } from 'src/app/shared/employe.service';


@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  constructor(private router: Router,public employeservice: EmployeService) { }

  ngOnInit(): void {
  }

}
