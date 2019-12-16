import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DescriptionComponent } from './description/description.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, DescriptionComponent, SidemenuComponent, NavComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
