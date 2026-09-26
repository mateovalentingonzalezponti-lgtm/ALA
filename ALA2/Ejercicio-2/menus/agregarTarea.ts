import readlineSync from "readline-sync";

import {
    crearTarea
} from "../modelos/tarea.js";

import type {
    Estado,
    Dificultad
} from "../modelos/tarea.js";

import {
    agregarTareaAlListado
} from "../datos/tareas.js";

import {
    separador,
    mostrarAviso,
    tareaGuardada
} from "../utilidades/mensajes.js";

import {
    tituloValido,
    descripcionValida,
    estadoValido,
    dificultadValida
} from "../utilidades/validaciones.js";

import {
    fechaValida,
    parsearFecha
} from "../utilidades/fechas.js";


export function agregarTarea(): void {

    console.clear();

    separador();
    console.log("           ESTÁS CREANDO UNA NUEVA TAREA");
    separador();

    const titulo = pedirTitulo();
    const descripcion = pedirDescripcion();
    const estado = pedirEstado();
    const dificultad = pedirDificultad();
    const vencimiento = pedirVencimiento();

    const nuevaTarea = crearTarea({
        titulo,
        descripcion,
        estado,
        dificultad,
        vencimiento
    });

    agregarTareaAlListado(nuevaTarea);

    tareaGuardada(estado);
}


function pedirTitulo(): string {

    while (true) {

        const titulo = readlineSync.question(
            "- Ingrese el título de la tarea (Máx. 100 carac.):\n> "
        ).trim();

        if (tituloValido(titulo)) {
            return titulo;
        }

        mostrarAviso(
            "- El título es obligatorio y debe",
            "tener como máximo 100 caracteres."
        );

        console.clear();

        separador();
        console.log("           ESTÁS CREANDO UNA NUEVA TAREA");
        separador();
    }
}


function pedirDescripcion(): string {

    while (true) {

        console.clear();
        separador();
        console.log("           ESTÁS CREANDO UNA NUEVA TAREA");
        separador();
        
        const descripcion = readlineSync.question(
            "- Ingrese la descripción (Máx. 500 carac.):\n> "
        ).trim();

        if (descripcionValida(descripcion)) {
            return descripcion;
        }

        mostrarAviso(
            "- La descripción supera los 500 caracteres."
        );

        console.clear();

        separador();
        console.log("           ESTÁS CREANDO UNA NUEVA TAREA");
        separador();
    }
}


function pedirEstado(): Estado {

    while (true) {
        
        console.clear();
        separador();
        console.log("           ESTÁS CREANDO UNA NUEVA TAREA");
        separador();

        console.log();
        console.log("Seleccione el estado de la tarea:");
        console.log();
        console.log(" [1] Pendiente");
        console.log(" [2] En Curso");
        console.log(" [3] Terminada");
        console.log(" [4] Cancelada");

        separador();

        const entrada = readlineSync.question("> ");
        const estado = Number(entrada);

        if (estadoValido(estado)) {
            return estado;
        }

        mostrarAviso(
        "- Estado inválido. Intente nuevamente."
        );
    }
}


function pedirDificultad(): Dificultad {

    while (true) {

        console.clear();
        separador();
        console.log("           ESTÁS CREANDO UNA NUEVA TAREA");
        separador();

        console.log();
        console.log("Seleccione la dificultad de la tarea:");
        console.log();
        console.log(" [1] Fácil");
        console.log(" [2] Medio");
        console.log(" [3] Difícil");

        separador();

        const entrada = readlineSync.question("> ");
        const dificultad = Number(entrada);

        if (dificultadValida(dificultad)) {
            return dificultad;
        }

        mostrarAviso(
        "- Dificultad inválida. Intente nuevamente."
        );
    }
}


function pedirVencimiento(): Date | null {

    while (true) {
        console.clear();
        separador();
        console.log("           ESTÁS CREANDO UNA NUEVA TAREA");
        separador();

        console.log("Ingrese la fecha de vencimiento.");
        console.log("(Formato: dd/mm/aaaa)");
        console.log("Deje vacío si no desea establecer una fecha.");

        separador();

        const entrada = readlineSync.question("> ").trim();

        if (entrada === "") {
            return null;
        }

        if (fechaValida(entrada)) {
            return parsearFecha(entrada);
        }

        mostrarAviso(
            "- Fecha inválida. Utilice el formato dd/mm/aaaa."
        );
    }
}