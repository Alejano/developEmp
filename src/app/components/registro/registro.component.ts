import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {NgForm} from '@angular/forms';
import {Usuario} from '../../interfaces/registro.interface'
import {RegistroService} from "../../services/registro.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {


  mostrar:boolean=true;

  constructor(public auth:AuthService ,private _registroService:RegistroService
              ,private router:Router) {

   }


   usuario:Usuario = {
       ID_U:"",
     nombre:"",
     apellidoP:"",
     apellidoM:"",
     fechaN:"",
     sexo:"",
  //   email:"",
  //   passwd:"",
     tel:0,
     city:"",
     estado:"",
     calle:"",
     numero:0,
     colonia:"",
     cp:0
   }


    ngOnInit(){}

       guardar(){

          console.log(this.usuario);
          this._registroService.nuevoUsuario(this.usuario)
          .subscribe( data=>{
            this.router.navigate(['/registro',data.name])

          },
        error=>console.error(error));
       }



  login(){
    this.auth.login();

  }

  logout(){
    this.auth.logout();

  }


}
