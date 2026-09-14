import { misTareas } from "../datos/tareas.js";
import { editarTarea } from "./editarTarea.js";

import {
    separador,
    opcionInvalida,
    tareaEliminada,
    pausar
} from "../utilidades/mensajes.js";

// Muestra todos los datos de una tarea
export function detalleTarea(indice) {

    let opcionDetalle = -1;

    while (opcionDetalle !== 0) {

        const tarea = misTareas[indice];

        // Si la tarea ya no existe, volvemos al menú anterior
        if (!tarea) {
            return;
        }

        console.clear();

        separador();
        console.log("              DETALLE DE LA TAREA");
        separador();



        if (tarea.titulo.trim() === "") {
            console.log(" TÍTULO:      (Sin Título)");
        } else {
            console.log(` TÍTULO:      ${tarea.titulo}`);
        }


        if (tarea.descripcion.trim() === "") {
            console.log(" DESCRIPCIÓN: (Sin Descripción)");
        } else {
            console.log(` DESCRIPCIÓN: ${tarea.descripcion}`);
        }

        console.log();


        console.log(` ESTADO:      ${obtenerNombreEstado(tarea.estado)}`);

        console.log(
            ` DIFICULTAD:  ${obtenerDificultad(tarea.dificultad)}`
        );


        console.log(
            ` CREACIÓN:    ${formatearFecha(tarea.creacion)}`
        );

        console.log(
            ` ÚLT. EDICIÓN: ${formatearFecha(tarea.ultimaEdicion)}`
        );

        console.log(
            ` VENCIMIENTO: ${tarea.vencimiento || "Sin Datos"}`
        );

        separador();

        console.log(
            "      [1] Editar | [2] Eliminar | [0] Volver"
        );

        separador();

        const entrada = prompt("> ");

        if (entrada === null) {
            return;
        }

        if (!Number.isInteger(Number(entrada))) {
            opcionInvalida();
            pausar();
            continue;
        }

        opcionDetalle = Number(entrada);

        switch (opcionDetalle) {

            case 1:
                editarTarea(indice);
                break;

            case 2:
                eliminarTarea(indice);
                break;

            case 0:
                return;

            default:
                opcionInvalida();
                pausar();
        }
    }
}




function obtenerNombreEstado(estado) {

    switch (estado) {

        case 1:
            return "Pendiente";

        case 2:
            return "En Curso";

        case 3:
            return "Terminada";

        case 4:
            return "Cancelada";

        default:
            return "Sin Datos";
    }
}




function obtenerDificultad(dificultad) {

    switch (dificultad) {

        case 1:
            return "★☆☆ (Fácil)";

        case 2:
            return "★★☆ (Medio)";

        case 3:
            return "★★★ (Difícil)";

        default:
            return "Sin Datos";
    }
}



function formatearFecha(fecha) {

    if (!fecha) {
        return "Sin Datos";
    }

    const dia = String(fecha.getDate()).padStart(2, "0");
    const mes = String(fecha.getMonth() + 1).padStart(2, "0");
    const anio = fecha.getFullYear();

    return `${dia}/${mes}/${anio}`;
}




function eliminarTarea(indice) {

    const tarea = misTareas[indice];

    //separador();
    console.log("- ¿Seguro que Quieres ELIMINARLA?");
    console.log("[1] Sí | [0] No");

    separador();

    const confirmar = prompt("> ");

    if (confirmar === "1") {

        misTareas.splice(indice, 1);

        tareaEliminada();
        pausar();

        return;
    }

    console.log("- Eliminación Cancelada. La tarea sigue guardada.\n");
    separador();
    pausar();
}