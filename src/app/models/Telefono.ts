import { Contacto } from "./Contacto";

export class Telefono{
    constructor(public id: number, public numero: string, public marca: string, public persona_id: number, public contactos: Contacto[] = []){
        
    }
}