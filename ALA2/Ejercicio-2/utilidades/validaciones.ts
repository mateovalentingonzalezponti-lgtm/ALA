import type { Estado, Dificultad } from "../modelos/tarea.js";


export function estaEnRango(
    valor: number,
    minimo: number,
    maximo: number
): boolean {
    return Number.isInteger(valor) &&
           valor >= minimo &&
           valor <= maximo;
}


export function tituloValido(titulo: string): boolean {
    return titulo.length > 0 &&
           titulo.length <= 100;
}


export function descripcionValida(descripcion: string): boolean {
    return descripcion.length <= 500;
}


export function estadoValido(estado: number): estado is Estado {
    return estaEnRango(estado, 1, 4);
}


export function dificultadValida(
    dificultad: number
): dificultad is Dificultad {
    return estaEnRango(dificultad, 1, 3);
}


export function leerOpcionNumerica(
    entrada: string
): number | null {

    const texto = entrada.trim();

    if (!/^\d+$/.test(texto)) {
        return null;
    }

    return Number(texto);
}