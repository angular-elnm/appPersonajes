import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styles: []
})
export class PersonajesComponent implements OnInit {

  personajes: any[] = [];
  loading =  true;


  constructor( private _personajeService: PersonajesService) {
    this._personajeService.getAllPersonajes()
      .subscribe( (data: any) => {
        this.personajes = data;
        this.loading = false;
      });
  }



  ngOnInit() {
  }

  deletePersonaje( k: string) {
    this._personajeService.deletePersonaje( k )
    .subscribe( r => {
      if ( r ) {
        console.error(r);
      } else {
        delete this.personajes[k];
      }
    });
  }


}
