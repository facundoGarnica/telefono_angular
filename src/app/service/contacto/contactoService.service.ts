import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ContactoServiceService {
  private appiServer = "";
  constructor(private httpClient: HttpClient) {
    this.appiServer = environment.apiUrl;
  }

  getAll(): Observable<any> {
    return this.httpClient.get(this.appiServer + "/contacto/todos");
  }

  saveContacto(contacto: any): Observable<any> {
    return this.httpClient.post(this.appiServer + "/contacto/guardar", contacto);
  }

}
