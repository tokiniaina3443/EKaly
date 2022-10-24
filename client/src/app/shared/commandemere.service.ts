import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

import { environment } from '../../environments/environment'
import { Commandemere } from './commandemere.model';

@Injectable({
  providedIn: 'root'
})
export class CommandemereService {
  selectedCommandemere: Commandemere = {
    _id: '',
    idClient:'',
    client:'',
    date: new Date(),
    etat: '',
  };
  constructor(private http: HttpClient) { }

  //HttpMethods
  getCommandeMereListR(etat: string) {
    return this.http.post(environment.apiBaseUrl + '/commandemerelistr',{ etat : etat });
  }

  getCommandeMereList(etat: string) {
    return this.http.post(environment.apiBaseUrl + '/commandemerelist',{ etat : etat });
  }

  preparerCommande(idmere: string) {
    return this.http.post(environment.apiBaseUrl + '/preparerCommande',{ idmere : idmere });
  }

  livrerCommande(idmere: string) {
    return this.http.post(environment.apiBaseUrl + '/livrerCommande',{ idmere : idmere });
  }
}
