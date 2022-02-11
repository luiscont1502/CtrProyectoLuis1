import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Correo} from '../Models/correo'
@Injectable({
  providedIn: 'root'
})
export class EmailService {
  url : string = "http://portbelly.azurewebsites.net/api/Correo/EnviarFactura";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
     // 'Authorization': 'Bearer ' + localStorage.getItem('token'),
    })
  };
  constructor(private http:HttpClient) { }
  enviar( a:Correo):Observable<any>{
    return this.http.post<Correo>(this.url,a,this.httpOptions)
   ;
  }

}