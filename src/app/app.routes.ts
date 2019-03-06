import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { EditPersonajeComponent } from './components/personajes/edit-personaje.component';

const routes: Routes = [
    { path: 'personajes', component: PersonajesComponent },
    { path: 'personaje/:id', component: EditPersonajeComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'personajes' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
