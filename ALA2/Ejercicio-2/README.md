# Ejercicio 2 — Gestor de Tareas en TypeScript

## Descripción

En este ejercicio se desarrolla una nueva versión del **Gestor de Tareas**, aplicando los conceptos de **TypeScript** analizados en el Ejercicio 1.

La aplicación mantiene las mismas funcionalidades que la versión en JavaScript (ALA 1 — Ejercicio 3), pero incorpora tipado estático, validaciones más estrictas mediante *type guards* y una organización del código orientada a evitar errores en tiempo de desarrollo.

Las tareas se mantienen en memoria durante la ejecución del programa.

---

# Funcionalidades

La aplicación permite:

* Ver todas las tareas.
* Ver tareas filtradas por estado (Pendientes / En Curso / Terminadas).
* Buscar tareas por título.
* Agregar nuevas tareas.
* Ver el detalle de una tarea.
* Editar el título, descripción, estado, dificultad y fecha de vencimiento.
* Eliminar una tarea.

Cada tarea guarda además su fecha de creación y la fecha de su última modificación.

---

# Datos de una tarea

| Dato            | Tipo             | Descripción                                                     |
| --------------- | ---------------- | --------------------------------------------------------------  |
| `titulo`        | `string`         | Obligatorio. Máximo 100 caracteres.                             |
| `descripcion`   | `string`         | Opcional. Máximo 500 caracteres.                                |
| `estado`        | `Estado`         | Estado actual de la tarea.                                      |
| `dificultad`    | `Dificultad`     | Dificultad de la tarea.                                         |
| `creacion`      | `Date`           | Fecha y hora de creación, asignada automáticamente.             |
| `ultimaEdicion` | `Date`           | Fecha y hora de la última modificación.                         |
| `vencimiento`   | `Date \| null`   | Fecha de vencimiento ingresada por el usuario, o `null`.        |

## Estados

```ts
type Estado = 1 | 2 | 3 | 4;
```

| Valor | Estado    |
| ----- | --------- |
| `1`   | Pendiente |
| `2`   | En Curso  |
| `3`   | Terminada |
| `4`   | Cancelada |

## Dificultad

```ts
type Dificultad = 1 | 2 | 3;
```

| Valor | Dificultad       |
| ----- | -------------    |
| `1`   | ★☆☆ (Fácil)    |
| `2`   | ★★☆ (Medio)    |
| `3`   | ★★★ (Difícil)  |

---

# Organización del proyecto

```text
Ejercicio-2/
├── main.ts
├── package.json
├── tsconfig.json
├── README.md
│
├── datos/
│   └── tareas.ts
│
├── menus/
│   ├── agregarTarea.ts
│   ├── buscarTareas.ts
│   ├── detalleTareas.ts
│   ├── editarTarea.ts
│   ├── menuPrincipal.ts
│   └── verTareas.ts
│
├── modelos/
│   └── tarea.ts
│
└── utilidades/
    ├── fechas.ts
    ├── listados.ts
    ├── mensajes.ts
    └── validaciones.ts
```

## `main.ts`

Punto de entrada del programa. Inicia el menú principal.

## `datos/`

Contiene el estado del programa en memoria. `tareas.ts` expone funciones para obtener, agregar y eliminar tareas del listado, protegiendo el acceso por índice (evita operar sobre índices fuera de rango).

## `menus/`

Contiene las pantallas con las que interactúa el usuario: agregar, buscar, ver, editar y ver el detalle de una tarea.

## `modelos/`

Define el tipo `Tarea`, los tipos `Estado` y `Dificultad`, y la función `crearTarea` para generar una tarea con sus valores iniciales.

## `utilidades/`

Funciones reutilizadas en distintas partes del programa:

* `fechas.ts`: validación, conversión y formateo de fechas (`dd/mm/aaaa`).
* `listados.ts`: selección de una tarea a partir de una lista mostrada en pantalla.
* `mensajes.ts`: mensajes de la interfaz y pausa de la ejecución.
* `validaciones.ts`: validación de título, descripción, estado, dificultad y opciones numéricas de menú.

---

# TypeScript aplicado

## Tipos personalizados

```ts
export type Estado = 1 | 2 | 3 | 4;
export type Dificultad = 1 | 2 | 3;
```

Un **tipo unión de literales** en vez de `number` evita que el programa acepte, por ejemplo, un estado `7`. TypeScript rechaza la asignación en tiempo de compilación.

## *Type guards*

```ts
export function estadoValido(estado: number): estado is Estado {
    return estaEnRango(estado, 1, 4);
}
```

La sintaxis `estado is Estado` le permite a TypeScript **reducir el tipo** del valor luego de la validación: después de comprobar `estadoValido(entrada)`, el compilador sabe que la variable es de tipo `Estado` y no simplemente `number`, sin necesidad de un `as` (aserción de tipo).

## Interfaces

```ts
export interface Tarea {
    titulo: string;
    descripcion: string;
    estado: Estado;
    dificultad: Dificultad;
    creacion: Date;
    ultimaEdicion: Date;
    vencimiento: Date | null;
}
```

## Compilación estricta

El proyecto usa `strict: true`, además de `noUnusedLocals` y `noUnusedParameters` en `tsconfig.json`, para que el compilador rechace también variables e imports declarados y nunca utilizados.

---

# Ejecución

Parado en `Ejercicio-2/`:

```bash
npm install
npm run build
npm start
```

* `npm run build` compila el código TypeScript (`*.ts`) a JavaScript dentro de `dist/`.
* `npm start` ejecuta el programa ya compilado (`dist/main.js`).

En Windows PowerShell, si `npm` no se reconoce como comando, puede usarse `npm.cmd` en su lugar.

---

# Tecnologías utilizadas

* TypeScript
* Node.js
* `readline-sync`
* Módulos ES (`import` / `export`)

---

## Autor

**Mateo González**
Programador Universitario de Sistemas — UNViMe