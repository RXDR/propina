import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RegisterEmpleComponent } from './components/registerEmple/registerEmple.component';
import { PropinasComponent } from './components/propinas/propinas.component';
import { PuntosincidenciasComponent } from './components/puntosincidencias/puntosincidencias.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/main' },
  { path: 'registro_empleados', component: RegisterEmpleComponent,
  ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
  { path: 'propinas', component: PropinasComponent,
  ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
  { path: 'puntos', component:PuntosincidenciasComponent,
  ...canActivate(() => redirectUnauthorizedTo(['/login']))
},
  {
    path: 'main',
    component: MainComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutes{}
