import { Contacto } from "./Contacto";
import { Persona } from "./Persona";
export interface Telefono {
    id?: number;
    numero: string;
    marca: string;
    persona?: Persona;
    contactos: Contacto[];
}
