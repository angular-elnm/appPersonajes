import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Personaje } from 'src/app/interfaces/personaje.interface';
import { PersonajesService } from 'src/app/services/personajes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-personaje',
  templateUrl: './edit-personaje.component.html',
  styles: []
})
export class EditPersonajeComponent implements OnInit {

  personaje: Personaje = {
    nombre: null,
    serie: null,
    frase: null
  };


  nuevo: false;
  id: string;

  constructor( private _personajeService: PersonajesService,
               private router: Router,
               private activatedRoute: ActivatedRoute ) {

                this.activatedRoute.params
                  .subscribe ( params => {
                    this.id = params['id'];

                    if (this.id !== 'nuevo') {
                      this._personajeService.getPersonaje(this.id)
                        .subscribe ( (data: any) => this.personaje = data );
                    }
                  });
               }

  ngOnInit() {
  }

  guardar() {
    console.log(this.personaje);

    if ( this.id === 'nuevo') {
      this._personajeService.insertPersonaje(this.personaje)
        .subscribe( (data: any) => {
          this.router.navigate(['/personaje', data.name ]);
          console.log(data);

        },
        error => console.error(error));

    } else {
      this._personajeService.updatePersonaje( this.personaje, this.id )
      .subscribe( (data: any) => {
        console.log(data);
      },
      error => console.error(error));
    }


  }

  addNewPersonaje( forma: NgForm ) {
    this.router.navigate(['/personaje', 'nuevo']);

    forma.reset({
      serie: 'Seleccione una serie'
    });
  }

}
