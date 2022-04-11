import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EkalyService {
  constructor(private http: HttpClient) {}

  Login(username: string, password: string): Observable<any> {
    let url = 'http://localhost:3000/api/ekalys/login';
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }),
    };

    let data = JSON.stringify({
      mail: username,
      motDePasse: password,
    });
    return this.http.post(url, data, httpOptions);
  }

  ListPlat(token: string): Observable<any> {
    let url = 'http://localhost:3000/api/ekalys/listCommand';
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };
    return this.http.get(url, httpOptions);
  }
}
