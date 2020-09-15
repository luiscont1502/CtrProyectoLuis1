import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/observable';
import { map, retry } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { Usuario, Login } from '../models/usuario';
import { stringify } from '@angular/compiler/src/util';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://portbelly.azurewebsites.net/api/Login/Authenticate';
  userToken: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };
  constructor(private http: HttpClient, private router: Router) { }

  login(usuario: Login): Observable<Login> {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };
    return this.http.post<any>(this.url, authData, this.httpOptions).pipe(
      map((resp) => {
        this.guardarToken(resp.token);
        console.log("esto es");
        //console.log(resp);
        return resp;
      })
    );
  }
  private guardarToken(idToken: string): void {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
    const hoy = new Date();
    hoy.setSeconds(60000);
    localStorage.setItem('expira', hoy.getTime().toString());
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  leerToken(): any {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }

  roleMatch(allowedRoles): boolean {
    let isMatch = false;
    const payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    //console.log(payLoad);
    const userRole = payLoad.rol;
    //console.log(userRole);
    allowedRoles.forEach(element => {
      if (userRole === element) {
        isMatch = true;
        return true;
      }
    });
    return isMatch;
  }
  verificarRol(): void {
    let rol = '';
    const payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    rol = payLoad.rol;
    switch (rol) {
      case 'Administrador':
        this.router.navigateByUrl('/productos');
        break;
      case 'Cliente':
        this.router.navigateByUrl('/tienda');
    }
  }
  estaAutenticado(): boolean {
    console.log(this.userToken);
    console.log(this.userToken.length);;

    if (this.userToken.length < 2) {
      return false;
    }
    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);
    if (expiraDate > new Date()) {
      return true;
    } else {
      return false;
    }
  }
  sesionOpen(): void {
    if (this.estaAutenticado()) {
      this.verificarRol();
    }
  }
}
