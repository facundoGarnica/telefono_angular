import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment';
import { Persona } from '../../models/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaServiceService {

 private appiServer = "";

constructor(private httpClient: HttpClient) {
  this.appiServer = environment.apiUrl;
}

getAll():Observable<any>{
    return this.httpClient.get<Persona[]>( this.appiServer + "/persona/todos");
  }

  guardarPersona(persona: Persona): Observable<any> {
    return this.httpClient.post<Persona>(this.appiServer + "/persona/guardar", persona);
  }

  buscarPorId(id: number): Observable<Persona> {
    return this.httpClient.get<Persona>(this.appiServer + "/persona/buscarporid/" + id);
  }

}
