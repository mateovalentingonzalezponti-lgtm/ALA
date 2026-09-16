import readlineSync from "readline-sync";

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

        const entrada = readlineSync.question("> ");

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
    
    console.clear();
    separador();
    console.log(
        `Ingrese el nuevo Título: (Anterior: ${tarea.titulo})\n`
    );

    console.log("[ENTER] Para mantener el actual");
    console.log("[0] Para Cancelar Cambios");

    separador();

    const nuevoTitulo = readlineSync.question("> ");

    if (nuevoTitulo === "0") {

        separador();
        console.log("- Modificación Cancelada. Sin Cambios");
        separador();

        pausar();
        return;
    }

    // ENTER = mantener el valor actual
    if (nuevoTitulo === "") {
        separador();
        console.log("- No se realizaron cambios.");
        separador();
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

    separador();
    modificacionExitosa("Título");
    pausar();
}


function editarDescripcion(tarea) {

    console.clear();
    separador();
    console.log(
        "Ingrese la nueva descripción:"
    );

    console.log(
        `(Descripción Anterior: ${tarea.descripcion || "Sin Descripción"})\n`
    );

    console.log("[ENTER] Para mantener la actual");
    console.log("[1] Para borrar la descripción");
    console.log("[0] Para Cancelar Cambios");

    separador();

    const nuevaDescripcion = readlineSync.question("> ");

    if (nuevaDescripcion === "0") {

        separador();
        console.log("- Modificación Cancelada. Sin Cambios");
        separador();

        pausar();
        return;
    }

    // ENTER = mantener el valor actual
    if (nuevaDescripcion === "") {

        separador();
        console.log("- No se realizaron cambios.");
        separador();

        pausar();
        return;
    }

    // 1 = borrar la descripción
    if (nuevaDescripcion === "1") {

        tarea.descripcion = "";

        actualizarUltimaEdicion(tarea);

        separador();
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

    separador();
    modificacionExitosa("Descripción");
    pausar();
}


function editarEstado(tarea) {

    console.clear();
    separador();
    console.log("Seleccione el nuevo estado:\n");

    console.log(" [1] Pendiente");
    console.log(" [2] En Curso");
    console.log(" [3] Terminada");
    console.log(" [4] Cancelada");

    separador();

    const nuevoEstado = readlineSync.question("> ");

    if (!estadoValido(nuevoEstado)) {

        console.log(
            "==================================================\n- Estado inválido. No se realizaron cambios.\n=================================================="
        );

        pausar();
        return;
    }

    tarea.estado = Number(nuevoEstado);

    actualizarUltimaEdicion(tarea);

    separador();
    modificacionExitosa("Estado");
    pausar();
}


function editarDificultad(tarea) {

    console.clear();
    separador();
    console.log("Seleccione la nueva dificultad:\n");

    console.log(" [1] Fácil");
    console.log(" [2] Medio");
    console.log(" [3] Difícil");

    separador();

    const nuevaDificultad = readlineSync.question("> ");

    if (!dificultadValida(nuevaDificultad)) {

        console.log(
            "==================================================\n- Dificultad inválida. No se realizaron cambios.\n=================================================="
        );

        pausar();
        return;
    }

    tarea.dificultad = Number(nuevaDificultad);

    actualizarUltimaEdicion(tarea);

    separador();
    modificacionExitosa("Dificultad");
    pausar();
}


function editarVencimiento(tarea) {

    console.clear();
    separador();
    console.log(
        "- Ingrese la nueva fecha de Vencimiento (dd/mm/aaaa):"
    );

    console.log(
        `(Fecha Anterior: ${tarea.vencimiento || "Sin Datos"})\n`
    );

    console.log("[ENTER] Para mantener la actual");
    console.log("[1] Para borrar la fecha");
    console.log("[0] Para Cancelar Cambios");

    separador();

    const nuevaFecha = readlineSync.question("> ");

    // 0 = cancelar
    if (nuevaFecha === "0") {

        separador();
        console.log("- Modificación Cancelada. Sin Cambios");
        separador();

        pausar();
        return;
    }

    // ENTER = mantener
    if (nuevaFecha === "") {
        separador();
        console.log("- No se realizaron cambios.");
        separador();

        pausar();
        return;
    }

    // 1 = borrar
    if (nuevaFecha === "1") {

        tarea.vencimiento = null;

        actualizarUltimaEdicion(tarea);

        separador();
        modificacionExitosa("Fecha de Vencimiento");
        pausar();
        return;
    }

    tarea.vencimiento = nuevaFecha.trim();

    actualizarUltimaEdicion(tarea);

    separador();
    modificacionExitosa("Fecha de Vencimiento");
    pausar();
}


function actualizarUltimaEdicion(tarea) {

    tarea.ultimaEdicion = new Date();
}