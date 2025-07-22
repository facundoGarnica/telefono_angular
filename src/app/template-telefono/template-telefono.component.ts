import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Persona } from '../models/Persona';
import { Telefono } from '../models/Telefono';
import { PersonaServiceService } from '../service/persona/personaService.service';
import { TelefonoServiceService } from '../service/telefono/telefonoService.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-template-telefono',
  imports: [RouterLink, FormsModule],
  templateUrl: './template-telefono.component.html',
  styleUrl: './template-telefono.component.css'
})
export class TemplateTelefonoComponent {
  listaPersonas: Persona[] = [];
  personaEncontrada: number;

  constructor(private personaService: PersonaServiceService, private telefonoService: TelefonoServiceService) {
    this.listaPersonas = [];
    this.personaEncontrada = 0;
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
  buscarPersonaPorId(id: number): Observable<Persona> {
    return this.personaService.buscarPorId(id);
  }

  guardarTelefono(): void {
    if (!this.personaEncontrada) {
      alert('Debe seleccionar una persona');
      return;
    }

    this.buscarPersonaPorId(this.personaEncontrada).subscribe({
      next: (persona) => {
        this.telefono.persona = persona;

        this.telefonoService.saveTelefono(this.telefono).subscribe({
          next: () => {
            console.log("Teléfono guardado correctamente");

            // Limpiar formulario
            this.telefono = {
              numero: '',
              marca: '',
              persona: persona,
              contactos: []
            };
          },
          error: (error) => {
            console.error('Error al guardar teléfono:', error);
          }
        });
      },
      error: (error) => {
        console.error('Error al buscar persona:', error);
      }
    });
  }



}
