# Ejercicio 1 — TypeScript y programación estructurada

En este ejercicio se analiza el lenguaje **TypeScript**, teniendo en cuenta solamente sus características relacionadas con el paradigma de **programación estructurada**.

TypeScript es un lenguaje basado en JavaScript que incorpora un sistema de tipos estático y herramientas adicionales para detectar determinados errores durante el desarrollo.

Para este análisis se consideran principalmente las características de TypeScript que pueden utilizarse dentro de la programación estructurada, como variables, tipos, operadores, expresiones, estructuras de control, funciones y módulos.

El análisis se realiza teniendo en cuenta los **cuatro componentes de un paradigma mencionados por Kuhn**:

* Generalización simbólica.
* Creencias de los profesionales.
* Valores.
* Ejemplares.

---

# Parte A

## 1. Generalización simbólica

Las generalizaciones simbólicas son las reglas y elementos que forman parte del lenguaje y permiten expresar los programas.

TypeScript mantiene las principales estructuras de JavaScript y agrega un sistema de tipos que permite describir los datos utilizados por el programa.

Dentro de las características que podemos utilizar en programación estructurada encontramos:

* Variables y constantes.
* Tipos de datos.
* Inferencia de tipos.
* Tipos unión.
* Operadores.
* Expresiones.
* Sentencias.
* Condicionales (`if`, `else`, `switch`).
* Estructuras repetitivas (`for`, `while`, `do...while`).
* Funciones.
* Parámetros y valores de retorno tipados.
* Tipos personalizados mediante `type`.
* Módulos mediante `import` y `export`.
* Reglas de sintaxis.

Por ejemplo, TypeScript permite indicar el tipo de una variable:

```ts
let edad: number = 19;
let nombre: string = "Mateo";
let activo: boolean = true;
```

También permite indicar los tipos que reciben y devuelven las funciones:

```ts
function sumar(a: number, b: number): number {
    return a + b;
}
```

Otra característica son los tipos unión, que permiten establecer que un dato puede tener más de un tipo:

```ts
let resultado: number | string;

resultado = 10;
resultado = "No encontrado";
```

También es posible definir estructuras de datos mediante tipos personalizados:

```ts
type Tarea = {
    titulo: string;
    descripcion: string;
    estado: number;
    dificultad: number;
};
```

En el caso de la programación estructurada, nos interesan principalmente las estructuras de **secuencia, selección y repetición**, además del uso de **funciones** para dividir y organizar el programa.

Por lo tanto, TypeScript puede utilizarse para desarrollar programas estructurados, mientras que su sistema de tipos permite describir con mayor precisión los datos utilizados por esas estructuras.

---

## 2. Creencias de los profesionales

Una característica de TypeScript que suele considerarse una ventaja es su **sistema de tipos estático**, ya que permite detectar determinados errores durante el desarrollo antes de ejecutar el programa.

Por ejemplo:

```ts
let edad: number = 19;

edad = "diecinueve";
```

En este caso, TypeScript puede detectar que se intenta asignar un `string` a una variable declarada como `number`.

Además, TypeScript suele ser valorado por:

* Permitir detectar determinados errores antes de la ejecución.
* Hacer explícita la estructura y el tipo de los datos.
* Mejorar la legibilidad del código.
* Facilitar el mantenimiento de proyectos grandes.
* Permitir definir los parámetros y valores de retorno de las funciones.
* Proporcionar información que puede ser utilizada por los editores de código.
* Facilitar el autocompletado y la navegación dentro del código.
* Permitir modularizar los programas mediante `import` y `export`.
* Mantener compatibilidad con el ecosistema de JavaScript.

Estas características pueden resultar especialmente útiles cuando un programa aumenta su cantidad de código o cuando diferentes personas trabajan sobre el mismo proyecto.

Sin embargo, estas características no significan que TypeScript sea universalmente mejor que otros lenguajes. La utilidad de cada característica depende del proyecto, sus objetivos y las necesidades de los desarrolladores.

---

## 3. Valores

Los valores representan los criterios o características que se consideran importantes al utilizar un lenguaje para desarrollar programas.

En TypeScript pueden destacarse aspectos como:

* La detección temprana de errores.
* La claridad del código.
* La legibilidad.
* La organización.
* La reutilización del código.
* La mantenibilidad.
* La modularización.
* La posibilidad de trabajar con proyectos de mayor tamaño.
* La seguridad proporcionada por el sistema de tipos.

Estos valores no dependen únicamente del lenguaje, sino también de la forma en que los programadores utilizan sus características.

Por ejemplo, TypeScript permite declarar una función de la siguiente manera:

```ts
function crearTarea(titulo: string, estado: number): Tarea {
    // ...
}
```

La declaración permite conocer qué datos espera la función y qué tipo de información devuelve.

