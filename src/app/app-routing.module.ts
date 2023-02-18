import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AbonnementComponent } from './abonnement/abonnement.component';
import { AppComponent } from './app.component';
import { CommandeComponent } from './commande/commande.component';
import { LivreurComponent } from './livreur/livreur.component';
import { LoginComponent } from './login/login.component';
import { MenusComponent } from './menus/menus.component';
import { RecetteComponent } from './recette/recette.component';

const routes: Routes = [
  {path:'menus',component:MenusComponent},
  {path:'abonnement',component:AbonnementComponent},
  {path:'commande',component:CommandeComponent},
  {path:'login',component:LoginComponent},
  {path:'recette',component:RecetteComponent},
  {path:'livreur',component:LivreurComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents = [MenusComponent,LivreurComponent,RecetteComponent,LoginComponent,CommandeComponent,AbonnementComponent]