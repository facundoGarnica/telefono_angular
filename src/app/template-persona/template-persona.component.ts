import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Persona } from '../models/Persona';
import { PersonaServiceService } from '../service/persona/personaService.service';


@Component({
  selector: 'app-template-persona',
  imports: [RouterLink, FormsModule],
  templateUrl: './template-persona.component.html',
  styleUrl: './template-persona.component.css'
})

export class TemplatePersonaComponent {
  persona: Persona = {
    nombre: "",
    apellido: "",
    telefonos: [],
  };


  constructor(private personaService: PersonaServiceService) {

  }

  guardarPersona() {
    this.personaService.guardarPersona(this.persona).subscribe({
      next: (response) => {
        console.log('Persona guardada:', response);
        this.persona = { nombre: '', apellido: '', telefonos: [], id: 0 };
      },
      error: (error) => {
        console.error('Error al guardar la persona:', error);
      }
    });
  }
}
