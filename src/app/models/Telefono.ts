import { Contacto } from "./Contacto";
export interface Telefono {
    id?: number;
    numero: string;
    marca: string;
    persona_id?: number;
    contactos: Contacto[];
}
