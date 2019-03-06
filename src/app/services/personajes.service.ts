import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Personaje } from '../interfaces/personaje.interface';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  personajesUrl = 'https://heroesapp-7ea1d.firebaseio.com/personajes.json';
  onePersonajeUrl = 'https://heroesapp-7ea1d.firebaseio.com/personajes';

  constructor( private http: HttpClient) { }


  insertPersonaje ( personaje: Personaje) {
    console.log(personaje);

    const body = JSON.stringify( personaje );
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post( this.personajesUrl, body, { headers } )
      .pipe( map ( res => {
        console.log('Get-----> ', res);
        return res;
      }));
  }

  updatePersonaje ( personaje: Personaje, key$: string) {
    console.log(personaje);

    const body = JSON.stringify( personaje );
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const url = `${ this.onePersonajeUrl }/${ key$ }.json`;

    return this.http.put( url, body, { headers } )
      .pipe( map ( res => {
        console.log('Put----->', res);
        return res;
      }));
  }

  getPersonaje ( key$: string) {
    const url = `${ this.onePersonajeUrl }/${ key$ }.json`;

    return this.http.get ( url )
      .pipe ( map ( res => res));
  }

  getAllPersonajes() {
    return this.http.get ( this.personajesUrl )
      .pipe ( map ( res => res));
  }

  deletePersonaje( k: string) {

    const url = `${ this.onePersonajeUrl }/${ k }.json`;
    return this.http.delete ( url )
      .pipe( map( res => res));

  }

}
