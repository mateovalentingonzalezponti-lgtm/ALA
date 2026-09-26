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
    mostrarAviso
} from "../utilidades/mensajes.js";


export function buscarTarea(): void {

    console.clear();

    separador();
    console.log("               BUSCADOR DE TAREAS");
    separador();

    if (obtenerTareas().length === 0) {

        mostrarAviso(
            "- No hay Tareas Registradas en el Sistema",
            "para Buscar."
        );
        return;
    }

    console.log(
        "Ingrese el título o palabra clave a buscar:"
    );

    const criterio = readlineSync.question("> ").trim();

    if (criterio === "") {
        return;
    }

    const textoBusqueda = criterio.toLowerCase();

    console.clear();

    separador();

    console.log(
        `        RESULTADOS DE BÚSQUEDA: "${criterio}"`
    );

    separador();

    const tareasEncontradas = obtenerTareas()
        .map((tarea, indice) => ({
            tarea,
            indice
        }))
        .filter(({ tarea }) =>
            tarea.titulo
                .toLowerCase()
                .includes(textoBusqueda)
        );

    if (tareasEncontradas.length === 0) {

        mostrarAviso(
            "- No se Encontraron Tareas que Coincidan",
            "con la Búsqueda."
        );
        return;
    }

    const indiceReal = elegirTareaDeLista(
        tareasEncontradas,
        "Volver al Menú Principal"
    );

    if (indiceReal !== null) {
        detalleTarea(indiceReal);
    }
}