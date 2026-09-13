export function sumar(numero1, numero2) {
    return numero1 + numero2;
}

export function restar(numero1, numero2) {
    return numero1 - numero2;
}

export function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}

export function dividir(numero1, numero2) {
    if (numero2 === 0) {
        throw new Error("No se puede dividir por cero.");
    }
    return numero1 / numero2;
}