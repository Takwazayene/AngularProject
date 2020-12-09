import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TesService {

  constructor() { }
  getMsg(){
    alert('my msg');
  }
}
