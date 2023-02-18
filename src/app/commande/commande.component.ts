import { Component, OnInit } from '@angular/core';
import { clientmob } from '../common/clientmob';
import { commande } from '../common/commande';
import { Repas } from '../common/Repas';
import { ClientmobService } from '../services/clientmob.service';
import { CommandeService } from '../services/commande.service';
import { RepasService } from '../services/menus.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
commandes:commande[]=[];
commandeconf:commande =new commande;
commandeann:commande =new commande;
commandeva:commande =new commande;
commandesval:commande[]=[];
reps:Repas[]=[];
newcommande:commande =new commande;
Repass:Repas[]=[];
cli:clientmob=new clientmob;
  constructor(private cmd:CommandeService,private rep:RepasService) { }

  ngOnInit(): void {
    this.cmd.getnewcommandes(0).subscribe(
      cls =>{
        console.log(cls);
        this.commandes=cls;
       }
    );
    this.cmd.getnewcommandes(1).subscribe(
      clss =>{
        console.log(clss);
        this.commandesval=clss;
       }
    );
    this.rep.getRepas().subscribe(
      clsss =>{
        console.log(clsss);
        this.Repass=clsss;
      }
    );
  }
  confirmer(cmd:commande){
    this.commandeconf.id=cmd.id;
    this.commandeconf.etat=1;
    this.cmd.confirmercmd(this.commandeconf).subscribe(liv => {console.log("edited");});
  }
  valider(cmd:commande){
    this.commandeva.id=cmd.id;
    this.commandeva.etat=2;
    this.cmd.confirmercmd(this.commandeva).subscribe(liv => {console.log("edited");});
  }
  annuler(cmd:commande){
    this.commandeann.id=cmd.id;
    this.commandeann.etat=-1;
    this.cmd.annulercmd(this.commandeann).subscribe(liv => {console.log("edited");});
  }

  ajoutrep(tem:Repas){
    this.reps.push(tem);

  }
  ajout(){
    this.newcommande.etat=0;
    this.newcommande.date="000";
    this.newcommande.repas=this.reps;
    
    this.cmd.ajoutercommande(this.newcommande).subscribe(rep => {this.commandes.push(rep)});
  }
  

}
