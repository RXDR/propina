import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{MatIconModule}from'@angular/material/icon'
import { AppRoutingRoutes } from './app-routing.routing';
import { AppComponent } from './app.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './components/menu/menu.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
//import { provideAuth,getAuth } from '@angular/fire/auth';
import {provideAuth,getAuth} from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { RegisterEmpleComponent } from './components/registerEmple/registerEmple.component';
import { FormsModule, } from '@angular/forms';
import { PropinasComponent } from './components/propinas/propinas.component';
import {HttpClientModule} from '@angular/common/http'
import { PuntosincidenciasComponent } from './components/puntosincidencias/puntosincidencias.component';
import { ModalComponent } from './components/modal/modal.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RegisterComponent,
    LoginComponent,
    MenuComponent,
    RegisterComponent,
    RegisterEmpleComponent,
    PropinasComponent,
    PuntosincidenciasComponent,
    ModalComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingRoutes,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    provideFirebaseApp(()=>initializeApp(environment.firebase)),
    provideAuth(()=>getAuth()),
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
