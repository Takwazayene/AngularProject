import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './model/user';
import {Observable} from 'rxjs';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, public router: Router) {
  }
//private url='http://localhost:3000/users/';
  getallusers() {
    //alert('goodo');
    return this
      .http.get<User[]>('./assets/user.json');
  }

  getUserbyid(id: number) {
    return this.http.get('http://localhost:3000/users/' + id);
  }

  deleteuser(id: number) {
    return this.http.delete('http://localhost:3000/users/' + id);
  }

  updateUser(data: any, id: any): Observable<any> {
    const url: string = 'http://localhost:3000/users/' + id;
    return this.http.put(url, data);
  }




  getalluser() {

    return this
      .http.get<any>('http://localhost:3000/users/');
  }
  adduser(data: any): Observable<any> {
    const url: string = 'http://localhost:3000/users/';
    return this.http.post(url, data);
  }
  submit(form) {

    this.adduser(form)
      .subscribe(() => {
          this.router.navigate(['/list']);
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
