import { Component, OnInit } from '@angular/core';
import { Auth, signOut } from '@angular/fire/auth';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';
import { Cargo } from '../model/cargo';
import { EmpleadoServicesService } from '../services/empleadoServices.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registerEmple',
  templateUrl: './registerEmple.component.html',
  styleUrls: ['./registerEmple.component.css']
})
export class RegisterEmpleComponent implements OnInit {
  formLogin: FormGroup;
  cargo?: any;
  _cargos: any;
 
  constructor(private dialogService: MatDialog,
    private registrEmpleado:EmpleadoServicesService,
    private auth:Auth,
    private userService: UserService,
    private router: Router
  ) { 
      this.formLogin = new FormGroup({
        nombre: new FormControl(),
        apellido: new FormControl(),
        identificacion: new FormControl(),
        id_cargo: new FormControl(),
      })
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
  }

  onSubmit() {
    console.log(this.formLogin.value)
    this.registrEmpleado.registrEmpleado(this.formLogin.value).subscribe(
      response=>{
        console.log(response)
      }
    )
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
    this.registrEmpleado.obtenerCargo().subscribe(
      resp=>{
        
        this.cargo=resp
        console.log(this.cargo+'aqui')
      }
      
    )
   
  }
  

}
