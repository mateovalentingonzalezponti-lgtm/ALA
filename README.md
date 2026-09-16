# ALA — Aplicando lo Aprendido

## Sobre este repositorio

Este repositorio contiene el desarrollo de **ALA (Aplicando lo Aprendido)**, una serie de actividades realizadas durante la materia **Paradigmas de Programación** de la carrera **Programador Universitario de Sistemas** en la **Universidad Nacional de Villa Mercedes (UNViMe)**.

El objetivo de ALA es aplicar de manera práctica los conceptos aprendidos durante la cursada mediante diferentes ejercicios y actividades de programación.

Actualmente, este repositorio contiene el desarrollo de **ALA 1**.

---

# ALA 1 — Aplicando lo Aprendido 1

La **ALA 1** está compuesta por tres ejercicios, cada uno con un objetivo diferente.

| Ejercicio   | Tema                                   |
| ----------- | -------------------------------------- |
| Ejercicio 1 | JavaScript y programación estructurada |
| Ejercicio 2 | Calculadora                            |
| Ejercicio 3 | Lista de tareas                        |

Cada ejercicio tiene su propio código y un `README.md` con información sobre su funcionamiento.

---

# Ejercicios

## Ejercicio 1

En este ejercicio se analiza **JavaScript** teniendo en cuenta el paradigma de **programación estructurada**.

Se estudian diferentes características del lenguaje y se responden preguntas relacionadas con su sintaxis, semántica, confiabilidad, ortogonalidad, extensibilidad y transportabilidad.

[Ver README del Ejercicio 1](./Ejercicio-1/README.md)

---

## Ejercicio 2

En este ejercicio se desarrolla una **calculadora** que permite realizar las cuatro operaciones matemáticas básicas.

El ejercicio cuenta con dos versiones:

* **Original:** trabaja con dos operandos.
* **Bonus:** permite trabajar con una cantidad variable de operandos.

El código está separado en diferentes módulos para organizar las operaciones y la lógica de la calculadora.

[Ver README del Ejercicio 2](./Ejercicio-2/README.md)

---

## Ejercicio 3

En este ejercicio se desarrolla una **lista de tareas (ToDo List)**.

La aplicación permite:

* Crear tareas.
* Ver tareas.
* Buscar tareas.
* Editar tareas.
* Eliminar tareas.
* Cambiar el estado.
* Establecer una dificultad.
* Establecer una fecha de vencimiento.

El código está organizado en diferentes módulos y carpetas para separar las distintas responsabilidades del programa.

[Ver README del Ejercicio 3](./Ejercicio-3/README.md)

---

# Conceptos trabajados

A lo largo de ALA 1 se trabajan diferentes conceptos de programación, entre ellos:

### Programación estructurada

Uso de estructuras de control, secuencias, condiciones, ciclos y funciones para resolver problemas.

### Funciones

Creación y utilización de funciones para dividir problemas y reutilizar código.

### Objetos

Utilización de objetos para representar y organizar información.

### Modularización

Separación del código en diferentes archivos para organizar mejor los programas.

`import` y `export`

Utilización de módulos de JavaScript para compartir funciones y datos entre diferentes archivos.

### Validación

Comprobación de los datos ingresados por el usuario antes de utilizarlos.

### Manejo de fechas

Utilización de `Date` para registrar fechas relacionadas con las tareas.

### Git y GitHub

Uso de control de versiones para registrar los cambios realizados en el proyecto y mantener el código almacenado en un repositorio remoto.

---

# Herramientas utilizadas

* **Visual Studio Code**
* **Git**
* **GitHub**
* **JavaScript**
* **Node.js**
* **readline-sync**

---

# Organización del repositorio

La estructura actual de ALA 1 es:

```text
ALA1/
│
├── package.json
├── package-lock.json
├── .gitignore
│
├── Ejercicio-1/
│   └── README.md
│
├── Ejercicio-2/
│   ├── README.md
│   ├── Original/
│   │   ├── calculadora.js
│   │   ├── main.js
│   │   └── operaciones.js
│   │
│   └── Bonus/
│       ├── calculadora.js
│       ├── main.js
│       └── operaciones.js
│
└── Ejercicio-3/
    ├── README.md
    ├── main.js
    ├── datos/
    ├── menus/
    ├── modelos/
    └── utilidades/
```

Los ejercicios utilizan **Node.js** para su ejecución y `readline-sync` para recibir datos desde la terminal.

---

# Ejecución

Las dependencias del proyecto se pueden instalar desde la carpeta raíz mediante:

```bash
npm install
```

Después, cada ejercicio puede ejecutarse utilizando los comandos definidos en `package.json`.

### Ejercicio 2

```bash
npm run ejercicio2
```

### Ejercicio 2 — Bonus

```bash
npm run ejercicio2:bonus
```

### Ejercicio 3

```bash
npm run ejercicio3
```

En Windows PowerShell también se puede utilizar `npm.cmd` si es necesario.

---

# Próximos pasos

A medida que avance la materia, se podrán incorporar nuevas **ALA** y sus respectivos ejercicios y actividades.

La intención es mantener este repositorio actualizado y utilizarlo como un registro del aprendizaje y evolución durante la carrera.

Actualmente:

```text
ALA
└── ALA 1
    ├── Ejercicio 1
    ├── Ejercicio 2
    └── Ejercicio 3
```

En el futuro, esta estructura podrá ampliarse con nuevas ALA.

---

# Autor

## Mateo González

**Carrera:** Programador Universitario de Sistemas

**Universidad:** Universidad Nacional de Villa Mercedes (UNViMe)

**Materia:** Paradigmas de Programación

---

> Si llegaste hasta acá, gracias por visitar y leer este repositorio!
>
> Este proyecto representa una parte de mi proceso de aprendizaje y evolución como programador.
