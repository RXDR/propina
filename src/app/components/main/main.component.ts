import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Auth,getAuth,onAuthStateChanged,signOut, } from '@angular/fire/auth';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Empleado } from '../model/propinasEn';
import { ServiciosSvcService } from '../services/serviciosSvc.service';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
name:any;
formReg?: any;
  cargo: any;
  empleados: any;
  constructor(
    private formbuilD:FormBuilder,
    private serviceSvc:ServiciosSvcService,
    private auth:Auth,
    private userService: UserService,
    private router: Router) {

      this.auth = getAuth()
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.displayName;
          this.name = uid;
          // ...
          console.log(uid)
        } else {
          // User is signed out
          // ...
        }
      });

     }

  ngOnInit() {
this.buildform();
this.getCargo()
this.getEmpleado()
    
  }
  buildform(){
    this.formReg = this.formbuilD.group({
      empleado:[''],
      fechaAsistencia:[],
      id:[''],
      
    })
  }
  
  logout() {
    this.router.navigate(['/login']);
    alert('si')
    return signOut(this.auth) 
    
  }
  onSubmit() {
    this.serviceSvc.insertAsistencia(this.formReg.value).subscribe(resp=>{
      console.log(resp)
      alert("Operación exitosa ")
    })
  }
  
  getCargo(){
    this.serviceSvc.getCargar().subscribe(resp=>{
      this.cargo=resp['data']
      console.log(resp)
    })
  }
  getEmpleado(){
    this.serviceSvc.getEmpleado().subscribe(resp=>{
      console.log(resp)
      this.empleados=resp['data']
    })
  }

   //onChangeEmpleado
 onChangeEmpleado(event: any): void {
  const pTemp: Empleado = this.empleados.find((p) => p.id == event.value)!;
  this.formReg.get('empleado').setValue(pTemp)
  console.log(pTemp)
}

}
