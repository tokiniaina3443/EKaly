import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

import { environment } from '../../environments/environment'
import { Commande } from './commande.model';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  selectedCommande: Commande = {
    _id: '',
    idplat:'',
    nomplat:'',
    quantite: 0,
    idmere: ''
  };
  constructor(private http: HttpClient) { }

  //HttpMethods

  getCommandeList(idmere: any) {
    return this.http.post(environment.apiBaseUrl + '/commandelistby',{idmere : idmere});
  }

  addCommande(commande: any){
    return this.http.post(environment.apiBaseUrl+'/addcommande',commande);
  }
}