Esto puede favorecer la comprensión del código y facilitar su mantenimiento.

---

## 4. Ejemplares

Los ejemplares son ejemplos, soluciones o formas conocidas de resolver problemas que sirven como referencia para resolver situaciones similares.

En programación estructurada pueden considerarse ejemplares:

* Funciones para resolver problemas específicos.
* Algoritmos.
* Estructuras condicionales.
* Estructuras repetitivas.
* Formas de validar datos.
* Métodos para recorrer colecciones.
* Módulos con responsabilidades específicas.

Por ejemplo, una función que recibe datos, los procesa y devuelve un resultado puede utilizarse como modelo para resolver otros problemas similares:

```ts
function calcularPromedio(notas: number[]): number {
    let suma = 0;

    for (const nota of notas) {
        suma += nota;
    }

    return suma / notas.length;
}
```

Este ejemplo combina diferentes elementos de la programación estructurada:

* Una función.
* Una secuencia de instrucciones.
* Una estructura repetitiva.
* Variables.
* Operaciones.
* Un valor de retorno.

De esta manera, una solución conocida puede servir como referencia para construir otras soluciones similares.

---

# Parte B

## 1. ¿Tiene una sintaxis y una semántica bien definida? ¿Existe documentación oficial?

Sí.

TypeScript posee reglas sintácticas definidas y se basa en JavaScript, por lo que gran parte de su comportamiento está relacionado con las reglas de JavaScript.

Además, TypeScript incorpora sus propias reglas relacionadas principalmente con el sistema de tipos y otras características del lenguaje.

Existe documentación oficial de TypeScript donde se explican sus características, sintaxis y funcionamiento.

Entre los recursos oficiales se encuentra la documentación de TypeScript, que incluye conceptos como tipos, funciones, módulos, interfaces y otras características del lenguaje.

Por lo tanto, los programadores cuentan con documentación que permite consultar cómo utilizar las diferentes características del lenguaje.

---

## 2. ¿Es posible comprobar el código producido en ese lenguaje?

Sí.

Una de las principales características de TypeScript es que el código puede ser analizado mediante el compilador de TypeScript.

Por ejemplo, el comando:

```bash
tsc
```

permite comprobar y transformar código TypeScript de acuerdo con la configuración del proyecto.

El sistema de tipos permite detectar determinados problemas antes de ejecutar el programa.

Por ejemplo:

```ts
let edad: number = 19;

edad = "diecinueve";
```

El compilador puede informar que el valor asignado no es compatible con el tipo declarado.

Además del compilador, existen otras herramientas que pueden utilizarse para comprobar el código:

* Editores de código.
* Linters.
* Depuradores.
* Pruebas automatizadas.
* Ejecución del programa.
* Herramientas de análisis estático.

Estas herramientas permiten detectar errores de tipos, problemas de sintaxis, errores de lógica y comportamientos que no coincidan con lo esperado.

---

## 3. ¿Es confiable?

TypeScript puede utilizarse para desarrollar programas confiables, aunque el uso del lenguaje por sí solo no garantiza que un programa sea confiable.

Una de las características que puede contribuir a la confiabilidad es el sistema de tipos, ya que permite detectar determinados errores antes de la ejecución.

También pueden utilizarse:

* Validaciones.
* Funciones.
* Módulos.
* Estructuras de control.
* Manejo de errores.
* Pruebas.

Por ejemplo, en nuestro Gestor de Tareas podemos definir que un estado solamente pueda tener determinados valores:

```ts
type Estado = 1 | 2 | 3 | 4;
```

De esta manera, TypeScript puede detectar asignaciones que no sean compatibles con los valores definidos para ese tipo.

Sin embargo, todavía es responsabilidad del programador diseñar correctamente el programa, validar los datos y realizar las pruebas necesarias.

---

## 4. ¿Es ortogonal?

TypeScript presenta un cierto grado de ortogonalidad porque diferentes características del lenguaje pueden combinarse para construir soluciones.

Por ejemplo, una función puede:

* Recibir parámetros tipados.
* Utilizar variables.
* Utilizar estructuras condicionales.
* Utilizar estructuras repetitivas.
* Trabajar con tipos personalizados.
* Devolver un resultado tipado.

Por ejemplo:

```ts
function obtenerMayores(numeros: number[]): number[] {
    const resultado: number[] = [];

    for (const numero of numeros) {
        if (numero >= 18) {
            resultado.push(numero);
        }
    }

    return resultado;
}
```

En este ejemplo se combinan tipos, funciones, variables, iteración, selección y valores de retorno.

Sin embargo, TypeScript no puede considerarse completamente ortogonal, ya que el lenguaje posee diferentes reglas, casos particulares y características heredadas de JavaScript.

