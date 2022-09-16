import { Component, OnInit } from '@angular/core';
import { ServiciosSvcService } from '../services/serviciosSvc.service';

@Component({
  selector: 'app-puntosincidencias',
  templateUrl: './puntosincidencias.component.html',
  styleUrls: ['./puntosincidencias.component.css']
})
export class PuntosincidenciasComponent implements OnInit {

  empleado?: any;
  cargo?:any;

  constructor(private serviceSvc:ServiciosSvcService,) { }

  ngOnInit() {
 
  this.getEmpleado();
  }
 /* getCargo(){
    this.serviceSvc.getCargoId(this.idCargo).subscribe(resp=>{
    this.cargo=resp['data']
    })
  }*/
  getEmpleado(){
    this.serviceSvc.getEmpleado().subscribe(resp=>{
      this.empleado=resp['data']
      console.log(resp)
    })
  }

}
