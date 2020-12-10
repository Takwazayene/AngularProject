import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor(private http: HttpClient, public router: Router) { }





  getEmployebyid(id: number) {
    return this.http.get('http://localhost:3000/employe/' + id);
  }

  deleteEmploye(id: number) {
    return this.http.delete('http://localhost:3000/employe/' + id);
  }

  updateEmploye(data: any, id: any): Observable<any> {
    const url: string = 'http://localhost:3000/employe/' + id;
    return this.http.put(url, data);
  }




  getallemploye() {

    return this
      .http.get<any>('http://localhost:3000/employe/');
  }
  addEmploye(data: any): Observable<any> {
    const url: string = 'http://localhost:3000/employe/';
    return this.http.post(url, data);
  }
  submit(form) {

    this.addEmploye(form)
      .subscribe(() => {
          this.router.navigate(['/list/employe']);
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





}
