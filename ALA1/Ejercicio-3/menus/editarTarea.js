import { misTareas } from "../datos/tareas.js";

import {
    separador,
    opcionInvalida,
    modificacionExitosa,
    pausar
} from "../utilidades/mensajes.js";

import {
    tituloValido,
    descripcionValida,
    estadoValido,
    dificultadValida
} from "../utilidades/validaciones.js";

// Menú para modificar los datos de una tarea
export function editarTarea(indice) {

    let opcionCambio = -1;

    while (opcionCambio !== 0) {

        const tarea = misTareas[indice];

        if (!tarea) {
            return;
        }

        console.clear();

        separador();
        console.log("               MODIFICAR TAREA");
        separador();

        console.log(" ¿Qué campo deseas modificar?\n");

        console.log(" [1] TÍTULO.");
        console.log(" [2] DESCRIPCIÓN.");
        console.log(" [3] ESTADO.");
        console.log(" [4] DIFICULTAD.");
        console.log(" [5] FECHA DE VENCIMIENTO.");
        console.log(" [0] VOLVER AL DETALLE.");

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

        opcionCambio = Number(entrada);

        switch (opcionCambio) {

            case 1:
                editarTitulo(tarea);
                break;

            case 2:
                editarDescripcion(tarea);
                break;

            case 3:
                editarEstado(tarea);
                break;

            case 4:
                editarDificultad(tarea);
                break;

            case 5:
                editarVencimiento(tarea);
                break;

            case 0:
                return;

            default:
                opcionInvalida();
                pausar();
        }
    }
}




function editarTitulo(tarea) {

    separador();

    console.log(
        `Ingrese el nuevo Título: (Anterior: ${tarea.titulo})`
    );

    console.log("[ENTER] Para mantener el actual");
    console.log("[0] Para Cancelar Cambios");

    separador();

    const nuevoTitulo = prompt("> ");

    if (nuevoTitulo === null || nuevoTitulo === "0") {

        console.log("\n- Modificación Cancelada. Sin Cambios\n");

        pausar();
        return;
    }

    // ENTER = mantener el valor actual
    if (nuevoTitulo === "") {

        console.log("\n- No se realizaron cambios.\n");

        pausar();
        return;
    }

    if (!tituloValido(nuevoTitulo.trim())) {

        console.log(
            "\n- El título no es válido."
        );

        console.log(
            "- Debe tener entre 1 y 100 caracteres.\n"
        );

        pausar();
        return;
    }

    tarea.titulo = nuevoTitulo.trim();

    actualizarUltimaEdicion(tarea);

    modificacionExitosa("Título");
    pausar();
}




function editarDescripcion(tarea) {

    separador();

    console.log(
        "Ingrese la nueva descripción:"
    );

    console.log(
        `(Descripción Anterior: ${tarea.descripcion || "Sin Descripción"})`
    );

    console.log("[ENTER] Para mantener la actual");
    console.log("[ESPACIO] Para borrar la descripción");
    console.log("[0] Para Cancelar Cambios");

    separador();

    const nuevaDescripcion = prompt("> ");

    if (nuevaDescripcion === null || nuevaDescripcion === "0") {

        console.log("\n- Modificación Cancelada. Sin Cambios\n");

        pausar();
        return;
    }

    // ENTER = mantener el valor actual
    if (nuevaDescripcion === "") {

        console.log("\n- No se realizaron cambios.\n");

        pausar();
        return;
    }

    // Un espacio = borrar el atributo
    if (nuevaDescripcion === " ") {

        tarea.descripcion = "";

        actualizarUltimaEdicion(tarea);

        modificacionExitosa("Descripción");
        pausar();
        return;
    }

    if (!descripcionValida(nuevaDescripcion)) {

        console.log(
            "\n- La descripción supera los 500 caracteres.\n"
        );

        pausar();
        return;
    }

    tarea.descripcion = nuevaDescripcion;

    actualizarUltimaEdicion(tarea);

    modificacionExitosa("Descripción");
    pausar();
}




function editarEstado(tarea) {

    //separador();

    console.log("Seleccione el nuevo estado:\n");

    console.log(" [1] Pendiente");
    console.log(" [2] En Curso");
    console.log(" [3] Terminada");
    console.log(" [4] Cancelada");

    separador();

    const nuevoEstado = prompt("> ");

    if (nuevoEstado === null) {
        return;
    }

    if (!estadoValido(nuevoEstado)) {

        console.log(
            "\n- Estado inválido. No se realizaron cambios.\n"
        );

        pausar();
        return;
    }

    tarea.estado = Number(nuevoEstado);

    actualizarUltimaEdicion(tarea);

    modificacionExitosa("Estado");
    pausar();
}




function editarDificultad(tarea) {

    separador();

    console.log("Seleccione la nueva dificultad:\n");

    console.log(" [1] Fácil");
    console.log(" [2] Medio");
    console.log(" [3] Difícil");

    separador();

    const nuevaDificultad = prompt("> ");

    if (nuevaDificultad === null) {
        return;
    }

    if (!dificultadValida(nuevaDificultad)) {

        console.log(
            "\n- Dificultad inválida. No se realizaron cambios.\n"
        );

        pausar();
        return;
    }

    tarea.dificultad = Number(nuevaDificultad);

    actualizarUltimaEdicion(tarea);

    modificacionExitosa("Dificultad");
    pausar();
}




function editarVencimiento(tarea) {
    console.log(
        "- Ingrese la nueva fecha de Vencimiento (dd/mm/aaaa):"
    );

    console.log(
        `(Fecha Anterior: ${tarea.vencimiento || "Sin Datos"})`
    );

    console.log("[ENTER] Para mantener la actual");
    console.log("[ESPACIO] Para borrar la fecha");

    separador();

    const nuevaFecha = prompt("> ");

    if (nuevaFecha === null) {
        return;
    }

    // ENTER = mantener
    if (nuevaFecha === "") {

        console.log("\n- No se realizaron cambios.\n");

        pausar();
        return;
    }

    // ESPACIO = borrar
    if (nuevaFecha === " ") {

        tarea.vencimiento = null;

        actualizarUltimaEdicion(tarea);

        modificacionExitosa("Fecha de Vencimiento");
        pausar();
        return;
    }

    tarea.vencimiento = nuevaFecha.trim();

    actualizarUltimaEdicion(tarea);

    modificacionExitosa("Fecha de Vencimiento");
    pausar();
}


function actualizarUltimaEdicion(tarea) {

    tarea.ultimaEdicion = new Date();
}