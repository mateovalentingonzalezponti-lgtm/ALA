export const ESTADOS = {
    1: "Pendiente",
    2: "En Curso",
    3: "Terminada",
    4: "Cancelada"
} as const;


export const DIFICULTADES = {
    1: "★☆☆ (Fácil)",
    2: "★★☆ (Medio)",
    3: "★★★ (Difícil)"
} as const;


export type Estado = 1 | 2 | 3 | 4;

export type Dificultad = 1 | 2 | 3;


export interface Tarea {
    titulo: string;
    descripcion: string;
    estado: Estado;
    dificultad: Dificultad;
    creacion: Date;
    ultimaEdicion: Date;
    vencimiento: Date | null;
}


interface DatosNuevaTarea {
    titulo: string;
    descripcion?: string;
    estado?: Estado;
    dificultad?: Dificultad;
    vencimiento?: Date | null;
}


export function nombreEstado(estado: Estado): string {
    return ESTADOS[estado];
}


export function nombreDificultad(dificultad: Dificultad): string {
    return DIFICULTADES[dificultad];
}


export function crearTarea({
    titulo,
    descripcion = "",
    estado = 1,
    dificultad = 1,
    vencimiento = null
}: DatosNuevaTarea): Tarea {

    const fechaCreacion = new Date();

    return {
        titulo,
        descripcion,
        estado,
        dificultad,
        creacion: fechaCreacion,
        ultimaEdicion: fechaCreacion,
        vencimiento
    };
}


export function marcarComoEditada(tarea: Tarea): void {
    tarea.ultimaEdicion = new Date();
}