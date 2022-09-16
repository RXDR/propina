export interface Empleados {
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