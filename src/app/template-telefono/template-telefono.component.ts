import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Persona } from '../models/Persona';
import { Telefono } from '../models/Telefono';
import { PersonaServiceService } from '../service/persona/personaService.service';
import { TelefonoServiceService } from '../service/telefono/telefonoService.service';

@Component({
  selector: 'app-template-telefono',
  imports: [RouterLink, FormsModule],
  templateUrl: './template-telefono.component.html',
  styleUrl: './template-telefono.component.css'
})
export class TemplateTelefonoComponent {
  listaPersonas: Persona[] = [];
  personaId: number | null = null;

  constructor(private personaService: PersonaServiceService, private telefonoService: TelefonoServiceService) {
    this.listaPersonas = [];
  }

  //crear el formulario a llenar
  telefono: Telefono = {
    numero: '',
    marca: '',
    contactos: [],
  }

  ngOnInit(): void {
    this.mostrarPersonas();
  }
  mostrarPersonas(): void {
    this.personaService.getAll().subscribe(r => {
      this.listaPersonas = r;
    });
  }
  buscarPersonaPorId(id: number): void {
    this.personaService.buscarPorId(id).subscribe(r => {
      console.log("Persona encontrada: ", r);
      this.telefono.persona_id = r.id;
    });
  }
  guardarTelefono(): void {
    this.telefonoService.saveTelefono(this.telefono).subscribe(r => {
      console.log("Telefono guardado correctamente" + " numero: " + this.telefono.numero + " marca: " + this.telefono.marca +
        " persona_id: " + this.telefono.persona_id + " contactos: " + this.telefono.contactos);
      this.telefono = {
        numero: '',
        marca: '',
        persona_id: 0,
        contactos: [],
      };
    });
  }


}
