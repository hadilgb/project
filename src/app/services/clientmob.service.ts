import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { clientmob } from '../common/clientmob';
const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})};
@Injectable({
  providedIn: 'root'
})
export class ClientmobService {
   baseUrl: string = 'http://localhost:8080/demo/findclientmobile';
  constructor(private httpClient : HttpClient) {
  
   }
 
   getclient():Observable<clientmob[]>{

    return this.httpClient.get<clientmob[]>(this.baseUrl,httpOptions);
  }

}

