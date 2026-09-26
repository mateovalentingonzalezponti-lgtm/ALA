export function fechaValida(texto: string): boolean {
    const patron = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const coincidencia = texto.match(patron);

    if (!coincidencia) {
        return false;
    }

    const dia = Number(coincidencia[1]);
    const mes = Number(coincidencia[2]);
    const anio = Number(coincidencia[3]);

    const fecha = new Date(anio, mes - 1, dia);

    return fecha.getFullYear() === anio &&
           fecha.getMonth() === mes - 1 &&
           fecha.getDate() === dia;
}


export function parsearFecha(texto: string): Date {
    const [dia, mes, anio] = texto.split("/").map(Number);

    return new Date(anio, mes - 1, dia);
}


export function formatearFecha(fecha: Date | null): string {
    if (!fecha) {
        return "Sin Datos";
    }

    const dia = String(fecha.getDate()).padStart(2, "0");
    const mes = String(fecha.getMonth() + 1).padStart(2, "0");
    const anio = fecha.getFullYear();

    return `${dia}/${mes}/${anio}`;
}