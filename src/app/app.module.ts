import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './inicio/inicio.component';
import { SesionComponent } from './sesion/sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { OlvidoComponent } from './olvido/olvido.component';
import { CodigoRComponent } from './codigo-r/codigo-r.component';

//material
import {MatButtonModule} from '@angular/material/button'
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SesionComponent,
    RegistroComponent,
    OlvidoComponent,
    CodigoRComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatFormFieldModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
