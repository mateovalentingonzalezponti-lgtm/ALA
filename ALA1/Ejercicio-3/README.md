# Ejercicio 3 — Lista de tareas

## Descripción

En este ejercicio se desarrolla una aplicación para administrar una lista de tareas utilizando **JavaScript**.

La aplicación permite crear tareas, consultar las tareas existentes, buscar tareas y modificar o eliminar las que ya fueron creadas.

Las tareas se mantienen en memoria durante la ejecución del programa.

---

# Funcionalidades

La aplicación permite:

* Ver todas las tareas.
* Ver tareas según su estado.
* Buscar tareas por título.
* Agregar nuevas tareas.
* Ver el detalle de una tarea.
* Editar una tarea.
* Eliminar una tarea.
* Modificar el estado de una tarea.
* Modificar la dificultad.
* Establecer una fecha de vencimiento.

Cada tarea también guarda la fecha de creación y la fecha de su última modificación.

---

# Datos de una tarea

Cada tarea contiene los siguientes datos:

| Dato            | Descripción                                                               |
| --------------- | ------------------------------------------------------------------------- |
| `titulo`        | Título de la tarea. Tiene un máximo de 100 caracteres.                    |
| `descripcion`   | Descripción de la tarea. Es opcional y tiene un máximo de 500 caracteres. |
| `estado`        | Estado actual de la tarea.                                                |
| `dificultad`    | Dificultad de la tarea.                                                   |
| `creacion`      | Fecha y hora en la que se creó.                                           |
| `ultimaEdicion` | Fecha y hora de la última modificación.                                   |
| `vencimiento`   | Fecha de vencimiento ingresada por el usuario o `null`.                   |

## Estados

Las tareas pueden tener cuatro estados:

| Valor | Estado    |
| ----- | --------- |
| `1`   | Pendiente |
| `2`   | En curso  |
| `3`   | Terminada |
| `4`   | Cancelada |

## Dificultad

La dificultad puede tener tres valores:

| Valor | Dificultad |
| ----- | ---------- |
| `1`   | ★          |
| `2`   | ★★         |
| `3`   | ★★★        |

---

# Organización del proyecto

El proyecto está dividido en diferentes carpetas para separar las responsabilidades de cada parte.

```text
Ejercicio-3/
├── main.js
├── README.md
│
├── datos/
│   └── tareas.js
│
├── menus/
│   ├── agregarTarea.js
│   ├── buscarTareas.js
│   ├── detalleTareas.js
│   ├── editarTarea.js
│   ├── menuPrincipal.js
│   └── verTareas.js
│
├── modelos/
│   └── tarea.js
│
└── utilidades/
    ├── mensajes.js
    └── validaciones.js
```

## `main.js`

Es el punto de entrada del programa.

Desde este archivo se inicia el menú principal de la aplicación.

## `datos/`

Contiene los datos utilizados por el programa.

El archivo `tareas.js` contiene el arreglo donde se almacenan las tareas durante la ejecución.

## `menus/`

Contiene las diferentes partes del programa relacionadas con las opciones que puede realizar el usuario.

Por ejemplo:

* Agregar una tarea.
* Buscar tareas.
* Ver tareas.
* Editar una tarea.
* Ver el detalle de una tarea.
* Mostrar el menú principal.

## `modelos/`

Contiene la función utilizada para crear nuevas tareas.

El archivo `tarea.js` permite generar una tarea con sus valores iniciales.

## `utilidades/`

Contiene funciones que son utilizadas en diferentes partes del programa.

En esta carpeta se encuentran:

* `mensajes.js`: contiene mensajes y funciones que se muestran durante la ejecución.
* `validaciones.js`: contiene funciones para comprobar que los datos ingresados sean válidos.

---

# Modularización

El programa está dividido en varios módulos utilizando `import` y `export`.

Esto permite separar el código en diferentes archivos y utilizar solamente las funciones necesarias en cada parte del programa.

Por ejemplo, el menú principal utiliza los módulos correspondientes a cada opción y las funciones de validación se pueden reutilizar cuando se ingresan o modifican datos.

Esta organización ayuda a que el código sea más fácil de leer y modificar.

---

# Validaciones

El programa realiza diferentes validaciones antes de guardar o modificar una tarea.

Entre ellas:

* El título debe tener entre 1 y 100 caracteres.
* La descripción puede tener hasta 500 caracteres.
* El estado debe estar entre `1` y `4`.
* La dificultad debe estar entre `1` y `3`.

También se comprueban las opciones ingresadas en los diferentes menús.

---

# Ejemplo de uso

Al iniciar el programa se muestra el menú principal.

Un ejemplo de recorrido podría ser:

```text
1. Ver tareas
2. Buscar tareas
3. Agregar tarea
4. Salir
```

Al agregar una tarea se pueden ingresar datos como:

```text
Título: Estudiar JavaScript
Descripción: Repasar funciones y módulos
Estado: 1
Dificultad: 2
Vencimiento: 20/09/2026
```

Luego la tarea queda almacenada en la lista y puede ser consultada o modificada desde las diferentes opciones del programa.

---

# Ejecución

El proyecto utiliza **Node.js** y la librería `readline-sync` para recibir información desde la terminal.

Desde la carpeta raíz de `ALA1`, primero se pueden instalar las dependencias:

```bash
npm install
```

Luego se puede ejecutar el ejercicio con:

```bash
npm run ejercicio3
```

En Windows PowerShell también puede utilizarse:

```powershell
npm.cmd run ejercicio3
```

---

# Tecnologías utilizadas

* JavaScript
* Node.js
* `readline-sync`
* Módulos ES (`import` / `export`)

---

## Autor

**Mateo González**
Programador Universitario de Sistemas — UNViMe
