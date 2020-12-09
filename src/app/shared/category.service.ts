import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from "@angular/router";import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient, public router: Router) { }




  getCategorybyid(id: number) {
    return this.http.get('http://localhost:3000/category/' + id);
  }

  deleteCategory(id: number) {
    return this.http.delete('http://localhost:3000/category/' + id);
  }

  updateCategory(data: any, id: any): Observable<any> {
    const url: string = 'http://localhost:3000/category/' + id;
    return this.http.put(url, data);
  }




  getallCategory() {

    return this
      .http.get<any>('http://localhost:3000/category/');
  }
  addCategory(data: any): Observable<any> {
    const url: string = 'http://localhost:3000/category/';
    return this.http.post(url, data);
  }
  submit(form) {

    this.addCategory(form)
      .subscribe(() => {
          this.router.navigate(['/list/category']);
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
