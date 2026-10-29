import readlineSync from "readline-sync";

// Creamos esto porque los mensajes se repiten en varias partes del código
// y es mejor tenerlos centralizados para poder modificarlos más fácilmente.
export function separador() {
    console.log("==================================================");
}

export function pausar() {
    readlineSync.question("\nPresioná ENTER para continuar...");
}

export function opcionInvalida() {
    separador();
    console.log("- Opción inválida. Intenta de nuevo.");
    separador();
}

export function tareaGuardada(estado) {
    const estados = {
        1: "PENDIENTE",
        2: "EN CURSO",
        3: "TERMINADA",
        4: "CANCELADA"
    };

    console.log(
        `- ¡Tarea agregada con éxito en estado: ${estados[estado]}!`
    );

    separador();
}

export function tareaEliminada() {
    //separador();
    console.log("- ¡Tarea Eliminada con Éxito!");
    separador();
}

export function modificacionExitosa(campo) {
    //separador();
    console.log(`- ¡${campo} actualizado con éxito!`);
    separador();
}