import readlineSync from "readline-sync";

import { misTareas } from "../datos/tareas.js";
import { detalleTarea } from "./detalleTareas.js";

import {
    separador,
    opcionInvalida,
    pausar
} from "../utilidades/mensajes.js";

// Menú para elegir qué tareas desea visualizar la persona
export function verTareas() {

    let opcionFiltro = -1;

    while (opcionFiltro !== 0) {

        console.clear();

        separador();
        console.log("             ¿QUÉ TAREAS DESEAS VER?");
        separador();

        console.log("\n [1] Ver Todas las Tareas.");
        console.log(" [2] Ver Pendientes.");
        console.log(" [3] Ver En Curso.");
        console.log(" [4] Ver Terminadas.");
        console.log(" [0] Volver al Menú Principal.\n");

        separador();

        const entrada = readlineSync.question("> ");

        // Validamos que se haya ingresado un número
        if (!Number.isInteger(Number(entrada))) {
            opcionInvalida();
            pausar();
            continue;
        }

        opcionFiltro = Number(entrada);

        if (opcionFiltro === 0) {
            return;
        }

        if (opcionFiltro < 1 || opcionFiltro > 4) {
            opcionInvalida();
            pausar();
            continue;
        }

        mostrarTareas(opcionFiltro);
    }
}


function mostrarTareas(opcionFiltro) {

    console.clear();

    let textoFiltro;

    switch (opcionFiltro) {

        case 1:
            textoFiltro = "Todas";
            break;

        case 2:
            textoFiltro = "Pendientes";
            break;

        case 3:
            textoFiltro = "En Curso";
            break;

        case 4:
            textoFiltro = "Terminadas";
            break;
    }

    separador();
    console.log(`           LISTA DE TAREAS: ${textoFiltro}`);
    separador();

    if (misTareas.length === 0) {

        console.log("\n- No hay Tareas Registradas en el");
        console.log("Sistema Todavía.\n");

        separador();

        pausar();
        return;
    }


    const tareasEncontradas = misTareas
        .map((tarea, indice) => ({
            tarea: tarea,
            indice: indice
        }))
        .filter(({ tarea }) => {

            // Opción 1: mostrar todas
            if (opcionFiltro === 1) {
                return true;
            }

            // Opciones 2, 3 y 4 corresponden a los estados 1, 2 y 3
            return tarea.estado === opcionFiltro - 1;
        });


    if (tareasEncontradas.length === 0) {

        console.log("\n- No se Encontraron Tareas con el");
        console.log("Estado Seleccionado.\n");

        separador();

        pausar();
        return;
    }


    tareasEncontradas.forEach(({ tarea }, posicion) => {

        let texto = ` [${posicion + 1}] ${tarea.titulo}`;

        if (tarea.estado === 4) {
            texto += " (Cancelada)";
        }

        console.log(texto);
    });

    separador();

    console.log("\n [X] Presioná el Número de la Tarea");
    console.log(" para ver el Detalle");
    console.log("\n [0] Volver al Menú Anterior\n");

    separador();

    const seleccion = readlineSync.question("> ");

    if (seleccion === "0") {
        return;
    }

    const numero = Number(seleccion);

    // Validamos contra la cantidad de tareas mostradas
    if (
        !Number.isInteger(numero) ||
        numero < 1 ||
        numero > tareasEncontradas.length
    ) {
        separador();
        console.log("- Ese Número de Tarea no existe en la Lista.");
        separador();
        
        pausar();
        return;
    }

    // Obtenemos el índice real dentro de misTareas
    const indiceReal = tareasEncontradas[numero - 1].indice;

    detalleTarea(indiceReal);
}