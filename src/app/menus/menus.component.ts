import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Clientweb } from '../common/clientweb';
import { Repas } from '../common/Repas';
import { ClientService } from '../services/client.service';
import { RepasService } from '../services/menus.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
 
  Repass: Repas[] = [];
  newrep: Repas = new Repas;
  modrep: Repas = new Repas;
  formajout:FormGroup;
  formmod:FormGroup;
  constructor(private menus:RepasService,private fb:FormBuilder,private router:Router) { 
    this.formajout = this.fb.group({
      img: [null, Validators.required],
      nom: [null, Validators.required],
      prix: [null, Validators.required],
      ing: [null, Validators.required],
    });
    this.formmod = this.fb.group({
      img: [null, Validators.required],
      nom: [null, Validators.required],
      prix: [null, Validators.required],
      ing: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.menus.getRepas().subscribe(
      cls =>{
        console.log(cls);
        this.Repass=cls;
      }
    );
  }
  ajout:boolean=false;
  up:boolean=false;
  prom:boolean=false;
  main:boolean=true;
  
  showA(){
    this.ajout=true;
    this.up=false;
    this.prom=false;
    this.main=false;
    
  }
  showB(t:Repas){
    this.modrep.id=t.id;
    this.main=false;
    this.up=true;
    
    }
  showC(){
    this.prom=true;
    this.ajout=false;
    this.up=false;
    this.main=false;
  }
 
  ajoutRepas(){
    
    this.newrep.img=this.formajout.get('img')?.value;
    this.newrep.nom=this.formajout.get('nom')?.value;
    this.newrep.prix=this.formajout.get('prix')?.value;
    this.newrep.ingredient=this.formajout.get('ing')?.value;
    this.menus.ajouterRepas(this.newrep).subscribe(rep => {this.Repass.push(rep)});
    this.ajout=false;
    this.main=true;
      
    }
    supprimerrep(r:Repas){
      let conf = confirm("Etes-vous sûr?");
     if (conf)this.menus.supprimerRepas(r.id).subscribe(()=> {console.log("Repas supprimé");
    });
    this.router.navigate(['repass']).then(()=>{window.location.reload();});
   }
   update(){
     
    this.modrep.img=this.formmod.get('img')?.value;
    this.modrep.nom=this.formmod.get('nom')?.value;
    this.modrep.prix=this.formmod.get('prix')?.value;
    this.modrep.ingredient=this.formmod.get('ing')?.value;
    this.menus.updateRepas(this.modrep).subscribe(liv => {console.log("edited");});
    this.up=false;
   }


}
