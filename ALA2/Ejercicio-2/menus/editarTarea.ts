import readlineSync from "readline-sync";

import type {
    Tarea
} from "../modelos/tarea.js";

import {
    marcarComoEditada
} from "../modelos/tarea.js";

import {
    obtenerTareaPorIndice
} from "../datos/tareas.js";

import {
    separador,
    mostrarAviso,
    opcionInvalida,
    modificacionExitosa
} from "../utilidades/mensajes.js";

import {
    tituloValido,
    descripcionValida,
    estadoValido,
    dificultadValida,
    leerOpcionNumerica
} from "../utilidades/validaciones.js";

import {
    fechaValida,
    parsearFecha,
    formatearFecha
} from "../utilidades/fechas.js";


export function editarTarea(indice: number): void {

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
        console.log("               MODIFICAR TAREA");
        separador();

        console.log(" ¿Qué campo deseas modificar?");
        console.log();

        console.log(" [1] TÍTULO.");
        console.log(" [2] DESCRIPCIÓN.");
        console.log(" [3] ESTADO.");
        console.log(" [4] DIFICULTAD.");
        console.log(" [5] FECHA DE VENCIMIENTO.");
        console.log(" [0] VOLVER AL DETALLE.");

        separador();

        const entrada = readlineSync.question("> ");
        const opcion = leerOpcionNumerica(entrada);

        if (opcion === null) {
            opcionInvalida();
            continue;
        }

        switch (opcion) {

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
        }
    }
}


function editarTitulo(tarea: Tarea): void {

    console.clear();

    separador();

    console.log(
        `Ingrese el nuevo Título: (Anterior: ${tarea.titulo})`
    );

    console.log();

    console.log("[ENTER] Para mantener el actual");
    console.log("[0] Para Cancelar Cambios");
    console.log("(Si querés que el título sea literalmente \"0\", escribí \\0)"); 

    separador();

    const entrada = readlineSync.question("> ").trim(); 

    if (entrada === "") {

        mostrarAviso(
            "- No se realizaron cambios."
        );

        return;
    }

    if (entrada === "0") {

        mostrarAviso(
            "- Modificación Cancelada. Sin Cambios"
        );

        return;
    }

    const titulo = entrada.startsWith("\\0")
        ? entrada.substring(1)
        : entrada;

    if (!tituloValido(titulo)) {

        mostrarAviso(
            "- El título es obligatorio y debe",
            "tener como máximo 100 caracteres."
        );

        return;
    }

    tarea.titulo = titulo;

    marcarComoEditada(tarea);

    modificacionExitosa("titulo");
}


function editarDescripcion(tarea: Tarea): void {

    console.clear();

    separador();

    console.log(
        "Ingrese la nueva descripción:"
    );

    console.log(
        `(Descripción Anterior: ${
            tarea.descripcion || "Sin Descripción"
        })`
    );

    console.log();

    console.log("[ENTER] Para mantener la actual");
    console.log("[1] Para borrar la descripción");
    console.log("[0] Para Cancelar Cambios");
    console.log("(Si querés que la descripción sea literalmente \"0\" o \"1\", escribí \\0 o \\1)"); 

    separador();

    const entrada = readlineSync.question("> ").trim();

    if (entrada === "") {

        mostrarAviso(
            "- No se realizaron cambios."
        );

        return;
    }

    if (entrada === "0") {

        mostrarAviso(
            "- Modificación Cancelada. Sin Cambios"
        );

        return;
    }

    if (entrada === "1") {

        tarea.descripcion = "";

        marcarComoEditada(tarea);

        modificacionExitosa("descripcion");

        return;
    }

    const descripcion = entrada.startsWith("\\0") || entrada.startsWith("\\1")
        ? entrada.substring(1)
        : entrada;

    if (!descripcionValida(descripcion)) {

        mostrarAviso(
            "- La descripción supera los 500 caracteres."
        );

        return;
    }

    tarea.descripcion = descripcion;

    marcarComoEditada(tarea);

    modificacionExitosa("descripcion");
}


function editarEstado(tarea: Tarea): void {

    console.clear();

    separador();

    console.log("Seleccione el nuevo estado:");
    console.log();

    console.log(" [1] Pendiente");
    console.log(" [2] En Curso");
    console.log(" [3] Terminada");
    console.log(" [4] Cancelada");

    separador();

    console.log("[ENTER] Para mantener el actual");
    console.log("[0] Para Cancelar Cambios");

    separador();

    const entrada = readlineSync.question("> ").trim();

    if (entrada === "") {

        mostrarAviso(
            "- No se realizaron cambios."
        );

        return;
    }

    if (entrada === "0") {

        mostrarAviso(
            "- Modificación Cancelada. Sin Cambios"
        );

        return;
    }

    const nuevoEstado = Number(entrada);

    if (!estadoValido(nuevoEstado)) {

        mostrarAviso(
            "- Estado inválido. No se realizaron cambios."
        );

        return;
    }

    tarea.estado = nuevoEstado;

    marcarComoEditada(tarea);

    modificacionExitosa("estado");
}


function editarDificultad(tarea: Tarea): void {

    console.clear();

    separador();

    console.log("Seleccione la nueva dificultad:");
    console.log();

    console.log(" [1] Fácil");
    console.log(" [2] Medio");
    console.log(" [3] Difícil");

    separador();

    console.log("[ENTER] Para mantener la actual");
    console.log("[0] Para Cancelar Cambios");

    separador();

    const entrada = readlineSync.question("> ").trim();

    if (entrada === "") {

        mostrarAviso(
            "- No se realizaron cambios."
        );

        return;
    }

    if (entrada === "0") {

        mostrarAviso(
            "- Modificación Cancelada. Sin Cambios"
        );

        return;
    }

    const nuevaDificultad = Number(entrada);

    if (!dificultadValida(nuevaDificultad)) {

        mostrarAviso(
            "- Dificultad inválida. No se realizaron cambios."
        );

        return;
    }

    tarea.dificultad = nuevaDificultad;

    marcarComoEditada(tarea);

    modificacionExitosa("dificultad");
}


function editarVencimiento(tarea: Tarea): void {

    while (true) {

        console.clear();

        separador();

        console.log(
            "- Ingrese la nueva fecha de Vencimiento (dd/mm/aaaa):"
        );

        console.log(
            `(Fecha Anterior: ${formatearFecha(tarea.vencimiento)})`
        );

        console.log();

        console.log("[ENTER] Para mantener la actual");
        console.log("[1] Para borrar la fecha");
        console.log("[0] Para Cancelar Cambios");

        separador();

        const entrada = readlineSync.question("> ").trim();

        if (entrada === "") {

            mostrarAviso(
                "- No se realizaron cambios."
            );

            return;
        }

        if (entrada === "0") {

            mostrarAviso(
                "- Modificación Cancelada. Sin Cambios"
            );

            return;
        }

        if (entrada === "1") {

            tarea.vencimiento = null;

            marcarComoEditada(tarea);

            modificacionExitosa("vencimiento");

            return;
        }

        if (!fechaValida(entrada)) {

            mostrarAviso(
                "- Fecha inválida. Utilice el formato dd/mm/aaaa."
            );

            continue;
        }

        tarea.vencimiento = parsearFecha(entrada);

        marcarComoEditada(tarea);

        modificacionExitosa("vencimiento");

        return;
    }
}