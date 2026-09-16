# Ejercicio 2 — Calculadora

## Descripción

En este ejercicio se desarrolla una calculadora utilizando **JavaScript**.

La calculadora permite realizar las cuatro operaciones matemáticas básicas:

* Suma
* Resta
* Multiplicación
* División

El ejercicio está dividido en una versión **Original** y una versión **Bonus**.

La aplicación funciona mediante la terminal y utiliza la librería `readline-sync` para recibir los datos ingresados por el usuario.

---

# Versión Original

La versión original permite ingresar **dos operandos** y elegir qué operación realizar.

### Operaciones disponibles

* `+` → Suma
* `-` → Resta
* `*` → Multiplicación
* `/` → División

### Estructura

```text
Original/
├── calculadora.js
├── main.js
└── operaciones.js
```

### `main.js`

Es el punto de entrada del programa.

Se encarga de:

1. Pedir el primer operando.
2. Pedir el operador.
3. Pedir el segundo operando.
4. Enviar los datos a la calculadora.
5. Mostrar el resultado.
6. Mostrar un mensaje si ocurre un error.

### `calculadora.js`

Contiene la función encargada de determinar qué operación se debe realizar según el operador ingresado.

### `operaciones.js`

Contiene las funciones correspondientes a las operaciones matemáticas:

* Sumar.
* Restar.
* Multiplicar.
* Dividir.

De esta manera, cada archivo tiene una responsabilidad determinada.

### Ejemplo

```text
Ingrese el primer operando: 10
Ingrese el operador (+, -, *, /): *
Ingrese el segundo operando: 5

Resultado: 50
```

---

# Versión Bonus

La versión Bonus amplía la calculadora original para permitir trabajar con **cualquier cantidad de operandos**.

Primero se indica qué operación se quiere realizar y cuántos operandos se van a ingresar.

### Estructura

```text
Bonus/
├── calculadora.js
├── main.js
└── operaciones.js
```

### Funcionamiento

Por ejemplo, para sumar varios números:

```text
Ingrese el operador (+, -, *, /): +
¿Cuántos operandos desea ingresar? 4
Ingrese el operando 1: 10
Ingrese el operando 2: 20
Ingrese el operando 3: 5
Ingrese el operando 4: 15

Resultado: 50
```

La calculadora también permite realizar multiplicaciones con varios operandos.

Para la resta y la división, los operandos se procesan respetando el orden en el que fueron ingresados.

---

# Modularización

El programa está dividido en diferentes archivos para separar las responsabilidades.

```text
main.js
   ↓
calculadora.js
   ↓
operaciones.js
```

De esta forma:

* `main.js` se encarga de interactuar con el usuario.
* `calculadora.js` se encarga de seleccionar la operación.
* `operaciones.js` contiene las operaciones matemáticas.

Esta separación permite que el código sea más fácil de entender y modificar.

---

# Manejo de errores

La aplicación utiliza `try...catch` para controlar errores que puedan producirse durante la ejecución.

Por ejemplo, se controla la división por cero y los operadores que no sean válidos.

Cuando ocurre un error, se muestra un mensaje en la terminal en lugar de finalizar el programa sin información para el usuario.

---

# Tecnologías utilizadas

* JavaScript
* Node.js
* `readline-sync`
* Módulos ES (`import` / `export`)

---

# Ejecución

Antes de ejecutar los ejercicios, es necesario tener instaladas las dependencias del proyecto.

Desde la carpeta raíz de `ALA1`:

```bash
npm install
```

### Ejecutar versión Original

```bash
npm run ejercicio2
```

### Ejecutar versión Bonus

```bash
npm run ejercicio2:bonus
```

En Windows PowerShell, si `npm` está bloqueado por la política de ejecución, se puede utilizar:

```powershell
npm.cmd run ejercicio2
```

o:

```powershell
npm.cmd run ejercicio2:bonus
```

---

## Autor

**Mateo González**
Programador Universitario de Sistemas — UNViMe
