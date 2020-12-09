import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Restaurant} from '../model/restaurant';
import {Observable} from 'rxjs';
import {Router} from "@angular/router";



@Injectable({
  providedIn: 'root'
})
export class RestoService {

  constructor(private http: HttpClient, public router: Router) { }


  getRestobyid(id: number) {
    return this.http.get('http://localhost:3000/resto/' + id);
  }

  deleteresto(id: number) {
    return this.http.delete('http://localhost:3000/resto/' + id);
  }

  updateResto(data: any, id: any): Observable<any> {
    const url: string = 'http://localhost:3000/resto/' + id;
    return this.http.put(url, data);
  }




  getallresto() {

    return this.http.get<any>('http://localhost:3000/resto/');
  }


  addresto(data: any): Observable<any> {
    const url: string = 'http://localhost:3000/resto/';
    return this.http.post(url, data);
  }
  submit(form) {

    this.addresto(form)
      .subscribe(() => {
          this.router.navigate(['/list/resto']);
        },
        (error) => {
          switch (error.status) {
            case 404: {
              console.log('Not Found');
              break;
            }
            case 403: {
              console.log('Access Denied');
              break;
            }
            case 500: {
              console.log('Internal Server Error: ');
              break;
            }


          }


          // if (error.status == 500) {
          //  console.log(error);
          // alert(error.message);
          //}
          //;
        }
      );
  }

  findByNameLocation(name,location) {

    return this.http.get<any>('http://localhost:3000/resto?nomResto='+name+'&lieu='+location) ;
   }


}
