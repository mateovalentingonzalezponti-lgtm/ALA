import readlineSync from "readline-sync";

import {
    nombreEstado,
    type Estado
} from "../modelos/tarea.js";

const LINEA = "==================================================";

export function separador(): void {
    console.log(LINEA);
}

export function pausar(): void {
    console.log();
    readlineSync.question("Presioná ENTER para continuar...");
}

export function mostrarAviso(...lineas: string[]): void {
    separador();

    for (const linea of lineas) {
        console.log(linea);
    }

    separador();
    pausar();
}

export function opcionInvalida(): void {
    mostrarAviso(
        "- La opción ingresada no es válida."
    );
}

export function tareaGuardada(estado: Estado): void {
    mostrarAviso(
        `- ¡Tarea agregada con éxito en estado: ${nombreEstado(estado).toUpperCase()}!`
    );
}

export function tareaEliminada(): void {
    mostrarAviso(
        "- ¡Tarea Eliminada con Éxito!"
    );
}

export function modificacionExitosa(campo: string): void {
    const mensajes: Record<string, string> = {
        titulo: "- ¡Título actualizado con éxito!",
        descripcion: "- ¡Descripción actualizada con éxito!",
        estado: "- ¡Estado actualizado con éxito!",
        dificultad: "- ¡Dificultad actualizada con éxito!",
        vencimiento: "- ¡Fecha de Vencimiento actualizada con éxito!"
    };

    mostrarAviso(
        mensajes[campo] ?? "- ¡Modificación realizada con éxito!"
    );
}