import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {InicioComponent} from './components/inicio/inicio.component';
import {PerfilComponent} from './components/perfil/perfil.component';
import {RegistroComponent} from './components/registro/registro.component';
import {AuthGuardService} from "./services/auth-guard.service";

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'perfil', component: PerfilComponent,
    canActivate:[AuthGuardService]
 },
  {path:'registro', component: RegistroComponent},
  { path: '**', pathMatch: 'full', redirectTo: '/home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
