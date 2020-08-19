import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import {Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
url:string="https://localhost:44330/api/Usuarios";
httpOptions={
  headers:new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
};
  constructor(private http:HttpClient) { }
  list(): Observable<User[]> {
    return this.http.get<User[]>(this.url, this.httpOptions)
      .pipe(
        retry(1)
      );
  }
  delete(user: User) : Observable<any> {
    return this.http.delete<User[]>(this.url + '/' + user.uso_id,
      this.httpOptions);
  }
  view(user: User): Observable<User[]>{
    return this.http.get<User[]>(this.url + '/' + user.uso_id, this.httpOptions)
    .pipe(
      retry(1)
    );
  }

  create(user: User): Observable<any>{
    return this.http.post<User[]>(this.url, user, this.httpOptions);
  }
  retrive(id:number):Observable<User>{
    return this.http.get<User>(this.url+'/'+id,this.httpOptions)
    .pipe(
      retry(1)
    );
  }
  update(user: User): Observable<any>{
    const alumnoBody = JSON.stringify(user);
    console.log(user);
    return this.http.put<any>(this.url, user, this.httpOptions);
  }


}
