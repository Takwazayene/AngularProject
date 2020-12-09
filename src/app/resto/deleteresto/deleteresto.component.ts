import { Component, OnInit } from '@angular/core';
import { RestoService } from 'src/app/shared/resto.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-deleteresto',
  templateUrl: './deleteresto.component.html',
  styleUrls: ['./deleteresto.component.css']
})
export class DeleterestoComponent implements OnInit {

  constructor(private restoservice: RestoService,
    private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.restoservice
    .deleteresto(
      this.activatedRoute.snapshot.params['id'])
    .subscribe(data => this.router.navigate(['/list/resto']));
  }

}
