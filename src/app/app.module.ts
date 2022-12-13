import { NgModule, isDevMode, EnvironmentInjector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

 import { FirestoreModule } from "@angular/fire/firestore"; 
import {firebaseConfig} from './environment/environment';


import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule} from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(()=> getAuth()),
    
    AngularFireAuthModule,
    FirestoreModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    // AngularFirestoreModule,
    // AngularFireModule
    

    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
