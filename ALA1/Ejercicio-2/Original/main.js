import { calcular } from "./calculadora.js";

const numero1 = Number(prompt("Ingrese el primer operando:"));
const operador = prompt("Ingrese el operador (+, -, *, /):");
const numero2 = Number(prompt("Ingrese el segundo operando:"));

try {
    const resultado = calcular(operador, numero1, numero2);

    console.log(`Resultado: ${resultado}`);
    alert(`Resultado: ${resultado}`);
} catch (error) {
    console.error(error.message);
    alert(error.message);
}