import { Component, OnInit } from '@angular/core';
import { clientmob } from '../common/clientmob';
import { commande } from '../common/commande';
import { ClientmobService } from '../services/clientmob.service';
import { CommandeService } from '../services/commande.service';

@Component({
  selector: 'app-clientmob',
  templateUrl: './clientmob.component.html',
  styleUrls: ['./clientmob.component.css']
})
export class clientmobComponent implements OnInit {
clientmobile:clientmob[]=[];
  constructor(private cmdser:ClientmobService) { }

  ngOnInit(): void {
    this.cmdser.getclient().subscribe(
      cls =>{
        console.log(cls);
        this.clientmobile=cls;
      }
    );
 
  }

}
