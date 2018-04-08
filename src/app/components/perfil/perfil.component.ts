import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {Usuario} from '../../interfaces/registro.interface'
import {RegistroService} from "../../services/registro.service";



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: []
})
export class PerfilComponent implements OnInit {

   Dalta:boolean=false;
   profile:any;
   public id:any;
    public idu:string;
  usuario:Usuario = {
    ID_U:"",
    nombre:"",
    apellidoP:"",
    apellidoM:"",
    fechaN:"",
    sexo:"",
    tel:0,
    city:"",
    estado:"",
    calle:"",
    numero:0,
    colonia:"",
    cp:0
  }
  constructor(private auth:AuthService,private _registroService:RegistroService
              ,private router:Router) { }

  ngOnInit() {


    if (this.auth.userProfile) {
          this.profile = this.auth.userProfile;
        } else {
          this.auth.getProfile((err, profile) => {
            this.profile = profile;
            this.id=this.profile.sub;
          //  console.log(this.profile);
                this._registroService.getUsuario(this.profile.sub)
                .subscribe(usu=>{

                  //console.log(this.id);
                  //this.idu=usu["ID_U"];
                  //console.log(this.idu);
                //console.log(usu['ID_U']);

                for(let key$ in usu){
                  //console.log(usu[key$].ID_U);
                  this.idu=usu[key$].ID_U;
                  this.usuario.nombre=usu[key$].nombre;
                  this.usuario.apellidoP=usu[key$].apellidoP;
                  this.usuario.apellidoM=usu[key$].apellidoM;
                }

                if(this.idu==this.id){
                    this.Dalta=true;
                    console.log(this.Dalta);
                  //    console.log(usu);
                }else
                {
                  this.Dalta=false;
                  console.log("date de alta");
                  console.log(this.Dalta);
                  //  console.log(usu);
                }
              });


          });
        }



      //  console.log(this.id , this.Dalta);
      }

      guardar(){

         //console.log(this.usuario);
         this._registroService.nuevoUsuario(this.usuario)
         .subscribe( data=>{
           this.router.navigate(['/perfil',data.name])
         },
       error=>console.error(error));
      }

}
