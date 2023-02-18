import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule,routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenusComponent } from './menus/menus.component';
import { LoginComponent } from './login/login.component';
import { CommandeComponent } from './commande/commande.component';
import { RecetteComponent } from './recette/recette.component';
import { LivreurComponent } from './livreur/livreur.component';
import { AbonnementComponent } from './abonnement/abonnement.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientService } from './services/client.service';
import {LivreurService } from './services/Livreur.service';

@NgModule({
  declarations: [
    AppComponent,
    routingcomponents,
    LoginComponent,
    CommandeComponent,
    RecetteComponent,
    LivreurComponent,
    AbonnementComponent,
    MenusComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ClientService,LivreurService],
  bootstrap: [AppComponent]
})
export class AppModule { }
