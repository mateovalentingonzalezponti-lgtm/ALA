// Creamos esto porque los mensajes se repiten en varias partes del código y es mejor tenerlos centralizados para poder modificarlos más fácilmente.
export function separador() {
    console.log("==================================================");
}

export function pausar() {
    prompt("\nPresioná ENTER para continuar...");
}

export function opcionInvalida() {
    console.log("\n- Opción inválida. Intenta de nuevo.\n");
}

export function tareaGuardada() {
    //separador();
    console.log("- ¡Tarea agregada con éxito en estado: PENDIENTE!");
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