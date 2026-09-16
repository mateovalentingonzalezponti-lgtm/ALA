import readlineSync from "readline-sync";
import { calcular } from "./calculadora.js";

console.clear();
const operador = readlineSync.question(
    "Ingrese el operador (+, -, *, /): "
);

const cantidad = Number(
    readlineSync.question("¿Cuántos operandos desea ingresar? ")
);

const operandos = [];

for (let i = 0; i < cantidad; i++) {
    const operando = Number(
        readlineSync.question(`Ingrese el operando ${i + 1}: `)
    );

    operandos.push(operando);
}

try {
    const resultado = calcular(operador, operandos);

    console.log(`Resultado: ${resultado}`);
} catch (error) {
    console.error(error.message);
}