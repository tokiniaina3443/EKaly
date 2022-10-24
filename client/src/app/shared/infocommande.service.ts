import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

import { environment } from '../../environments/environment'
import { Infocommande } from './infocommande.model';

@Injectable({
  providedIn: 'root'
})
export class InfocommandeService {
  selectedInfocommande: Infocommande = {
    _id: '',
    idplat: '',
    plat: '',
    idrestau: '',
    restau: '',
    benefice: 0,
    date: new Date()
  };
  constructor(private http: HttpClient) { }

  //HttpMethods

  getInfoCommandeList() {
    return this.http.get(environment.apiBaseUrl + '/infocommandelist');
  }

  getInfoCommandeListByplat(idrestau: string, date: String){
    return this.http.post(environment.apiBaseUrl + '/infocommandelistbyplat',{ idrestau: idrestau , date: date});
  }
  getInfoCommandeListByrestau(date: String){
    return this.http.post(environment.apiBaseUrl + '/infocommandelistbyrestau',{ date: date });
  }
}
