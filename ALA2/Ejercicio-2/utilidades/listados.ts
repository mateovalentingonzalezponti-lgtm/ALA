import readlineSync from "readline-sync";

import type { Tarea } from "../modelos/tarea.js";

import {
    leerOpcionNumerica
} from "./validaciones.js";

import {
    mostrarAviso
} from "./mensajes.js";


interface TareaEncontrada {
    tarea: Tarea;
    indice: number;
}


export function elegirTareaDeLista(
    tareasEncontradas: TareaEncontrada[],
    etiquetaVolver: string = "Menú Anterior"
): number | null {

    if (tareasEncontradas.length === 0) {
        return null;
    }

    console.log();

    tareasEncontradas.forEach(
        ({ tarea }, posicion) => {

            const estado =
                tarea.estado === 4
                    ? " (Cancelada)"
                    : "";

            console.log(
                ` [${posicion + 1}] ${tarea.titulo}${estado}`
            );
        }
    );

    console.log("==================================================");
    console.log(" [X] Presioná el Número de la Tarea");
    console.log(" para ver el Detalle");
    console.log();
    console.log(` [0] ${etiquetaVolver}`);
    console.log("==================================================");

    while (true) {

        const entrada = readlineSync.question("> ");

        const opcion = leerOpcionNumerica(entrada);

        if (opcion === null) {
            mostrarAviso(
                "- Ese Número de Tarea no existe en la Lista."
            );
            continue;
        }

        if (opcion === 0) {
            return null;
        }

        if (
            opcion < 1 ||
            opcion > tareasEncontradas.length
        ) {
            mostrarAviso(
                "- Ese Número de Tarea no existe en la Lista."
            );
            continue;
        }

        return tareasEncontradas[opcion - 1].indice;
    }
}