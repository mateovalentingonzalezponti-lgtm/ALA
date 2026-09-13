import { calcular } from "./calculadora.js";

const operador = prompt("Ingrese el operador (+, -, *, /):");
const cantidad = Number(prompt("¿Cuántos operandos desea ingresar?"));

const operandos = [];

for (let i = 0; i < cantidad; i++) {
    const operando = Number(
        prompt(`Ingrese el operando ${i + 1}:`)
    );

    operandos.push(operando);
}

try {
    const resultado = calcular(operador, operandos);

    console.log(`Resultado: ${resultado}`);
    alert(`Resultado: ${resultado}`);
} catch (error) {
    console.error(error.message);
    alert(error.message);
}