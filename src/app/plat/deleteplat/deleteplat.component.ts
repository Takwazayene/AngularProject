import { Component, OnInit } from '@angular/core';
import { PlatService } from 'src/app/shared/plat.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-deleteplat',
  templateUrl: './deleteplat.component.html',
  styleUrls: ['./deleteplat.component.css']
})
export class DeleteplatComponent implements OnInit {

  constructor(private platservice: PlatService,
    private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.platservice
    .deleteplat(
      this.activatedRoute.snapshot.params['id'])
    .subscribe(data => this.router.navigate(['/list/plat']));
  }

}
