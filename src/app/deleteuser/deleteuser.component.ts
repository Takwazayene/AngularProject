import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {

  constructor(private servicesusers: UserService,
              private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() :void {
    this.servicesusers
      .deleteuser(
        this.activatedRoute.snapshot.params['id'])
      .subscribe(data => this.router.navigate(['/list']));

}

}
