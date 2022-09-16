import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Auth, signOut } from '@angular/fire/auth';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';
import { Cargo } from '../model/cargo';
import { EmpleadoServicesService } from '../services/empleadoServices.service';
import { ServiciosSvcService } from '../services/serviciosSvc.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registerEmple',
  templateUrl: './registerEmple.component.html',
  styleUrls: ['./registerEmple.component.css']
})
export class RegisterEmpleComponent implements OnInit {
  formLogin?: FormGroup;
  cargo?: any;
  _cargos: any;
  mostrar=false;
 
  constructor(private dialogService: MatDialog,
    private registrEmpleado:EmpleadoServicesService,
    private auth:Auth,
    private userService: UserService,
    private router: Router,
    private serviceSvc:ServiciosSvcService,
    private formBuild: FormBuilder,
  ) { 
    this.buildForm();
    }

    openAddcion() {
     
      const dialogRef = this.dialogService.open(ModalComponent,
        {
          data: {
            
          },
          width: '4000px',
        });
      
  
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
  
    }
  
  ngOnInit() {
    this.getCargo();
    this.buildForm();
    
  }

  buildForm(){
    this.formLogin = this.formBuild.group({
      
      apellido: [''],
      id:[null],
      idCargo:this.formBuild.group({
        cargo:[''],
        id:[''],
      }),
      identificacion:[''],
      nombre: [''],
    })
  }

  onSubmit() {
    console.log(this.formLogin.value)
    this.serviceSvc.insertEmpleados(this.formLogin.value).subscribe(res=>{
      console.log(res)
      alert('Se grabo empleado')
    })
  }

  logout() {
    return signOut(this.auth) 
    
  }
  loginWithGoogle() {
    this.userService.loginGoogle()
      .then(() => this.router.navigate(['/main']))
      .catch((e) => console.log(e.message));
  }
  

  
  getCargo(){
    this.serviceSvc.getCargar().subscribe(resp=>{
      this.cargo=resp['data']
      console.log(resp)
    })
  }
  show(){
    this.mostrar=true
  }
 //onchange nivel academico
 onChangeCargo(event: any): void {
  const pTemp: Cargo = this.cargo.find((p) => p.id == event.value)!;
  this.formLogin.get('idCargo').setValue(pTemp)


}
}
