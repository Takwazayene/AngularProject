import { Component, OnInit,Input, Output , EventEmitter } from '@angular/core';
import { Plat } from 'src/app/model/plat';

@Component({
  selector: 'app-calculprix',
  templateUrl: './calculprix.component.html',
  styleUrls: ['./calculprix.component.css']
})
export class CalculprixComponent implements OnInit {
prixtot : number=0 ;
@Input() plats  :Plat;
  constructor() { }

  ngOnInit(): void {
  }


  calculPrix(prix:number) {
    this.prixtot=this.prixtot+prix ;
  }
}
