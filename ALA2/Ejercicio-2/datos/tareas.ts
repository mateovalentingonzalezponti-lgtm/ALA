import type { Tarea } from "../modelos/tarea.js";

const misTareas: Tarea[] = [];

export function obtenerTareas(): Tarea[] {
    return [...misTareas];
}

export function obtenerTareaPorIndice(indice: number): Tarea | undefined {
    if (indice < 0 || indice >= misTareas.length) {
        return undefined;
    }

    return misTareas[indice];
}

export function agregarTareaAlListado(tarea: Tarea): void {
    misTareas.push(tarea);
}

export function eliminarTareaPorIndice(indice: number): boolean {
    if (indice < 0 || indice >= misTareas.length) {
        return false;
    }

    misTareas.splice(indice, 1);
    return true;
}