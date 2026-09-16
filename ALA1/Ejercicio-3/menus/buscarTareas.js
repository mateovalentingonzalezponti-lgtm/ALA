import readlineSync from "readline-sync";

import { misTareas } from "../datos/tareas.js";
import { detalleTarea } from "./detalleTareas.js";

import {
    separador,
    pausar
} from "../utilidades/mensajes.js";

// Busca una tarea por título o palabra clave y muestra los resultados
export function buscarTarea() {

    console.clear();

    separador();
    console.log("               BUSCADOR DE TAREAS");
    separador();

    if (misTareas.length === 0) {

        console.log(
            "- No hay Tareas Registradas en el Sistema"
        );

        console.log(
            "para Buscar.\n"
        );

        separador();

        pausar();
        return;
    }

    const criterio = readlineSync.question(
        "Ingrese el título o palabra clave a buscar:\n> "
    );

    if (criterio.trim() === "") {
        return;
    }

    const textoBusqueda = criterio.trim().toLowerCase();

    console.clear();

    separador();
    console.log(
        `        RESULTADOS DE BÚSQUEDA: "${criterio}"`
    );
    separador();


    const tareasEncontradas = misTareas
        .map((tarea, indice) => ({
            tarea: tarea,
            indice: indice
        }))
        .filter(({ tarea }) => {

            return tarea.titulo
                .toLowerCase()
                .includes(textoBusqueda);
        });


    if (tareasEncontradas.length === 0) {

        console.log(
            "- No se Encontraron Tareas que Coincidan"
        );

        console.log(
            "con la Búsqueda.\n"
        );

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

    console.log(
        " [X] Presioná el Número de la Tarea"
    );

    console.log(
        " para ver el Detalle\n"
    );

    console.log(
        " [0] Volver al Menú Principal"
    );

    separador();

    const seleccion = readlineSync.question("> ");

    if (seleccion === "0") {
        return;
    }

    const numero = Number(seleccion);

    if (
        !Number.isInteger(numero) ||
        numero < 1 ||
        numero > tareasEncontradas.length
    ) {

        console.log(
            "\n- Ese número de opción no existe en los resultados.\n"
        );

        pausar();
        return;
    }

    // Obtenemos el índice real dentro de misTareas
    const indiceReal = tareasEncontradas[numero - 1].indice;

    detalleTarea(indiceReal);
}