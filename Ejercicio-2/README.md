# Ejercicio 2 — Calculadora

## Consigna

Construir una calculadora que pueda resolver las 4 operaciones básicas:

- Suma
- Resta
- Multiplicación
- División

La calculadora debe limitarse a operar con un operador y dos operandos, los cuales debe pedir a la persona usuaria.

### Bonus

Modificar el código para que la calculadora pueda operar con cualquier cantidad de operandos.

---

# Estructura del proyecto

El ejercicio está dividido en dos implementaciones:

- `Original`: resuelve la consigna utilizando únicamente dos operandos.
- `Bonus`: extiende la calculadora para permitir cualquier cantidad de operandos.

La estructura del proyecto es la siguiente:

```text
Ejercicio-2/
│
├── Original/
│   ├── index.html
│   ├── main.js
│   ├── calculadora.js
│   └── operaciones.js
│
├── Bonus/
│   ├── index.html
│   ├── main.js
│   ├── calculadora.js
│   └── operaciones.js
│
└── README.md
```

---

# Parte 1 — Implementación Original

La implementación original cumple con la consigna principal: permite realizar una operación utilizando un operador y exactamente dos operandos.

## `Original/operaciones.js`

Este archivo contiene las funciones encargadas de realizar las operaciones matemáticas básicas.

```js
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
```

La función `dividir()` incluye una validación para evitar la división por cero.

---

## `Original/calculadora.js`

Este archivo contiene la lógica principal de la calculadora.

Recibe el operador y los dos operandos y determina qué operación debe realizar.

```js
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
```

Se utiliza un `switch` para seleccionar la operación correspondiente según el operador ingresado.

---

## `Original/main.js`

Este archivo se encarga de interactuar con la persona usuaria.

Solicita los dos operandos y el operador mediante `prompt()`.

```js
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
```

El resultado se muestra tanto en la consola del navegador como mediante un `alert()`.

---

## `Original/index.html`

El archivo HTML permite ejecutar el programa en el navegador y cargar el módulo principal de JavaScript.

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora - Ejercicio 2</title>
</head>
<body>

    <h1>Calculadora</h1>

    <script type="module" src="./main.js"></script>

</body>
</html>
```

---

# Parte 2 — Bonus

La implementación Bonus modifica la calculadora original para permitir realizar operaciones con cualquier cantidad de operandos.

En lugar de solicitar únicamente dos números, primero se solicita la cantidad de operandos que se desean ingresar.

---

## `Bonus/operaciones.js`

Las operaciones matemáticas se mantienen separadas en este archivo, permitiendo reutilizar las mismas funciones.

```js
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
```

---

## `Bonus/calculadora.js`

En esta versión, la función `calcular()` recibe un operador y un arreglo de operandos.

La operación se realiza de forma secuencial utilizando todos los operandos ingresados.

```js
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
```

El resultado comienza tomando el primer operando y luego se aplica la operación correspondiente con cada uno de los siguientes operandos.

---

## `Bonus/main.js`

Este archivo solicita el operador y la cantidad de operandos.

Luego utiliza un ciclo `for` para solicitar cada uno de los valores.

```js
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
```

De esta manera, la cantidad de operandos ya no está limitada a dos.

---

## `Bonus/index.html`

El archivo HTML permite ejecutar la versión Bonus de la calculadora.

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora Bonus - Ejercicio 2</title>
</head>
<body>

    <h1>Calculadora - Bonus</h1>

    <script type="module" src="./main.js"></script>

</body>
</html>
```

---

# Modularización

El programa está dividido en diferentes archivos para separar responsabilidades.

### `operaciones.js`

Contiene las operaciones matemáticas:

- `sumar()`
- `restar()`
- `multiplicar()`
- `dividir()`

### `calculadora.js`

Contiene la lógica que determina qué operación realizar.

### `main.js`

Se encarga de interactuar con la persona usuaria y solicitar los datos.

### `index.html`

Permite ejecutar el programa desde el navegador.

La implementación está modularizada mediante módulos de JavaScript (`import` y `export`), separando la entrada de datos, la lógica de la calculadora y las operaciones matemáticas.

---

# Manejo de errores

Se contemplan diferentes situaciones que pueden generar errores durante la ejecución.

## Operador inválido

Si se ingresa un operador diferente de:

```text
+  -  *  /
```

se muestra el mensaje:

```text
Operador no válido.
```

## División por cero

Si se intenta dividir por cero, se genera un error:

```text
No se puede dividir por cero.
```

## Cantidad insuficiente de operandos

En la versión Bonus se requiere un mínimo de dos operandos.

Si se ingresan menos de dos, se muestra:

```text
Se necesitan al menos dos operandos.
```

---

# Ejemplos de funcionamiento

## Versión Original

Entrada:

```text
Primer operando: 10
Operador: +
Segundo operando: 5
```

Resultado:

```text
15
```

Otro ejemplo:

```text
Primer operando: 20
Operador: *
Segundo operando: 3
```

Resultado:

```text
60
```

---

## Versión Bonus

Por ejemplo, utilizando el operador `+` y cinco operandos:

```text
Operador: +
Cantidad de operandos: 5

Operando 1: 10
Operando 2: 20
Operando 3: 5
Operando 4: 15
Operando 5: 50
```

Resultado:

```text
100
```

También se pueden realizar operaciones como:

```text
100 - 20 - 10 - 5
```

obteniendo:

```text
65
```

---

# Ejecución

Para ejecutar cualquiera de las dos versiones se debe abrir el archivo correspondiente `index.html` utilizando un servidor local, por ejemplo mediante la extensión **Live Server** de Visual Studio Code.

Se debe ejecutar:

```text
Original/index.html
```

para probar la implementación original.

O:

```text
Bonus/index.html
```

para probar la implementación Bonus.

---

# Conclusión

En este ejercicio se implementó una calculadora capaz de realizar las cuatro operaciones matemáticas básicas utilizando JavaScript.

La primera versión cumple con la consigna original, trabajando con dos operandos.

Posteriormente, en la versión Bonus, se amplió la funcionalidad para permitir una cantidad variable de operandos mediante arreglos y ciclos.

Además, el programa fue organizado de manera modular, separando las operaciones matemáticas, la lógica de la calculadora y la interacción con la persona usuaria. Esto permite obtener un código más ordenado, reutilizable y fácil de mantener.