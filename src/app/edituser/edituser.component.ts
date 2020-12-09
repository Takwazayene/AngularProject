import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {ActivatedRoute, Router} from '@angular/router';
//import {User} from '../model/user';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  users;
  id;
  name;

  constructor(private servicesusers: UserService,
  private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this
      .servicesusers
      .getUserbyid
      (this.activatedRoute.snapshot.params['id'])
      .subscribe(
        data => {
          this.users = data;
          console.log(this.users);
          this.id = this.users.id;
          this.name = this.users.name;
        }, error => {
        
          console.log(error);
          alert('id not found');
        }
      )
    ;
  }


}
