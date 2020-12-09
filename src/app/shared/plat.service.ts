import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class PlatService {

  constructor(private http: HttpClient, public router: Router) { }




  getPlatbyid(id: number) {
    return this.http.get('http://localhost:3000/plat/' + id);
  }

  deleteplat(id: number) {
    return this.http.delete('http://localhost:3000/plat/' + id);
  }

  updatePlat(data: any, id: any): Observable<any> {
    const url: string = 'http://localhost:3000/plat/' + id;
    return this.http.put(url, data);
  }




  getallplat() {

    return this
      .http.get<any>('http://localhost:3000/plat/');
  }
  addplat(data: any): Observable<any> {
    const url: string = 'http://localhost:3000/plat/';
    return this.http.post(url, data);
  }
  submit(form) {

    this.addplat(form)
      .subscribe(() => {
          this.router.navigate(['/list/plat']);
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


/*findByName(name)
{
  const filter =  `{"where":{"name":{"like" :"%${name}%"}}}` ;
  const params = new HttpParams().set('filter',filter) ;
  return this.http.get<any>('http://localhost:3000/plat/',{params}) ;
} */

findByName(name) {

 return this.http.get<any>('http://localhost:3000/plat?resto='+name) ;
}


findByCategory(category) {
  return this.http.get<any>('http://localhost:3000/plat?categorie='+category) ;
}

}
