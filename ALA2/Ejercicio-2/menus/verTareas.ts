import readlineSync from "readline-sync";

import {
    obtenerTareas
} from "../datos/tareas.js";

import {
    detalleTarea
} from "./detalleTareas.js";

import {
    elegirTareaDeLista
} from "../utilidades/listados.js";

import {
    separador,
    opcionInvalida,
    mostrarAviso
} from "../utilidades/mensajes.js";

import {
    leerOpcionNumerica
} from "../utilidades/validaciones.js";

import type { Estado } from "../modelos/tarea.js";


export function verTareas(): void {

    while (true) {

        console.clear();

        separador();
        console.log("             ¿QUÉ TAREAS DESEAS VER?");
        separador();

        console.log();
        console.log(" [1] Ver Todas las Tareas.");
        console.log(" [2] Ver Pendientes.");
        console.log(" [3] Ver En Curso.");
        console.log(" [4] Ver Terminadas.");
        console.log(" [0] Volver al Menú Principal.");
        console.log();

        separador();

        const entrada = readlineSync.question("> ");
        const opcion = leerOpcionNumerica(entrada);

        if (opcion === null) {
            opcionInvalida();
            continue;
        }

        if (opcion === 0) {
            return;
        }

        if (opcion < 1 || opcion > 4) {
            opcionInvalida();
            continue;
        }

        mostrarTareas(opcion);
    }
}


function mostrarTareas(opcionFiltro: number): void {

    console.clear();

    const filtros: Record<number, string> = {
        1: "Todas",
        2: "Pendientes",
        3: "En Curso",
        4: "Terminadas"
    };

    const textoFiltro = filtros[opcionFiltro];

    separador();
    console.log(`           LISTA DE TAREAS: ${textoFiltro}`);
    separador();

    const misTareas = obtenerTareas();

    if (misTareas.length === 0) {

        mostrarAviso(
            "- No hay Tareas Registradas en el",
            "Sistema Todavía."
        );

        return;
    }

    let tareasEncontradas;

    if (opcionFiltro === 1) {

        tareasEncontradas = misTareas.map(
            (tarea, indice) => ({
                tarea,
                indice
            })
        );

    } else {

        const estadosPermitidos: Record<number, Estado> = {
            2: 1,
            3: 2,
            4: 3
        };

        const estadoBuscado = estadosPermitidos[opcionFiltro];

        tareasEncontradas = misTareas
            .map((tarea, indice) => ({
                tarea,
                indice
            }))
            .filter(({ tarea }) =>
                tarea.estado === estadoBuscado
            );
    }

    if (tareasEncontradas.length === 0) {

        mostrarAviso(
            "- No se Encontraron Tareas con el",
            "Estado Seleccionado."
        );
        return;
    }

    const indiceReal = elegirTareaDeLista(
        tareasEncontradas,
        "Volver al Menú Anterior"
    );

    if (indiceReal !== null) {
        detalleTarea(indiceReal);
    }
}