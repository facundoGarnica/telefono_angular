import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
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

}
