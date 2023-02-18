import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { Clientweb } from '../common/clientweb';
import { ClientService } from '../services/client.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formreg1:FormGroup;
  formreg2:FormGroup;
  formlog:FormGroup;
  newcl:Clientweb= new Clientweb;
  cl:Clientweb= new Clientweb;
  a:String='';
  i:any;
  constructor(private client:ClientService,private fb:FormBuilder,private router:Router) {
    this.formreg1 = this.fb.group({
      name: [null, Validators.required],
      prenom: [null, Validators.required],
      tel: [null, Validators.required],
    });
    this.formreg2 = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      mdp: [null, Validators.required],
    });
    this.formlog = this.fb.group({
      login: [null, [Validators.required, Validators.email]],
      pass: [null, Validators.required],
    
    });
    
   }

  ngOnInit(): void {
 
  }
  gg:boolean=false
  ok:boolean=true
  show1:boolean=true
  show2:boolean=false
  show3:boolean=false
  submitreg(){
    this.a=this.formreg1.get('tel')?.value;
     this.newcl.nom = this.formreg1.get('name')?.value;
     this.newcl.prenom= this.formreg1.get('prenom')?.value;
     this.newcl.login = this.formreg2.get('email')?.value;
     this.newcl.mdp = this.formreg2.get('mdp')?.value;
     this.client.ajouterclient(this.newcl).subscribe();
    this.show1=true;
    this.show2=false;
    this.show3=false;
  }

  submitlog(){
    const value6 = this.formlog.get('login')?.value;
    const value7 = this.formlog.get('pass')?.value;
    this.client.getlogin(value6).subscribe(
      clss =>{
        console.log(clss);
        this.cl=clss;
       }
    );
    if(this.cl.mdp==value7)
          {console.log('hii');
            
            }
    if(this.cl.mdp!=value7)
    {console.log('byy');}
    }
 
 
  login(){
    this.show1=true
    this.show2=false
    this.show3=false
  }
  register(){
  this.show1=false
  this.show2=true
  this.show3=false
  
  }
  register2(){
    this.show1=false
    this.show2=false
    this.show3=true
  }

  


}

