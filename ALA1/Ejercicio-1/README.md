# Ejercicio 1 — JavaScript y el paradigma de programación estructurada

## Introducción

JavaScript es un lenguaje de programación de propósito general y multiparadigma. Permite utilizar diferentes enfoques de programación, entre ellos la programación estructurada.

Para este trabajo se analizará **JavaScript acotado al paradigma de programación estructurada**, dejando de lado las características propias de otros paradigmas.

La programación estructurada permite construir soluciones utilizando principalmente tres estructuras de control:

* **Secuencia:** las instrucciones se ejecutan en un determinado orden.
* **Selección:** se decide qué instrucciones ejecutar según una condición.
* **Iteración:** se repiten instrucciones mientras se cumpla una condición.

Por ejemplo:

```javascript
let numero = 10;

if (numero > 0) {
    console.log("El número es positivo");
}

for (let i = 1; i <= 3; i++) {
    console.log(i);
}
```

En este ejemplo aparecen una asignación, una estructura condicional y una estructura repetitiva, elementos característicos de la programación estructurada.

---

# Parte A — JavaScript según los cuatro componentes de Kuhn

Según el material de la asignatura, un paradigma puede analizarse mediante cuatro componentes:

1. Generalizaciones simbólicas.
2. Creencias de la comunidad de profesionales.
3. Valores.
4. Ejemplares.

---

## 1. Generalizaciones simbólicas

Las generalizaciones simbólicas corresponden a las reglas o leyes escritas que determinan cómo se construyen los programas.

En JavaScript estas reglas están definidas por el estándar **ECMAScript**, que especifica la sintaxis y la semántica del lenguaje.

Dentro del paradigma estructurado, JavaScript proporciona las construcciones necesarias para trabajar con secuencias, decisiones, repeticiones y funciones.

### Variables y constantes

JavaScript permite declarar variables mediante `let` y constantes mediante `const`.

```javascript
let edad = 19;
const nombre = "Mateo";

console.log(nombre);
console.log(edad);
```

### Secuencia

Las instrucciones pueden ejecutarse secuencialmente:

```javascript
let precio = 1000;
let cantidad = 3;
let total = precio * cantidad;

console.log(total);
```

Primero se asigna el precio, luego la cantidad y finalmente se calcula el total.

### Selección

JavaScript permite utilizar estructuras condicionales como `if`, `else` y `switch`.

```javascript
let edad = 20;

if (edad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}
```

### Iteración

También posee estructuras repetitivas como `for`, `while` y `do...while`.

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

### Funciones

Las funciones permiten dividir un problema en unidades más pequeñas y reutilizables.

```javascript
function sumar(a, b) {
    return a + b;
}

let resultado = sumar(5, 3);

console.log(resultado);
```

Por lo tanto, JavaScript dispone de las construcciones sintácticas y semánticas necesarias para desarrollar programas siguiendo los principios de la programación estructurada.

---

## 2. Creencias de la comunidad de profesionales

Las creencias de la comunidad representan las maneras particulares de proceder que los profesionales consideran útiles o fructíferas.

En el caso de JavaScript utilizado de manera estructurada, pueden destacarse las siguientes:

### Modularización

Se considera conveniente dividir un problema complejo en funciones pequeñas y específicas.

```javascript
function calcularPromedio(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

let promedio = calcularPromedio(8, 7, 9);

console.log(promedio);
```

La función permite separar una tarea concreta del resto del programa.

### Reutilización

Una función puede utilizarse varias veces sin tener que repetir el mismo código.

```javascript
function cuadrado(numero) {
    return numero * numero;
}

console.log(cuadrado(4));
console.log(cuadrado(8));
console.log(cuadrado(10));
```

### Evitar complejidad innecesaria

Dentro de la programación estructurada se busca que el flujo del programa pueda comprenderse fácilmente mediante secuencias, decisiones, iteraciones y funciones.

Por ejemplo:

```javascript
function esMayorDeEdad(edad) {
    return edad >= 18;
}

let edad = 20;

if (esMayorDeEdad(edad)) {
    console.log("Puede ingresar");
} else {
    console.log("No puede ingresar");
}
```

En lugar de concentrar toda la lógica en un único bloque, el problema se divide en una función específica.

---

## 3. Valores

Los valores representan aquello que la comunidad considera importante al momento de desarrollar programas.

