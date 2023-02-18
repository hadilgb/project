import { Component, NgZone, OnInit } from '@angular/core';
import { Livreur } from '../common/Livreur';
import { LivreurService } from '../services/Livreur.service';
import {Router} from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-livreur',
  templateUrl: './livreur.component.html',
  styleUrls: ['./livreur.component.css']
})
export class LivreurComponent implements OnInit {
  livreurs: Livreur[] = [];
  newLiv: Livreur = new Livreur;
  modLiv: Livreur = new Livreur;
  formajout:FormGroup;
  formaupdate:FormGroup;
  constructor(private livreurService:LivreurService,private router:Router,private fb:FormBuilder,private ngZone: NgZone) {
    this.formajout = this.fb.group({
      cin: [null, Validators.required],
      nom: [null, Validators.required],
      prenom: [null, Validators.required],
      tel: [null, Validators.required],
    });
    this.formaupdate = this.fb.group({
      cinn: [null, Validators.required],
      nomm: [null, Validators.required],
      prenomm: [null, Validators.required],
      tell: [null, Validators.required],
    });
    
   }

  ngOnInit(): void {
    this.livreurService.getlivreur().subscribe(
      cls =>{
        console.log(cls);
        this.livreurs=cls;
      }
    );
  }
  supprimerliv(l:Livreur){
    let conf = confirm("Etes-vous sûr?");
   if (conf)this.livreurService.supprimerlivreur(l.id).subscribe(()=> {console.log("livreur supprimé");
  });
  this.router.navigate(['livreurs']).then(()=>{window.location.reload();});
 }
  show3:boolean=false
  ajouter(){
   
    this.show3=true
  }
 
  ajoutlivreur(){
    
    this.newLiv.nom=this.formajout.get('nom')?.value;
    this.newLiv.prenom=this.formajout.get('prenom')?.value;
    this.newLiv.tel=this.formajout.get('tel')?.value;
    this.newLiv.cin=this.formajout.get('cin')?.value;
    this.livreurService.ajouterLivreur(this.newLiv).subscribe(liv => {this.livreurs.push(liv)});
    this.show3=false;
      
    }
    show4:boolean=false;
    update(l:Number){
      this.modLiv.id=l;
      this.show4=true;
    }
    updatelivreur(){
    
      this.modLiv.nom=this.formaupdate.get('nomm')?.value;
      this.modLiv.prenom=this.formaupdate.get('prenomm')?.value;
      this.modLiv.tel=this.formaupdate.get('tell')?.value;
      this.modLiv.cin=this.formaupdate.get('cinn')?.value;
      this.livreurService.updateliv(this.modLiv).subscribe(liv => {console.log("edited");});
      this.show4=false;
        
      }
   
  
  
  

}
