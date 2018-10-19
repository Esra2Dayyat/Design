import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModalModule}  from '@ng-bootstrap/ng-bootstrap';
import { NgbModule}  from '@ng-bootstrap/ng-bootstrap';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
 import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 import {MatButtonModule, MatCheckboxModule  } from '@angular/material';

@NgModule({
  declarations: [ 
    AppComponent ,
    HomeComponent ,
  
  ],
  imports: [
    BrowserModule ,
    NgbModalModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
     MatCheckboxModule 
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
