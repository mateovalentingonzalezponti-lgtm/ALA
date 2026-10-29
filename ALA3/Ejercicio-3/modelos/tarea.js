
export const ESTADOS = {
    1: "Pendiente",
    2: "En Curso",
    3: "Terminada",
    4: "Cancelada"
};

export const DIFICULTADES = {
    1: "★☆☆ (Fácil)",
    2: "★★☆ (Medio)",
    3: "★★★ (Difícil)"
};

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

Tarea.prototype.marcarComoEditada = function () {
    this.ultimaEdicion = new Date();
};

Tarea.prototype.cambiarEstado = function (nuevoEstado) {
    this.estado = nuevoEstado;
    this.marcarComoEditada();
};

Tarea.prototype.cambiarDificultad = function (nuevaDificultad) {
    this.dificultad = nuevaDificultad;
    this.marcarComoEditada();
};

export function crearTarea(
    titulo,
    descripcion = "",
    estado = 1,
    dificultad = 1,
    vencimiento = null
) {
    return new Tarea(
        titulo,
        descripcion,
        estado,
        dificultad,
        vencimiento
    );
}

export function nombreEstado(estado) {
    return ESTADOS[estado];
}

export function nombreDificultad(dificultad) {
    return DIFICULTADES[dificultad];
}
