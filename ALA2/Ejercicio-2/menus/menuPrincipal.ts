import readlineSync from "readline-sync";

import {
    verTareas
} from "./verTareas.js";

import {
    buscarTarea
} from "./buscarTareas.js";

import {
    agregarTarea
} from "./agregarTarea.js";

import {
    separador,
    opcionInvalida,
} from "../utilidades/mensajes.js";

import {
    leerOpcionNumerica
} from "../utilidades/validaciones.js";


export function menuPrincipal(): void {

    while (true) {

        console.clear();

        separador();

        console.log(
            "          ¡HOLA! ¿QUÉ DESEAS HACER HOY?"
        );

        separador();

        console.log();
        console.log(" [1] Ver Mis Tareas.");
        console.log(" [2] Buscar una Tarea.");
        console.log(" [3] Agregar una Tarea.");
        console.log(" [0] Salir.");
        console.log();

        separador();

        const entrada = readlineSync.question("> ");
        const opcion = leerOpcionNumerica(entrada);

        if (opcion === null) {

            opcionInvalida();
            continue;
        }

        switch (opcion) {

            case 1:
                verTareas();
                break;

            case 2:
                buscarTarea();
                break;

            case 3:
                agregarTarea();
                break;

            case 0:
                console.clear();
                console.log();
                console.log("- ¡Volvé Pronto! :(");
                console.log();
                return;

            default:
                opcionInvalida();
        }
    }
}