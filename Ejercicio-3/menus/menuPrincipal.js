// Menú Principal del gestor de tareas, acá es donde se presentan las opciones principales al usuario.
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

        opcion = prompt("Eliga el número de la opción deseada: ");

        // Validamos que se haya ingresado una opción numérica
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

                console.log("\n- Preciona F5 para que aparezca la lista\n\n");

                break;

            default:
                opcionInvalida();
                pausar();
        }
    }
}