import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServiciosSvcService } from '../services/serviciosSvc.service';
import{Propinas} from '../model/propinas'
import { PropinasEn } from '../model/propinasEn';
@Component({
  selector: 'app-puntosincidencias',
  templateUrl: './puntosincidencias.component.html',
  styleUrls: ['./puntosincidencias.component.css']
})
export class PuntosincidenciasComponent implements OnInit {

  empleado?: any;
  cargo?:any;
  formulario:any;

  constructor(private serviceSvc:ServiciosSvcService,
              private formBuil:FormBuilder ) { }

  ngOnInit() {
 this.formbuild();
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
  formbuild(){
    this.formulario=this.formBuil.group({

      empleado:[''],
      estimulo:[''],
      fechaEstimulo:[''],
      id:[''],
      puntosEstimulo:['']
  })
}   

 //onChangeEmpleado
 onChangeEmpleado(event: any): void {
  const pTemp: PropinasEn = this.empleado.find((p) => p.id == event.value)!;
  this.formulario.get('empleado').setValue(pTemp)
  console.log(pTemp)
}
onSubmit(){
  console.log(this.formulario.value)
  this.serviceSvc.insertEstimulos(this.formulario.value).subscribe(resp=>{
    console.log(resp)
  })
  alert("se grabo")
}
}