import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TelefonoServiceService } from '../service/telefono/telefonoService.service';
import { ContactoServiceService } from '../service/contacto/contactoService.service';
import { Telefono } from '../models/Telefono';
import { Contacto } from '../models/Contacto';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-template-contacto',
  imports: [RouterLink, FormsModule],
  templateUrl: './template-contacto.component.html',
  styleUrl: './template-contacto.component.css'
})
export class TemplateContactoComponent {
  listaTelefonos: Telefono[] = [];
  numeroEncontrado: number;
  constructor (private telefonoService: TelefonoServiceService, private contactoService: ContactoServiceService){
    this.listaTelefonos =[];
    this.numeroEncontrado = 0;
  }

  contacto: Contacto ={
    nombreContacto: '',
  }

  ngOnInit():void{
    this.telefonoService.getAll().subscribe(r=> {
      this.listaTelefonos = r;
      console.log( "Lista telefonos funcionando", this.listaTelefonos.length);
    })
  }



  guardarContacto():void{
    if (!this.numeroEncontrado){
      alert('Selecciona un telefono');
      return;
    }
    this.telefonoService.getById(this.numeroEncontrado).subscribe({
      next: (telefono)=>{
        this.contacto.telefono = telefono;
        this.contactoService.saveContacto(this.contacto).subscribe({  
          next: () => {
            console.log("Contacto guardado correctamente");

            // Limpiar formulario
            this.contacto = {
              nombreContacto: '',
              telefono: undefined
            };
            this.numeroEncontrado = 0;
          },
          error: (error) => {
            console.error("Error al guardar el contacto", error);
          }
        });
      }
    })
  }
}
