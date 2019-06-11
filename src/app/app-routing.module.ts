import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { CreaSalaComponent } from './Componentes/crea-sala/crea-sala.component';
import { CreaSedeComponent } from './Componentes/crea-sede/crea-sede.component';
import { MapaSalaComponent } from './Componentes/mapa-sala/mapa-sala.component';
import { PeliculaComponent } from './Componentes/pelicula/pelicula.component';
import { SalaComponent } from './Componentes/sala/sala.component';
import { ComidaComponent } from './Componentes/comida/comida.component';
import { VistaSalaComponent } from './Vistas/vista-sala/vista-sala.component';
import { VistaLandingComponent } from './Vistas/vista-landing/vista-landing.component';
import { VistaSedeComponent } from './Vistas/vista-sede/vista-sede.component';
import { VistaPeliculaComponent } from './Vistas/vista-pelicula/vista-pelicula.component';

const routes: Routes = [
  { path: '', redirectTo:'/bienvenida', pathMatch: 'full' },

  {
    path: 'bienvenida', 
    children:[
      {path: '**', component: LandingPageComponent } 
    ],  component:  VistaLandingComponent 
  },
  {
    path: 'sala', 
    children:[
      {path: 'crea', component:  CreaSalaComponent },
      {path: 'mapa', component:  MapaSalaComponent  }
    ],  component:  VistaSalaComponent 
  },
  {
    path: 'sede', 
    children:[
      {path: 'crea', component:  CreaSedeComponent }
    ],  component:  VistaSedeComponent
  },
  {
    path: 'pelicula', 
    children:[
      {path: 'crea', component:  PeliculaComponent }
    ],  component:  VistaPeliculaComponent
  },


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }