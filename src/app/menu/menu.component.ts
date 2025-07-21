import { Component } from '@angular/core';
import { Persona } from '../models/Persona';
import { PersonaServiceService } from '../service/persona/personaService.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
