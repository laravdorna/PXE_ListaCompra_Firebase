import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import { ProductosComponent } from './productos/productos.component.spec';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {RouterModule} from '@angular/router';
import {AngularFireDatabaseModule} from "@angular/fire/database";

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule,
    AngularFireDatabaseModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
