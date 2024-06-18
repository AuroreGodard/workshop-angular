import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';


@NgModule({
  //ajout des components / directives / pipes pour composer le Module et que chaque composant se connaisse
  declarations: [
    AppComponent,
    HeroComponent,
  ],

  //import ce qui est exportable depuis les modules, des components / services / etc
  imports: [
    BrowserModule,
  ],

  //injection des services
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }