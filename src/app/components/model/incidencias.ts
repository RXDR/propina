export interface Incidencias {
    falta:            number;
    fechaIncidencia:  Date;
    id:               number;
    idEmpleados:      IDEmpleados;
    puntosIncidencia: number;
}

export interface IDEmpleados {
    apellido:       string;
    id:             number;
    identificacion: string;
    nombre:         string;
}