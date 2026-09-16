// Un menú muy simple para agregar tareas, se solicitan los datos al usuario y se valida lo ingresado.
import readlineSync from "readline-sync";

import { crearTarea } from "../modelos/tarea.js";
import { misTareas } from "../datos/tareas.js";

import {
    separador,
    tareaGuardada,
    pausar
} from "../utilidades/mensajes.js";

import {
    tituloValido,
    descripcionValida,
    estadoValido,
    dificultadValida
} from "../utilidades/validaciones.js";

// Formulario para crear una nueva tarea
export function agregarTarea() {

    console.clear();

    separador();
    console.log("           ESTÁS CREANDO UNA NUEVA TAREA");
    separador();

    let titulo = readlineSync.question(
        "- Ingrese el título de la tarea (Máx. 100 carac.):\n> "
    );

    titulo = titulo.trim();

    if (!tituloValido(titulo)) {

        separador();
        console.log("- El título es obligatorio y debe");
        console.log("tener como máximo 100 caracteres.");
        separador();

        pausar();
        return;
    }

    separador();
    let descripcion = readlineSync.question(
        "- Ingrese la descripción (Máx. 500 carac.):\n> "
    );

    if (!descripcionValida(descripcion)) {

        separador();
        console.log("- La descripción supera los 500 caracteres.");
        separador();

        pausar();
        return;
    }

    separador();
    console.log("Seleccione el estado de la tarea:\n");

    console.log(" [1] Pendiente");
    console.log(" [2] En Curso");
    console.log(" [3] Terminada");
    console.log(" [4] Cancelada");

    separador();

    const estadoIngresado = readlineSync.question("> ");

    if (!estadoValido(estadoIngresado)) {
        separador();
        console.log("- Estado inválido. No se creó la tarea.");
        separador();

        pausar();
        return;
    }

    const estado = Number(estadoIngresado);

    separador();
    console.log("Seleccione la dificultad de la tarea:\n");

    console.log(" [1] Fácil");
    console.log(" [2] Medio");
    console.log(" [3] Difícil");

    separador();

    const dificultadIngresada = readlineSync.question("> ");

    if (!dificultadValida(dificultadIngresada)) {

        separador();
        console.log("- Dificultad inválida. No se creó la tarea.");
        separador();

        pausar();
        return;
    }

    const dificultad = Number(dificultadIngresada);

    separador();
    console.log("Ingrese la fecha de vencimiento.");
    console.log("(Formato: dd/mm/aaaa)");
    console.log("Deje vacío si no desea establecer una fecha.");

    separador();

    const vencimientoIngresado = readlineSync.question("> ");

    let vencimiento = null;

    if (vencimientoIngresado.trim() !== "") {
        vencimiento = vencimientoIngresado.trim();
    }


    const nuevaTarea = crearTarea(titulo, descripcion);

    // Sobrescribimos los valores ingresados por el usuario
    nuevaTarea.estado = estado;
    nuevaTarea.dificultad = dificultad;
    nuevaTarea.vencimiento = vencimiento;

    misTareas.push(nuevaTarea);
    separador();
    tareaGuardada(nuevaTarea.estado);

    pausar();
}