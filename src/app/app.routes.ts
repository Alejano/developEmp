import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {InicioComponent} from './components/inicio/inicio.component';
import {PerfilComponent} from './components/perfil/perfil.component';
import {AuthGuardService} from "./services/auth-guard.service";

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'perfil', component: PerfilComponent,
    canActivate:[AuthGuardService]
 },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
