import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { DeskComponent } from './desks/components/desk.component';

import { DeskService } from './desks/services/desk.service';
@NgModule({
  imports:      [ BrowserModule, HttpModule, JsonpModule ],
  declarations: [ AppComponent, DeskComponent ],
  bootstrap:    [ AppComponent, DeskComponent ],
  providers: [DeskService]
})
export class AppModule { }
