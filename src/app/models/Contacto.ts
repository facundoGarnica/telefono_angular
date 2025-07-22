import { Telefono } from "./Telefono";


export interface Contacto {
    id?: number;
    nombreContacto: string;
    telefono?: Telefono;
}