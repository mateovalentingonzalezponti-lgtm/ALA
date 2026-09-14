# Ejercicio 3 — ToDo List

## Descripción

En este ejercicio se desarrolla una aplicación de gestión de tareas (**ToDo List**) utilizando **JavaScript**.

El objetivo es permitir al usuario registrar, consultar, buscar y modificar tareas, manteniendo una estructura modular y organizada.

---

## Funcionalidades

La aplicación permite:

* Ver todas las tareas.
* Filtrar tareas por estado:

  * Pendientes.
  * En Curso.
  * Terminadas.
* Buscar tareas por título o palabra clave.
* Crear nuevas tareas.
* Consultar el detalle de una tarea.
* Editar una tarea.
* Eliminar una tarea.
* Modificar:

  * Título.
  * Descripción.
  * Estado.
  * Dificultad.
  * Fecha de vencimiento.
* Registrar automáticamente la fecha de creación.
* Registrar la última fecha de edición.
* Mostrar la dificultad mediante una representación visual.

---

## Datos de una tarea

Cada tarea contiene los siguientes atributos:

| Atributo        | Tipo        | Descripción                                                |
| --------------- | ----------- | ---------------------------------------------------------- |
| `titulo`        | String      | Título de la tarea. Máximo 100 caracteres y obligatorio.   |
| `descripcion`   | String      | Descripción de la tarea. Máximo 500 caracteres y opcional. |
| `estado`        | Number      | Estado actual de la tarea.                                 |
| `dificultad`    | Number      | Nivel de dificultad.                                       |
| `creacion`      | Date        | Fecha en la que se creó la tarea.                          |
| `ultimaEdicion` | Date        | Fecha de la última modificación.                           |
| `vencimiento`   | Date/String | Fecha límite de la tarea. Es opcional.                     |

### Estados

| Valor | Estado    |
| ----- | --------- |
| `1`   | Pendiente |
| `2`   | En Curso  |
| `3`   | Terminada |
| `4`   | Cancelada |

### Dificultades

| Valor | Dificultad |
| ----- | ---------- |
| `1`   | Fácil      |
| `2`   | Medio      |
| `3`   | Difícil    |

La dificultad también se representa visualmente:

* `★☆☆` → Fácil
* `★★☆` → Medio
* `★★★` → Difícil

---

## Estructura del proyecto

```text
Ejercicio-3/
│
├── index.html
├── main.js
├── README.md
│
├── modelos/
│   └── tarea.js
│
├── datos/
│   └── tareas.js
│
├── menus/
│   ├── menuPrincipal.js
│   ├── verTareas.js
│   ├── buscarTareas.js
│   ├── agregarTarea.js
│   ├── detalleTareas.js
│   └── editarTarea.js
│
└── utilidades/
    ├── mensajes.js
    └── validaciones.js
```

---

## Organización de los módulos

### `main.js`

Es el punto de entrada de la aplicación.

Se encarga de iniciar el menú principal.

### `modelos/tarea.js`

Contiene la función encargada de crear nuevas tareas.

### `datos/tareas.js`

Contiene el arreglo donde se almacenan todas las tareas:

```js
export const misTareas = [];
```

Este arreglo funciona como almacenamiento temporal durante la ejecución del programa.

### `menus/`

Contiene las diferentes partes de la aplicación:

* `menuPrincipal.js` → menú principal.
* `verTareas.js` → visualización y filtrado de tareas.
* `buscarTareas.js` → búsqueda por título.
* `agregarTarea.js` → creación de nuevas tareas.
* `detalleTareas.js` → visualización del detalle y eliminación.
* `editarTarea.js` → modificación de los atributos de una tarea.

### `utilidades/`

Contiene funciones reutilizables:

* `mensajes.js` → mensajes y elementos comunes de la interfaz.
* `validaciones.js` → validaciones de datos ingresados por el usuario.

---

## Modularización

A diferencia de una implementación monolítica, el programa se divide en diferentes módulos.

Cada archivo tiene una responsabilidad específica y utiliza `export` e `import` para comunicarse con los demás módulos.

Esto permite:

* Organizar mejor el código.
* Evitar repetir funciones.
* Facilitar el mantenimiento.
* Separar la lógica según su responsabilidad.
* Hacer que el código sea más fácil de comprender y modificar.

---

## Validaciones implementadas

La aplicación controla diferentes entradas del usuario:

* El título es obligatorio.
* El título no puede superar los 100 caracteres.
* La descripción no puede superar los 500 caracteres.
* El estado debe encontrarse entre `1` y `4`.
* La dificultad debe encontrarse entre `1` y `3`.
* Las opciones de los diferentes menús son validadas.
* Se informa al usuario cuando una opción no es válida.
* En la búsqueda se informa cuando no existen coincidencias.

---

## Ejecución

El proyecto utiliza **JavaScript con módulos ES (`import` / `export`)**.

Para ejecutarlo se puede abrir `index.html` mediante un servidor local, por ejemplo utilizando **Live Server** desde Visual Studio Code.

Una vez iniciado el programa, se puede utilizar la consola del navegador utilizando F12 y siguiendo las instrucciones que se dan para interactuar con los diferentes menús.

---

## Happy Paths

### Path 1 — Ver y editar una tarea

1. Ingresar a **Ver Mis Tareas**.
2. Seleccionar una tarea.
3. Consultar el detalle.
4. Seleccionar **Editar**.
5. Modificar alguno de sus atributos.

### Path 2 — Buscar una tarea existente

1. Ingresar a **Buscar una Tarea**.
2. Escribir una palabra o parte del título.
3. Seleccionar uno de los resultados.
4. Consultar el detalle.
5. Editar la tarea si es necesario.

### Path 3 — Buscar una tarea inexistente

1. Ingresar a **Buscar una Tarea**.
2. Escribir un texto que no coincida con ninguna tarea.
3. El sistema informa que no se encontraron resultados.
4. Volver al menú principal.

### Path 4 — Crear una tarea

1. Ingresar a **Agregar una Tarea**.
2. Introducir el título.
3. Introducir la descripción.
4. Seleccionar el estado.
5. Seleccionar la dificultad.
6. Opcionalmente ingresar una fecha de vencimiento.
7. La tarea se guarda en el sistema.

---

## Tecnologías utilizadas

* **JavaScript**
* **HTML**
* **Módulos ES (`import` / `export`)**
* **Visual Studio Code**
* **Live Server**

---

## Autor

**Mateo González**

Programador Universitario de Sistemas — UNViMe