Por lo tanto, podemos hablar de un **cierto grado de ortogonalidad**, pero no de una ortogonalidad absoluta.

---

## 5. ¿Cuáles son sus características de consistencia y uniformidad?

TypeScript mantiene muchas de las características sintácticas y semánticas de JavaScript y agrega reglas relacionadas con su sistema de tipos.

Existe una estructura consistente para declarar tipos:

```ts
let nombre: string;
let edad: number;
let activo: boolean;
```

También se mantiene una estructura uniforme para declarar los tipos de los parámetros y valores de retorno de las funciones:

```ts
function saludar(nombre: string): string {
    return `Hola ${nombre}`;
}
```

Además, los tipos personalizados permiten representar estructuras de datos de manera uniforme:

```ts
type Tarea = {
    titulo: string;
    estado: number;
};
```

Sin embargo, TypeScript mantiene determinadas particularidades de JavaScript para conservar la compatibilidad con su ecosistema.

Por este motivo, aunque presenta características de consistencia y uniformidad, también existen comportamientos y características particulares que deben conocerse al trabajar con el lenguaje.

---

## 6. ¿Es extensible? ¿Hay subconjuntos de ese lenguaje?

Sí, TypeScript permite ampliar los programas mediante la creación de nuevas funciones, tipos, módulos y otras estructuras.

Por ejemplo, podemos crear un tipo específico para representar el estado de una tarea:

```ts
type Estado = 1 | 2 | 3 | 4;
```

También podemos crear módulos que incorporen nuevas funcionalidades:

```ts
export function obtenerTareas(): Tarea[] {
    // ...
}
```

Otro archivo puede importar esa funcionalidad:

```ts
import { obtenerTareas } from "./datos/tareas.js";
```

Además, es posible utilizar solamente una parte del lenguaje.

Por ejemplo, un programa estructurado sencillo podría utilizar únicamente:

* Variables.
* Tipos.
* Operadores.
* Condicionales.
* Ciclos.
* Funciones.
* Módulos.

No es necesario utilizar todas las características disponibles de TypeScript para desarrollar un programa.

En este trabajo se utiliza precisamente un **subconjunto de TypeScript orientado a la programación estructurada**, dejando fuera características propias de otros enfoques que no son necesarias para el objetivo de la actividad.

---

## 7. El código producido, ¿es transportable?

Sí, aunque es necesario distinguir entre el código fuente TypeScript y el código JavaScript generado.

TypeScript normalmente se transforma a JavaScript mediante el compilador.

Por ejemplo:

```text
programa.ts
      ↓
   TypeScript
      ↓
programa.js
```

El código generado puede ejecutarse en diferentes entornos compatibles con JavaScript.

Esto permite utilizar TypeScript en diferentes plataformas y entornos de ejecución.

Sin embargo, la transportabilidad también depende de las características utilizadas y del entorno de destino.

Por ejemplo, nuestro proyecto utiliza **Node.js** para ejecutar el programa y la librería `readline-sync` para recibir información desde la terminal.

Por lo tanto, para ejecutar correctamente el proyecto será necesario contar con un entorno compatible y con las dependencias correspondientes.

---

# Conclusión

TypeScript es un lenguaje basado en JavaScript que incorpora un sistema de tipos estático y diferentes herramientas para facilitar el desarrollo de software.

Desde el enfoque de la **programación estructurada**, permite utilizar elementos fundamentales como:

* Secuencia.
* Selección.
* Repetición.
* Funciones.
* Modularización.

Al mismo tiempo, su sistema de tipos permite describir con mayor precisión los datos utilizados por el programa y detectar determinados errores durante el desarrollo.

A partir del análisis de los cuatro componentes de un paradigma mencionados por Kuhn, podemos observar que TypeScript posee reglas sintácticas y semánticas definidas, documentación, herramientas para comprobar el código y diferentes características orientadas a facilitar su organización y mantenimiento.

Entre las características que pueden ser valoradas por los profesionales se encuentran la detección temprana de determinados errores, la claridad del código, la definición de tipos, el autocompletado y el soporte para proyectos de mayor tamaño.

Sin embargo, estas características no hacen que TypeScript sea universalmente superior a otros lenguajes. Su utilidad depende de las necesidades del proyecto y de la forma en que se utilice el lenguaje.

En este trabajo se utilizará un subconjunto de TypeScript limitado al paradigma de **programación estructurada**, utilizando sus tipos, funciones, estructuras de control y módulos para desarrollar una nueva versión del Gestor de Tareas realizado anteriormente.

---

# Fuentes

* TypeScript — documentación oficial.
* TypeScript Handbook.
* Microsoft — TypeScript.
* ECMAScript — ECMA International.
* MDN Web Docs — JavaScript.

---

# Autor

**Mateo González**

Programador Universitario de Sistemas — UNViMe