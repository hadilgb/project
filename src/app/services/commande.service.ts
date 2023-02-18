import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { commande } from '../common/commande';
const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})};
@Injectable({
  providedIn: 'root'
})
export class CommandeService {
   affUrl: string = 'http://localhost:8080/demo/findcmdetat';
   upurl:string='http://localhost:8080/demo/updateCommande';
   ajouturl:string='http://localhost:8080/demo/ajoutCommande';
   commande: commande[] = [];
   
  constructor(private httpClient : HttpClient) {
  
   }
 
 
 getcommandes():Observable <commande[]>{
    return this.httpClient.get<commande[]>(this.affUrl);
  }
ajoutercmd(cmd:commande):Observable<commande>{
  return  this.httpClient.post<commande>(this.ajouturl,cmd,httpOptions);
}
updatecmd(l:commande):Observable<any>{
  return this.httpClient.put(this.upurl,l,httpOptions);
}
getnewcommandes(etat: Number):Observable <commande[]>{

  const url =`${this.affUrl}/${etat}`;
  return this.httpClient.get<commande[]>(url,httpOptions);
}
confirmercmd(rep:commande):Observable<any>{
  return this.httpClient.put(this.upurl,rep,httpOptions);
}
annulercmd(rep:commande):Observable<any>{
  return this.httpClient.put(this.upurl,rep,httpOptions);
}
ajoutercommande(cm:commande):Observable<commande>{
  return  this.httpClient.post<commande>(this.ajouturl,cm,httpOptions);
}


}

