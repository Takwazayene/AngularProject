import { TesService } from './../tes.service';
import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users;

  constructor(
    private servicesusers: UserService,
    private http: HttpClient, private servie:TesService) {

  }

  ngOnInit() {

    console.log(this.servicesusers.getallusers());

  }

}
