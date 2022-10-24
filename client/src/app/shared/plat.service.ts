import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Plat } from './plat.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PlatService {
  selectedPlat: Plat = {
    _id: '',
    nom: '',
    idrestau: '',
    restau: '',
    prix: 0,
    prixvente: 0,
    visible: true,
  };
  constructor(private http: HttpClient) {}

  //HttpMethods

  getPlatList() {
    return this.http.get(environment.apiBaseUrl + '/platlist');
  }
  getPlatListClient() {
    return this.http.get(environment.apiBaseUrl + '/platlistclient');
  }
  addPlat(plat: Plat): Observable<any> {
    return this.http.post(environment.apiBaseUrl + '/addplat', plat);
  }

  setvisible(idplat: string, visible: boolean) {
    return this.http.post(environment.apiBaseUrl + '/platvisible', {
      idplat: idplat,
      visible: visible,
    });
  }
}
