import {
    sumar,
    restar,
    multiplicar,
    dividir
} from "./operaciones.js";

export function calcular(operador, numero1, numero2) {
    switch (operador) {
        case "+":
            return sumar(numero1, numero2);

        case "-":
            return restar(numero1, numero2);

        case "*":
            return multiplicar(numero1, numero2);

        case "/":
            return dividir(numero1, numero2);

        default:
            throw new Error("Operador no válido.");
    }
}