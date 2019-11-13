import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './servers/server.component';
import { RedComponent } from './red/red.component';
import { YellowComponent } from './yellow/yellow.component';
import { GreenComponent } from './green/green.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    RedComponent,
    YellowComponent,
    GreenComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
