import { HttpClient } from '@angular/common/http';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Cargo } from '../model/cargo';
import { environment } from 'src/environments/environment';
import { Empleados } from '../model/empleados';
import { Incidencias } from '../model/incidencias';
import { Propinas } from '../model/propinas';
import { Fechas } from '../model/fechas';
import { PropinasEn } from '../model/propinasEn';
import { Provalor } from '../model/provalor';
import { TotalPropina } from '../model/totalPropina';

@Injectable({
  providedIn: 'root'
})
export class ServiciosSvcService {
  private url=environment.url_api
  private path1='empleado/'
  private path2='puntospropina/'
  private path3="empleado/panel?"
  private path4="estimulos/"
  private path5="cargo/"
  private path6="asistencia/"
  private path="propinas/"
  
  private url2=environment.url_api+this.path2
private url1=environment.url_api + this.path1
private url0=environment.url_api+ this.path3
private url4=environment.url_api + this.path4
private url5=environment.url_api + this.path5
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
  return this.http.get<Propinas>(this.url2)
  }

insertEmpleados(empleados:Empleados):Observable<any>{
  return this.http.post<Empleados>(this.url1,empleados)

}
getCargoId(id:number):Observable<any>{
  return this.http.get<Cargo>(this.url+'cargo/'+id)
  }
  getPropinaEmpl(fecha2:any,fecha:any):Observable<any>{
    return this.http.get<Fechas>(this.url0+'fecha_fin='+fecha2+'&fecha_ini='+fecha)

  }
  insertEstimulos(formulario:any):Observable<PropinasEn>{
    return this.http.post<PropinasEn>(this.url4,formulario)
  }
 newCargo(formulario:any):Observable<Cargo>{
  return this.http.post<Cargo>(this.url5,formulario)

 }
 insertAsistencia(formulario:any):Observable<Empleados>{
  return this.http.post<Empleados>(this.url+this.path6,formulario)
 }

 insertPropina(formulario:Provalor):Observable<Provalor>{
  return this.http.post<Provalor>(this.url+this.path,formulario)
 }
 getCalculo(id:number):Observable<TotalPropina>{
  return this.http.get<TotalPropina>(this.url+this.path+"calculo/"+id)
 }
 getConsulta(id:number){
  return this.http.get(this.url+"asistencia/empleado/"+id)
 }
}
