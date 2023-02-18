import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Livreur } from 'C:/Users/PC/Desktop/project/FOODCHINY/src/app/common/Livreur';
const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})};
@Injectable({
  providedIn: 'root'
})
export class LivreurService {
   affUrl: string = 'http://localhost:8080/demo/Livreur';
   ajouturl :string ='http://localhost:8080/demo/ajoutLivreur';
   suppurl : string='http://localhost:8080/demo/del';
   upurl:string='http://localhost:8080/demo/update';
   livreurs: Livreur[] = [];
   
  constructor(private httpClient : HttpClient) {
  
   }
 
 
 getlivreur():Observable <Livreur[]>{
    return this.httpClient.get<Livreur[]>(this.affUrl);
  }
ajouterLivreur(livreur:Livreur):Observable<Livreur>{
  return  this.httpClient.post<Livreur>(this.ajouturl,livreur,httpOptions);
}
supprimerlivreur(liv: Number):Observable<any>{

  const url =`${this.suppurl}/${liv}`;
  return this.httpClient.delete(url,httpOptions);
}
updateliv(liv:Livreur):Observable<any>{
  return this.httpClient.put(this.upurl,liv,httpOptions);
}


}

