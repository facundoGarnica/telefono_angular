import { Telefono } from "./Telefono";

export class Persona {
    constructor(public id: number, public nombre:string, public apellido: string, public telefonos: Telefono[] = []){

    }
}