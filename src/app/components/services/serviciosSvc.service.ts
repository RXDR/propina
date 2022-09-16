import { HttpClient } from '@angular/common/http';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cargo } from '../model/cargo';
import { environment } from 'src/environments/environment';
import { Empleados } from '../model/empleados';
import { Incidencias } from '../model/incidencias';
import { Propinas } from '../model/propinas';

@Injectable({
  providedIn: 'root'
})
export class ServiciosSvcService {
  private url=environment.url_api
  private path1='empleado/'
private url1=environment.url_api + this.path1
constructor(private http:HttpClient) { }

getCargar():Observable<any>{
return this.http.get<Cargo>(this.url+'cargo/')
}
getEmpleado():Observable<Empleados>{
  return this.http.get<Empleados>(this.url1)
}
getIncidencias():Observable<Incidencias>{
return this.http.get<Incidencias>(this.url+'incidencias/')
}

getPropinas():Observable<Propinas>{
  return this.http.get<Propinas>(this.url+'incidencias/')
  }

insertEmpleados(empleados:Empleados):Observable<any>{
  return this.http.post<Empleados>(this.url1,empleados)

}
getCargoId(id:number):Observable<any>{
  return this.http.get<Cargo>(this.url+'cargo/'+id)
  }
}
