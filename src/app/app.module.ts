import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BComponent } from './b/b.component';
import { AComponent } from './a/a.component';
import { CComponent } from './c/c.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, BComponent, AComponent, CComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