En JavaScript utilizado bajo el paradigma estructurado pueden destacarse:

* **Legibilidad:** que el código pueda ser comprendido fácilmente.
* **Simplicidad:** evitar soluciones innecesariamente complejas.
* **Modularidad:** dividir el programa en partes independientes.
* **Reutilización:** evitar repetir código cuando puede utilizarse una función.
* **Mantenibilidad:** facilitar futuras modificaciones y correcciones.
* **Claridad del flujo de ejecución:** utilizar estructuras de control comprensibles.

Por ejemplo, un programa puede calcular el promedio de varias notas mediante una función:

```javascript
function calcularPromedio(notas) {
    let suma = 0;

    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }

    return suma / notas.length;
}

let notas = [8, 7, 9, 10];

console.log(calcularPromedio(notas));
```

Este ejemplo representa varios de los valores mencionados: la tarea está encapsulada en una función, se utiliza una estructura repetitiva clara y el código puede reutilizarse con diferentes listas de notas.

---

## 4. Ejemplares

Los ejemplares representan los problemas que se consideran adecuados para ser resueltos mediante el paradigma y las soluciones utilizadas como modelos.

Algunos problemas que pueden resolverse mediante JavaScript estructurado son:

* Calcular promedios.
* Buscar el mayor o menor valor.
* Validar datos.
* Procesar listas.
* Realizar cálculos matemáticos.
* Implementar menús.
* Contar elementos.
* Clasificar información.

### Ejemplo: buscar el mayor número

```javascript
function obtenerMayor(numeros) {
    let mayor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }

    return mayor;
}

let numeros = [15, 8, 23, 4, 19];

console.log(obtenerMayor(numeros));
```

El problema consiste en encontrar el mayor elemento de una lista.

La solución utiliza:

* Una función para modularizar el problema.
* Una variable para mantener el estado.
* Un ciclo `for` para recorrer los elementos.
* Una condición `if` para comparar los valores.

Este tipo de problema constituye un ejemplar adecuado para mostrar cómo el paradigma estructurado permite transformar un problema en una secuencia organizada de operaciones.

---

# Parte B — Criterios para la elección de un lenguaje

## 1. ¿Tiene una sintaxis y una semántica bien definida? ¿Existe documentación oficial?

**Sí.**

JavaScript posee una sintaxis y una semántica formalmente definidas mediante el estándar ECMAScript.

La sintaxis establece cómo deben escribirse las instrucciones, mientras que la semántica establece qué significa cada construcción y cómo debe comportarse.

Por ejemplo:

```javascript
let edad = 19;

if (edad >= 18) {
    console.log("Mayor de edad");
}
```

La estructura `if` tiene una sintaxis definida y una semántica determinada: evalúa una expresión lógica y ejecuta un bloque si la condición resulta verdadera.

La especificación oficial de ECMAScript es mantenida por **ECMA International a través del comité TC39**.

Además, existe documentación de referencia ampliamente utilizada como **MDN Web Docs**.

**Conclusión:** JavaScript cumple con este criterio porque posee una especificación formal y documentación técnica.

---

# 2. ¿Es posible comprobar el código producido en ese lenguaje?

**Sí, aunque con ciertas limitaciones.**

El código JavaScript puede ser comprobado mediante:

* Análisis sintáctico.
* Linters.
* Análisis estático.
* Pruebas unitarias.
* Pruebas de integración.
* Depuración.
* Ejecución de casos de prueba.

Por ejemplo, un error sintáctico puede detectarse al interpretar el programa:

```javascript
if (edad >= 18 {
    console.log("Mayor de edad");
}
```

El código anterior contiene un error porque falta un paréntesis `)`.

Sin embargo, JavaScript posee tipado dinámico, por lo que algunos errores solamente pueden detectarse durante la ejecución.

Por ejemplo:

```javascript
let numero = 10;

numero = "diez";
```

El lenguaje permite cambiar el tipo asociado a la variable.

También existen herramientas como ESLint que permiten detectar problemas potenciales antes de ejecutar el programa.

**Conclusión:** JavaScript permite comprobar el código mediante diferentes herramientas y técnicas, aunque no todos los errores pueden detectarse antes de la ejecución.

---

# 3. ¿Es confiable?

**JavaScript puede considerarse un lenguaje confiable, aunque su confiabilidad depende de cómo se utilice.**

Cuenta con una especificación formal, motores de ejecución ampliamente utilizados y mecanismos para manejar errores.

