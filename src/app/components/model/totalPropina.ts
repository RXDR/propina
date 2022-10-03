export interface TotalPropina {
    cargo:          Cargo;
    empleado:       Empleado;
    id:             number;
    nroAsistencias: number;
    propina:        number;
    puntosCargo:    number;
    puntosMes:      number;
    valorPropina:   number;
}

export interface Cargo {
    cargo:       string;
    id:          number;
    puntosCargo: string;
}

export interface Empleado {
    apellido:       string;
    id:             number;
    idCargo:        Cargo;
    identificacion: string;
    nombre:         string;
}