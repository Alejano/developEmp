import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http'
import {Usuario } from '../interfaces/registro.interface'
import 'rxjs/Rx';

@Injectable()
export class RegistroService{

firesURL:string="https://emprende-123.firebaseio.com/Usuario.json"
fireURL:string="https://emprende-123.firebaseio.com/Usuario.json"

constructor(private http:Http){}

nuevoUsuario( usuario:Usuario ){

      let body = JSON.stringify(usuario);
      let headers = new Headers({
        'Content-Type':'applicacion/json'
      });

      return this.http.post( this.firesURL,body,{headers})
      .map(res=>{
      //  console.log(res.json());
        return res.json();

      });
}

  ActualizarUsuario( usuario:Usuario,ID_U:string ){

        let body = JSON.stringify(usuario);
        let headers = new Headers({
          'Content-Type':'applicacion/json'
        });
  let url =`${this.fireURL}/${ ID_U }.json`;

        return this.http.put( url ,body,{headers})
        .map(res=>{
          console.log(res.json());
          return res.json();

        });
  }

  getUsuario(ID_U :string){
    let url =`${this.fireURL}/?orderBy="ID_U"&equalTo="${ID_U}"`;
//?orderBy="ID_U"&equalTo="google-oauth2|113812221938335774597"&print=pretty
    return this.http.get(url)
    .map(res=>res.json());
  }

}
