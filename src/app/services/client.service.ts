import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clientweb } from '../common/clientweb';

const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})};
@Injectable({
  providedIn: 'root'
})
export class ClientService {
   baseUrl: string = 'http://localhost:8080/demo/clientweb';
   ajouturl :string ='http://localhost:8080/demo/ajoutclient';
   affurl:string ='http://localhost:8080/demo/findlogin'
  constructor(private httpClient : HttpClient) {
  
   }
 
 getclient():Observable <Clientweb[]>{
    return this.httpClient.get<Clientweb[]>(this.baseUrl);
  }
  ajouterclient(client:Clientweb):Observable<Clientweb>{
    return  this.httpClient.post<Clientweb>(this.ajouturl,client,httpOptions);
  }
  getlogin(log:string):Observable <Clientweb>{

    const url =`${this.affurl}/${log}`;
    return this.httpClient.get<Clientweb>(url,httpOptions);
  }
}
