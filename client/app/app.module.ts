import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { HomeComponent }  from './home.component';
import { DeskPosComponent } from './home/deskPos/components/deskPos.component';

import { DeskService } from './Services/desk.service';
@NgModule({
  imports:      [ BrowserModule, HttpModule, JsonpModule ],
  declarations: [ HomeComponent, DeskPosComponent ],
  bootstrap:    [ HomeComponent, DeskPosComponent ],
  providers: [DeskService]
})
export class AppModule { }