Por ejemplo:

```javascript
try {
    let resultado = 10 / 0;

    if (!Number.isFinite(resultado)) {
        throw new Error("Resultado no válido");
    }
} catch (error) {
    console.log("Se produjo un error:", error.message);
}
```

El lenguaje proporciona mecanismos como `try`, `catch` y `finally` para controlar determinadas situaciones excepcionales.

Sin embargo, JavaScript también posee características que pueden producir resultados inesperados si no se conocen correctamente sus reglas.

Por ejemplo:

```javascript
console.log(5 + "5");
```

El resultado es:

```text
55
```

Esto ocurre porque JavaScript realiza conversión de tipos en determinadas operaciones.

Por lo tanto, la confiabilidad del programa no depende solamente del lenguaje, sino también del conocimiento de sus reglas, las buenas prácticas y las pruebas realizadas.

**Conclusión:** JavaScript es confiable para desarrollar software, pero requiere buenas prácticas y pruebas para reducir errores derivados de su flexibilidad.

---

# 4. ¿Es ortogonal?

JavaScript presenta un **grado de ortogonalidad moderado**, pero no es completamente ortogonal.

Según el criterio estudiado, un lenguaje es ortogonal cuando sus componentes pueden combinarse de forma independiente y mantienen un comportamiento uniforme en diferentes contextos.

JavaScript presenta algunas situaciones donde esto no ocurre completamente, especialmente debido a la conversión automática de tipos.

Por ejemplo:

```javascript
console.log(2 + 3);
console.log(2 + "3");
```

Los resultados son diferentes:

```text
5
23
```

Otro ejemplo es la diferencia entre `==` y `===`:

```javascript
console.log(5 == "5");   // true
console.log(5 === "5");  // false
```

El operador `==` permite conversión de tipos, mientras que `===` exige igualdad tanto de valor como de tipo.

Estas características aportan flexibilidad, pero agregan casos especiales que el programador debe conocer.

**Conclusión:** JavaScript posee una ortogonalidad moderada, pero su coerción de tipos y determinadas excepciones hacen que no sea completamente ortogonal.

---

# 5. ¿Cuáles son sus características de consistencia y uniformidad?

JavaScript posee una **consistencia y uniformidad aceptables**, especialmente en sus estructuras fundamentales de programación.

Por ejemplo, las estructuras de control utilizan una sintaxis relativamente uniforme:

```javascript
if (condicion) {
    // instrucciones
}

for (let i = 0; i < 10; i++) {
    // instrucciones
}

while (condicion) {
    // instrucciones
}
```

Sin embargo, el lenguaje ha evolucionado durante muchos años y mantiene características de diferentes etapas de su desarrollo.

Por ejemplo, existen diferentes formas de declarar variables:

```javascript
var antiguo = 10;
let moderno = 20;
const constante = 30;
```

Estas construcciones no son completamente equivalentes y presentan diferencias en cuanto a alcance y comportamiento.

También existen diferentes formas de definir funciones:

```javascript
function sumar(a, b) {
    return a + b;
}
```

y:

```javascript
const sumar = (a, b) => a + b;
```

Esto demuestra que JavaScript permite expresar conceptos similares mediante diferentes construcciones.

**Conclusión:** JavaScript mantiene una sintaxis bastante uniforme en sus estructuras básicas, pero su evolución histórica generó cierta diversidad de mecanismos para realizar tareas similares.

---

# 6. ¿Es extensible?

**Sí.**

JavaScript puede extenderse mediante bibliotecas, módulos y APIs proporcionadas por el entorno de ejecución.

El lenguaje permite crear módulos y reutilizar código mediante `export` e `import`.

Por ejemplo:

### Archivo `matematica.js`

```javascript
export function sumar(a, b) {
    return a + b;
}

export function restar(a, b) {
    return a - b;
}
```

### Archivo `app.js`

```javascript
import { sumar, restar } from "./matematica.js";

console.log(sumar(10, 5));
console.log(restar(10, 5));
```

De esta manera, un programa puede dividirse en diferentes módulos.

Además, los entornos donde se ejecuta JavaScript pueden proporcionar APIs adicionales.

Por ejemplo, los navegadores proporcionan APIs relacionadas con páginas web y el DOM, mientras que Node.js proporciona APIs orientadas al entorno del servidor.

