export interface PropinasEn {
    empleado:       Empleado;
    estimulo:       string;
    fechaEstimulo:  Date;
    id:             number;
    puntosEstimulo: number;
}

export interface Empleado {
    apellido:       string;
    id:             number;
    idCargo:        IDCargo;
    identificacion: string;
    nombre:         string;
}

export interface IDCargo {
    cargo: string;
    id:    number;
}