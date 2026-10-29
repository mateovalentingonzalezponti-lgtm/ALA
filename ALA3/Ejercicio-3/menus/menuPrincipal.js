import readlineSync from "readline-sync";

import { verTareas } from "./verTareas.js";
import { buscarTarea } from "./buscarTareas.js";
import { agregarTarea } from "./agregarTarea.js";

import {
    separador,
    opcionInvalida,
    pausar
} from "../utilidades/mensajes.js";

export function menuPrincipal() {
    let opcion = -1;

    while (opcion !== 0) {
        console.clear();

        separador();

        console.log("          ¡HOLA! ¿QUÉ DESEAS HACER HOY?");

        separador();

        console.log("\n [1] Ver Mis Tareas.");
        console.log(" [2] Buscar una Tarea.");
        console.log(" [3] Agregar una Tarea.");
        console.log(" [0] Salir.\n");

        separador();

        opcion = readlineSync.question("> ");

        if (!Number.isInteger(Number(opcion))) {
            opcionInvalida();
            pausar();
            continue;
        }

        opcion = Number(opcion);

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
                console.log("\n- Volvé Pronto! :(\n");
                break;

            default:
                opcionInvalida();
                pausar();
        }
    }
}