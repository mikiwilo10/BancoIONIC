import { Injectable } from '@angular/core';
//miki
import {HttpClient} from '@angular/common/http';

import {APIURL} from '../../environments/BancoApi';


@Injectable({
  providedIn: 'root'
})
export class JavaserviceService {
CorreoSocio:String;

  constructor(
    //mk
    private http:HttpClient
  ) { }

//mk
  getAPIJAVA() {
    return this.http.get(APIURL.banco)
    }
  
    getLogin() {
      return this.http.get(APIURL.banco)
       //return this.http.get("https://jsonplaceholder.typicode.com/users");
      }
}
