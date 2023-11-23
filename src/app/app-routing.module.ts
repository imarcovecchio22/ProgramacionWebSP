import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VerificarGeneroComponent } from './verificar-genero/verificar-genero.component';
import { VerificarNacionalidadComponent } from './verificar-nacionalidad/verificar-nacionalidad.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  { path: 'verificar-genero', component: VerificarGeneroComponent },
  { path: 'verificar-nacionalidad', component: VerificarNacionalidadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
