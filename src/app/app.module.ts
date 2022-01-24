import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador/contador.component';
import { HeroesModulo } from './heroes/heroes.module';


@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
  
  ],
  imports: [
    BrowserModule,
    HeroesModulo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
