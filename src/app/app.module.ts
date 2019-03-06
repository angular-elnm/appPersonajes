import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { EditPersonajeComponent } from './components/personajes/edit-personaje.component';
import { AppRoutingModule } from './app.routes';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PersonajesService } from './services/personajes.service';
import { KeysPipe } from './pipes/keys.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    EditPersonajeComponent,
    NavbarComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PersonajesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
