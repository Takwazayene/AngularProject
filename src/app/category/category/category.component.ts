import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() categoryy  :Category;
  @Output() liked = new EventEmitter() ;
  like1: any =0 ;
  constructor() { }
 SendNotif () {
   this.liked.emit() ;
 }
  ngOnInit(): void {
  }


  addLike() {

    this.like1++ ;
  }

}
