import readlineSync from "readline-sync";

import {
    nombreEstado,
    nombreDificultad,
    type Tarea
} from "../modelos/tarea.js";

import {
    obtenerTareaPorIndice,
    eliminarTareaPorIndice
} from "../datos/tareas.js";

import {
    editarTarea
} from "./editarTarea.js";

import {
    separador,
    mostrarAviso,
    opcionInvalida,
    tareaEliminada
} from "../utilidades/mensajes.js";

import {
    leerOpcionNumerica
} from "../utilidades/validaciones.js";

import {
    formatearFecha
} from "../utilidades/fechas.js";


export function detalleTarea(indice: number): void {

    const tarea = obtenerTareaPorIndice(indice);

    if (!tarea) {

        mostrarAviso(
            "- La tarea no existe."
        );

        return;
    }

    while (true) {

        console.clear();

        separador();

        console.log(
            "              DETALLE DE LA TAREA"
        );

        separador();

        mostrarDatosTarea(tarea);

        separador();

        console.log(
            "      [1] Editar | [2] Eliminar | [0] Volver"
        );

        separador();

        const entrada = readlineSync.question("> ");

        const opcion = leerOpcionNumerica(entrada);

        if (opcion === null) {
            opcionInvalida();
            continue;
        }

        switch (opcion) {

            case 1:
                editarTarea(indice);
                break;

            case 2:

                if (eliminarTarea(indice)) {
                    return;
                }

                break;

            case 0:
                return;

            default:
                opcionInvalida();
        }
    }
}


function mostrarDatosTarea(tarea: Tarea): void {

    console.log(
        ` TÍTULO:      ${tarea.titulo}`
    );

    console.log(
        ` DESCRIPCIÓN: ${tarea.descripcion || "Sin Descripción"}`
    );

    console.log();

    console.log(
        ` ESTADO:      ${nombreEstado(tarea.estado)}`
    );

    console.log(
        ` DIFICULTAD:  ${nombreDificultad(tarea.dificultad)}`
    );

    console.log(
        ` CREACIÓN:    ${formatearFecha(tarea.creacion)}`
    );

    console.log(
        ` ÚLT. EDICIÓN: ${formatearFecha(tarea.ultimaEdicion)}`
    );

    console.log(
        ` VENCIMIENTO: ${formatearFecha(tarea.vencimiento)}`
    );
}


function eliminarTarea(indice: number): boolean {

    separador();

    console.log(
        "- ¿Seguro que Quieres ELIMINARLA?"
    );

    console.log(
        "[1] Sí | [0] No"
    );

    separador();

    const respuesta = readlineSync.question("> ");

    if (respuesta === "0") {

        mostrarAviso(
            "- Eliminación Cancelada. La tarea sigue guardada."
        );

        return false;
    }

    if (respuesta === "1") {

        eliminarTareaPorIndice(indice);

        tareaEliminada();

        return true;
    }

    mostrarAviso(
        "- Opción inválida. La tarea sigue guardada."
    );

    return false;
}