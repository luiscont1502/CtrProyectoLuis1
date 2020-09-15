import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../models/client';
import {Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  url:string="http://portbelly.azurewebsites.net/api/Clientes";
 httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
     // 'Authorization': 'Bearer ' + localStorage.getItem('token'),
    })
  };
  constructor(private http:HttpClient) { }

  create(client: Client): Observable<any>{
    return this.http.post<Client[]>(this.url, client, this.httpOptions);
  }
  retrive(id:number):Observable<Client>{
    return this.http.get<Client>(this.url+'/'+id,this.httpOptions)
    .pipe(
      retry(1)
    );
  }

}
