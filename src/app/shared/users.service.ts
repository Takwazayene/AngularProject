import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {



  //private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  userUrl  ='http://127.0.0.1:9080/pidev-web/rest/user/all';
  const
  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(public http: HttpClient) { }

  geAlltUsers():Observable<any[]>
  {
  return  this.http.get<any[]>(this.userUrl);
  }
  register(FullName,email,Phone,Password)
  {
    return this.http.post<any>('http://127.0.0.1:9080/pidev-web/rest/user/addUser?nom='+FullName+'&prenom=cc&mail='+email+'&password=985456&confirmPassword='+Password+'&login=fghjk&birthDay=2019-02-28'
    ,this.httpOptions);

  }
  authentificate(email,password)
  {
    return this.http.post<any>('http://127.0.0.1:9080/pidev-web/rest/employer/auth?login='+email+'&password='+password,this.httpOptions);
  }
  loggedIn()
  {
    return  !!localStorage.getItem('token')
  }
}
