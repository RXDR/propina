import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ServiciosSvcService } from '../services/serviciosSvc.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
formulario:any
  constructor(private refModal:MatDialog,
    private serviceScv:ServiciosSvcService,
              private formBuil:FormBuilder) { }

  ngOnInit() {
    this.formulario=this.formBuil.group({
      
      cargo:[''],
      id:[],
      puntosCargo:['']
    })
  }

  OnSubmit(){
    console.log(this.formulario.value)
    this.serviceScv.newCargo(this.formulario.value).subscribe(resp=>{
      console.log(resp)
    })
    alert("Se guardo el formulario correctamente")
    this.refModal.closeAll()
  }
  cerrar(){
    this.refModal.closeAll()
  }
}
