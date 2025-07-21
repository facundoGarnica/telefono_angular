import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonaServiceService } from './service/persona/personaService.service';
import { Persona } from './models/Persona';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'telefono-angular';
  public listaPersonas: Persona[] = [];

  constructor(private personaService: PersonaServiceService) { }

  ngOnInit(): void {
    this.personaService.getAll().subscribe((r: Persona[]) => {
      this.listaPersonas = r;
      console.log(this.listaPersonas);
    });
  }
}
