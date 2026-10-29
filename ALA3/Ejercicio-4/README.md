# Ejercicio 4 — Características de la programación orientada a objetos

## Introducción

En el Ejercicio 3 se modificó la lista de tareas desarrollada en ALA1 para utilizar JavaScript con un enfoque de programación orientada a objetos (OOP) basada en prototipos.

En esta implementación se utilizaron objetos, una función constructora, propiedades, métodos, prototipos y reutilización de comportamientos. Estas características permiten organizar los datos y las operaciones relacionadas con las tareas.

El Ejercicio 2 de ALA3 no se realizó, por lo que el análisis de las características de OOP se fundamenta en el programa desarrollado en el Ejercicio 3.

## 1. Objetos

Los objetos permiten agrupar datos y comportamientos relacionados dentro de una misma estructura.

En el programa, cada tarea es un objeto que contiene propiedades como `titulo`, `descripcion`, `estado`, `dificultad`, `creacion`, `ultimaEdicion` y `vencimiento`.

Por ejemplo, al crear una tarea, se obtiene un objeto que representa una actividad concreta. Cada tarea conserva sus propios datos, independientemente de los valores que tengan las demás.

Esta característica resulta adecuada porque el problema consiste en administrar múltiples tareas, cada una con información y estado propios.

## 2. Constructor

Se utilizó la función constructora `Tarea()` para inicializar los objetos que representan las tareas.

```javascript
export function Tarea(
    titulo,
    descripcion = "",
    estado = 1,
    dificultad = 1,
    vencimiento = null
) {
    const fechaCreacion = new Date();

    this.titulo = titulo;
    this.descripcion = descripcion;
    this.estado = estado;
    this.dificultad = dificultad;
    this.creacion = fechaCreacion;
    this.ultimaEdicion = fechaCreacion;
    this.vencimiento = vencimiento;
}
```

La función utiliza `this` para asignar las propiedades al objeto que se está construyendo. De esta forma, todas las tareas tienen una estructura inicial común, aunque sus datos sean diferentes.

La función `crearTarea()` utiliza el constructor mediante `new Tarea(...)`, lo que permite centralizar la creación de las instancias.

## 3. Prototipos y herencia prototípica

Esta es una de las características centrales de la implementación. En JavaScript, los prototipos permiten que varios objetos compartan propiedades y métodos mediante la cadena de prototipos.

En el programa, se definieron métodos en `Tarea.prototype`, como `cambiarEstado()`:

```javascript
Tarea.prototype.cambiarEstado = function (nuevoEstado) {
    this.estado = nuevoEstado;
    this.marcarComoEditada();
};
```

El método modifica el estado de la tarea que lo invoca y actualiza su fecha de última edición.

Como el método está definido en el prototipo, las distintas instancias de `Tarea` pueden utilizarlo sin almacenar una copia de la función dentro de cada objeto. Esto favorece la reutilización del código.

La herencia prototípica se observa en el acceso de las instancias a los métodos definidos en `Tarea.prototype`. No se implementaron varias clases ni una jerarquía de tipos, ya que el problema no lo requería.

## 4. Encapsulamiento

El encapsulamiento consiste en organizar los datos y las operaciones relacionadas con un objeto, y en ciertos casos controlar cómo se accede a sus datos.

En este programa, la información y los métodos propios de las tareas se agruparon en el módulo `modelos/tarea.js`. Además, se utilizaron métodos como `cambiarEstado()` y `cambiarDificultad()` para realizar modificaciones específicas.

Sin embargo, el encapsulamiento se aplicó de forma limitada: las propiedades son públicas y pueden modificarse directamente desde otros módulos. No se implementaron campos privados ni mecanismos estrictos de control de acceso.

Por lo tanto, existe una organización de los datos y comportamientos, pero no un encapsulamiento completo de las propiedades.

## 5. Abstracción

La abstracción permite representar los aspectos relevantes de un problema sin exponer todos los detalles internos de su implementación.

En el programa, la función `crearTarea()` simplifica la creación de una tarea al recibir sus datos y delegar la inicialización al constructor.

También se utilizan métodos como `cambiarEstado()` y `cambiarDificultad()`, que representan operaciones concretas sobre una tarea sin que los menús tengan que repetir toda la lógica de actualización.

Esta forma de organizar el programa permite trabajar con las tareas a través de operaciones que expresan su propósito.

## 6. Polimorfismo

El polimorfismo permite que una misma operación tenga comportamientos diferentes según el objeto que la implemente o el contexto en el que se utilice.

No se implementó polimorfismo de manera explícita en este ejercicio. El programa trabaja principalmente con objetos creados mediante el mismo constructor `Tarea`, y no necesita que distintos tipos de objetos respondan de manera diferente a una misma operación.

Por ese motivo, implementar diferentes comportamientos mediante una jerarquía de tipos o redefiniciones de métodos habría agregado complejidad sin aportar una ventaja necesaria para resolver el problema planteado.

## 7. Otras características no implementadas

No se utilizaron clases de JavaScript mediante la sintaxis `class`, porque el enunciado solicita trabajar con programación orientada a objetos basada en prototipos. En su lugar, se utilizó una función constructora y se definieron métodos en su propiedad `prototype`.

Tampoco se implementaron mecanismos de persistencia en archivos o bases de datos, ya que no eran necesarios para aplicar el enfoque solicitado. Las tareas se almacenan en un arreglo durante la ejecución del programa.

## Conclusión

En el Ejercicio 3 se aplicaron objetos, una función constructora, propiedades, métodos, prototipos y reutilización de comportamientos mediante la herencia prototípica. También se utilizaron formas básicas de abstracción y organización de los datos y operaciones relacionadas con las tareas.

El encapsulamiento se aplicó de manera limitada, porque las propiedades permanecen accesibles desde otros módulos, y no se implementó polimorfismo explícito porque el problema no requería diferentes tipos de objetos con comportamientos alternativos.

En conclusión, la implementación utiliza las características de la programación orientada a objetos basada en prototipos que resultan pertinentes para administrar una lista de tareas, sin incorporar mecanismos adicionales que no son necesarios para cumplir el objetivo del ejercicio.