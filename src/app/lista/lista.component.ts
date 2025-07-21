import { Component } from '@angular/core';
import { Persona } from '../models/Persona';
import { PersonaServiceService } from '../service/persona/personaService.service';

@Component({
  selector: 'app-lista',
  imports: [],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  public listaPersonas: Persona[] = [];
  constructor(private personaService: PersonaServiceService) {

  }
  ngOnInit(): void {
    this.personaService.getAll().subscribe(r => {
      this.listaPersonas = r;
      console.log(this.listaPersonas);
    });

  }
}