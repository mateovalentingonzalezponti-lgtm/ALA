import {
    sumar,
    restar,
    multiplicar,
    dividir
} from "./operaciones.js";

export function calcular(operador, operandos) {
    if (operandos.length < 2) {
        throw new Error("Se necesitan al menos dos operandos.");
    }

    let resultado = operandos[0];

    for (let i = 1; i < operandos.length; i++) {
        switch (operador) {
            case "+":
                resultado = sumar(resultado, operandos[i]);
                break;

            case "-":
                resultado = restar(resultado, operandos[i]);
                break;

            case "*":
                resultado = multiplicar(resultado, operandos[i]);
                break;

            case "/":
                resultado = dividir(resultado, operandos[i]);
                break;

            default:
                throw new Error("Operador no válido.");
        }
    }
    return resultado;
}