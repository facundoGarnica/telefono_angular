import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TelefonoServiceService {
  private appiServer = "";
  constructor(private httpClient: HttpClient) {
    this.appiServer = environment.apiUrl;
  }

  getAll(): Observable<any> {
    return this.httpClient.get(this.appiServer + "/telefono/todos");
  }
  getById(id:number): Observable<any> {
    return this.httpClient.get(this.appiServer + "/telefono/buscarporid/" + id);
  }
  saveTelefono(telefono: any): Observable<any> {
    return this.httpClient.post(this.appiServer + "/telefono/guardar", telefono);
  }
  findByPersonaId(id: number): Observable<any> {
    return this.httpClient.get(this.appiServer + "/telefono/buscarporpersona/" + id);
  }
}
