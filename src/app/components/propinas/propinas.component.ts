import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Fechas } from '../model/fechas';
import { ServiciosSvcService } from '../services/serviciosSvc.service';

@Component({
  selector: 'app-propinas',
  templateUrl: './propinas.component.html',
  styleUrls: ['./propinas.component.css']
})
export class PropinasComponent implements OnInit {
fecha:Date
fecha2:Date
  total: number=0;
  puntos: any;
  formulario2: any;
  idPropina: any;
  totalEmpleado: any;
  constructor(private serviceSVC:ServiciosSvcService,private formBuild: FormBuilder,) { }
  formulario:any
  clave:string='puntos'
  
propinas:any;
  ngOnInit() {
    this.formubuild()
    this.formul()
  }
  formubuild(){
    this.formulario=this.formBuild.group({
      fecha_fin:[''],
      fecha_ini:['']
    })
  }

  formul(){
    this.formulario2=this.formBuild.group({
      ano:[''],
      fecha:[''],
      id:[''],
      mes:[''],
      valor:[''],
      estado:[true]
    })
  }
  Submit(){
    
    this.serviceSVC.insertPropina(this.formulario2.value).subscribe(resp=>{
      console.log( this.idPropina=resp['data'].id)

      alert("Se inserto registro exitosamente")

      this.idPropina=resp['data'].id
      this.serviceSVC.getCalculo(this.idPropina).subscribe(resp=>{
        console.log(resp)
        this.totalEmpleado=resp['data']
      })
    })
    console.log(this.formulario2.value)
  }
  cargarEmpleados(){
    this.serviceSVC.getPropinaEmpl(this.fecha2,this.fecha).subscribe(resp=>{
      this.propinas=resp['data']
      console.log(resp)
      this.puntos=parseInt(this.propinas.puntos)
    })
  }
  sumar(){
  console.log(this.puntos)
  }

}
