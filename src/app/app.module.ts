import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http'


import {APP_ROUTING} from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import{ RegistroComponent } from './components/registro/registro.component';

//services
import {RegistroService} from'./services/registro.service';
import {AuthService} from './services/auth.service';
import {AuthGuardService} from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    InicioComponent,
    PerfilComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [AuthService,AuthGuardService,RegistroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
