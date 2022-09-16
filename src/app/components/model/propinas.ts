export interface Propinas {
    id:             number;
    puntos:         number;
    idEmpleados:    IDEmpleados;
    estimulo:       string;
    fechaRegPuntos: Date;
}

export interface IDEmpleados {
    id:             number;
    nombre:         string;
    apellido:       string;
    identificacion: string;
}