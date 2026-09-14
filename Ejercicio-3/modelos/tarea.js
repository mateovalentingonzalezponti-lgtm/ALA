// Hicimos este archivo para poder crear tareas de manera más sencilla y centralizada, evitando repetir código en varias partes del proyecto.
export function crearTarea(titulo, descripcion = "") {

    const fechaCreacion = new Date();

    return {
        titulo: titulo,
        descripcion: descripcion,
        estado: 1,// | 1: Pendiente | 2: En progreso | 3: Completada | 4: Cancelada  |
        dificultad: 1,// | 1: Fácil | 2: Medio | 3: Difícil  |
        creacion: fechaCreacion,
        ultimaEdicion: fechaCreacion,
        vencimiento: null
    };
}