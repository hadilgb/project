
import { clientmob } from "./clientmob";
import { Repas } from "./Repas";

export class commande {
    id :Number=0;
    date:string="";
    etat: Number=0;
    client: clientmob = new clientmob;
    restau_id:Number=0;
    repas:Repas[]=[];
    
    constructor(){}

  
    
    
}
