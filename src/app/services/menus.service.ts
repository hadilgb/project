import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Repas } from '../common/Repas';
import { Livreur } from 'C:/Users/PC/Desktop/project/FOODCHINY/src/app/common/Livreur';
const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})};
@Injectable({
  providedIn: 'root'
})
export class RepasService {
   affUrl: string = 'http://localhost:8080/demo/Repas';
   ajouturl :string ='http://localhost:8080/demo/ajoutrep';
   suppurl : string='http://localhost:8080/demo/delrep';
   upurl:string='http://localhost:8080/demo/updaterep';
   repas: Repas[] = [];
   
  constructor(private httpClient : HttpClient) {
  
   }
 
 
 getRepas():Observable <Repas[]>{
    return this.httpClient.get<Repas[]>(this.affUrl);
  }
ajouterRepas(rep:Repas):Observable<Repas>{
  return  this.httpClient.post<Repas>(this.ajouturl,rep,httpOptions);
}
supprimerRepas(rep: Number):Observable<any>{

  const url =`${this.suppurl}/${rep}`;
  return this.httpClient.delete(url,httpOptions);
}
updateRepas(rep:Repas):Observable<any>{
  return this.httpClient.put(this.upurl,rep,httpOptions);
}


}

