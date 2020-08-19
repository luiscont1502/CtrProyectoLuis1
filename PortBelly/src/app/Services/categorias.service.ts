import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { Categoria } from '../Models/categoria';
import swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  url : string = "https://localhost:44330/api/Categorias";
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

  constructor(private http:HttpClient) {  }
  create(categorias:Categoria) : Observable<any> {
    let categoriasBody = JSON.stringify(categorias);
    if(categorias.cat_id === undefined){
      return this.http.post<any>(this.url, categoriasBody, this.httpOptions);
    }
    return this.http.put<any>(this.url, categoriasBody, this.httpOptions);
  }


  list(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.url,this.httpOptions)
    .pipe(
      retry(1)
    )
  }
  retrive(id:number):Observable<Categoria>{
    return this.http.get<Categoria>(this.url+'/'+id,this.httpOptions)
    .pipe(
      retry(1)
    );
  }

  delete(categoria: Categoria) : Observable<any> {
    return this.http.delete<any>(this.url + '/' + categoria.cat_id,
      this.httpOptions)
      .pipe(
        retry(1)
      );
  }
}
