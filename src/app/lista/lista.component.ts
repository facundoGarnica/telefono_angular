import { Component } from '@angular/core';
import { Persona } from '../models/Persona';
import { ContactoServiceService } from '../service/contacto/contactoService.service';
import { PersonaServiceService } from '../service/persona/personaService.service';
import { TelefonoServiceService } from '../service/telefono/telefonoService.service';

@Component({
  selector: 'app-lista',
  imports: [],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  public listaPersonas: Persona[] = [];
  public listaTelefonos: any[] = [];
  public listContactos: any[] = [];
  public mostrarTablaPersonas: boolean = false;

  constructor(private personaService: PersonaServiceService, private telefonoService: TelefonoServiceService, private contactoService: ContactoServiceService) {
    this.listaPersonas = [];
    this.listaTelefonos = [];
    this.listContactos = [];

  }
  ngOnInit(): void {

  }
  //funcion para mostrar la lista de personas
  mostrarPersonas(): void {
    this.personaService.getAll().subscribe(r => {
      this.listaPersonas = r;
      console.log("lista de personas: ", this.listaPersonas);
    });
  }

  telefonoPorPersona(id: number): void {
    this.telefonoService.findByPersonaId(id).subscribe(r => {
      this.listaTelefonos = r;
      console.log("lista de telefonos: ", this.listaTelefonos);
    });
  }
}


