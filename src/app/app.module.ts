import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CreaSalaComponent,
    CreaSedeComponent,
    MapaSalaComponent,
    PeliculaComponent,
    SalaComponent,
    ComidaComponent,
    VistaSalaComponent,
    VistaLandingComponent,
    VistaSedeComponent,
    VistaPeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
