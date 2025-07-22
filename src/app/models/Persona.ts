import { Telefono } from "./Telefono";

export interface Persona {
    id?: number;
    nombre: string;
    apellido: string;
    telefonos: Telefono[];
}