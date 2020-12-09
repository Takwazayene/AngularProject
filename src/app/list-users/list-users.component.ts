import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AdduserComponent } from '../adduser/adduser.component';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users;

  constructor(private servicesusers: UserService ) {
  }

  ngOnInit() {
  //  console.log(this.servicesusers.getalluser());
    this.servicesusers.getalluser()
      .subscribe(
        (data) => {
          this.users = data;
          console.log(this.users);
        },
        errors => {
          console.log(errors);
          alert(errors.status);
        },
        //() => alert('i finshed')
      )
    ;
  }



  /*AddOrEditOrderItem(orderItemIndex, OrderID) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.data = { orderItemIndex, OrderID };
    this.dialog.open(AdduserComponent, dialogConfig) ;
  }*/



}
