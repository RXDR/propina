import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cargo } from '../model/cargo';
import { Empleados } from '../model/empleados';

@Injectable({
    providedIn: 'root'
  })
export class EmpleadoServicesService {
baseUrl=environment.url_api
url:string='https://localhost/empleados/'
url2:string='http://localhost/empleados/cargo.php'
constructor(private http:HttpClient) { }
registrEmpleado(empleados:Empleados):Observable<any>{
    return this.http.post<Empleados>(this.url+"?insertar=1",empleados)
}

obtenerCargo(){
return this.http.get<Cargo>(this.url2)
}
}