**Conclusión:** JavaScript es altamente extensible mediante módulos, bibliotecas y APIs.

---

# 7. ¿Hay subconjuntos de ese lenguaje?

**Sí.**

Un subconjunto de un lenguaje utiliza solamente una parte de sus características.

JavaScript puede restringirse a utilizar únicamente las construcciones necesarias para resolver determinado tipo de problemas.

Por ejemplo, para trabajar exclusivamente con programación estructurada podemos utilizar:

```javascript
let numero = 10;

if (numero > 0) {
    for (let i = 0; i < numero; i++) {
        console.log(i);
    }
}
```

En este caso no es necesario utilizar clases, objetos, herencia u otras características propias de otros paradigmas.

También existen subconjuntos específicos del lenguaje desarrollados con determinados objetivos. Un ejemplo histórico es **asm.js**, que define un subconjunto de JavaScript orientado a producir código altamente predecible y eficiente.

**Conclusión:** JavaScript puede utilizarse mediante subconjuntos de sus características y existen ejemplos concretos de subconjuntos definidos con objetivos específicos.

---

# 8. ¿El código producido es transportable?

**Sí, JavaScript presenta un alto grado de transportabilidad.**

Una de las principales características de JavaScript es que puede ejecutarse en diferentes sistemas y dispositivos siempre que exista una implementación compatible.

Por ejemplo, un programa que utilice solamente características estándar del lenguaje puede ejecutarse en diferentes motores de JavaScript:

```javascript
function sumar(a, b) {
    return a + b;
}

console.log(sumar(10, 20));
```

El código anterior no depende de una API específica de un sistema operativo.

Sin embargo, la transportabilidad puede disminuir cuando se utilizan APIs propias de un determinado entorno.

Por ejemplo:

```javascript
document.getElementById("titulo");
```

Esta instrucción depende de una API proporcionada por los navegadores.

Por otro lado, código específico de Node.js puede depender de APIs que no están disponibles directamente en un navegador.

Por lo tanto, es importante diferenciar entre el lenguaje **ECMAScript** y las APIs proporcionadas por cada entorno.

**Conclusión:** JavaScript posee una alta transportabilidad cuando se utilizan características estándar de ECMAScript. La portabilidad disminuye cuando el programa depende de APIs específicas de un entorno.

---

# Conclusión general

El análisis de JavaScript restringido al paradigma de programación estructurada permite observar que el lenguaje posee las características necesarias para desarrollar soluciones mediante **secuencia, selección, iteración y modularización**.

Desde la perspectiva de los cuatro componentes de Kuhn, JavaScript puede analizarse mediante sus reglas formales, las prácticas consideradas útiles por la comunidad, los valores asociados al desarrollo de software y los problemas que pueden utilizarse como ejemplares del paradigma.

Respecto de los criterios para elegir un lenguaje, JavaScript presenta:

| Criterio                            | Evaluación                          |
| ----------------------------------- | ----------------------------------- |
| Sintaxis y semántica bien definidas | Sí                                  |
| Documentación oficial               | Sí                                  |
| Comprobabilidad                     | Sí, con ciertas limitaciones        |
| Confiabilidad                       | Alta, dependiendo de su utilización |
| Ortogonalidad                       | Moderada                            |
| Consistencia y uniformidad          | Buena, aunque no perfecta           |
| Generalidad                         | Alta                                |
| Extensibilidad                      | Alta                                |
| Subconjuntos                        | Sí                                  |
| Transportabilidad                   | Alta                                |

En conclusión, JavaScript resulta adecuado para implementar soluciones estructuradas y presenta ventajas importantes como su disponibilidad, flexibilidad, extensibilidad y transportabilidad.

Al mismo tiempo, algunas características como el tipado dinámico, la coerción automática de tipos y la coexistencia de diferentes mecanismos para realizar tareas similares pueden introducir complejidad y reducir la uniformidad del lenguaje.

Por esta razón, el conocimiento de la sintaxis y semántica de JavaScript, junto con el uso de buenas prácticas, herramientas de comprobación y pruebas, resulta fundamental para producir programas confiables y mantenibles.

---

# Fuentes

* [ECMAScript Language Specification — ECMA International / TC39](https://tc39.es/ecma262/)
* [MDN Web Docs — JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [MDN — JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
* [MDN — JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
* [MDN — Strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
* [asm.js — Specification](https://asmjs.org/spec/latest/)
