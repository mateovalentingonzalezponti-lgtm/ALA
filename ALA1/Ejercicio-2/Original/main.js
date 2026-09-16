import readlineSync from "readline-sync";
import { calcular } from "./calculadora.js";

console.clear();
const numero1 = Number(
    readlineSync.question("Ingrese el primer operando: ")
);

const operador = readlineSync.question(
    "Ingrese el operador (+, -, *, /): "
);

const numero2 = Number(
    readlineSync.question("Ingrese el segundo operando: ")
);

try {
    const resultado = calcular(operador, numero1, numero2);

    console.log(`Resultado: ${resultado}`);
} catch (error) {
    console.error(error.message);
}