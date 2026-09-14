// Metodos de validación para los campos de las tareas, Para poder centralizar la lógica y no repetirla en varias partes del proyecto.
export function estaEnRango(valor, minimo, maximo) {

    const numero = Number(valor);

    return Number.isInteger(numero) &&
           numero >= minimo &&
           numero <= maximo;
}

export function tituloValido(titulo) {

    return titulo.length > 0 &&
           titulo.length <= 100;
}

export function descripcionValida(descripcion) {

    return descripcion.length <= 500;
}

export function estadoValido(estado) {

    return estaEnRango(estado, 1, 4);
}

export function dificultadValida(dificultad) {

    return estaEnRango(dificultad, 1, 3);
}