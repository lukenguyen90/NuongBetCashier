import { Component } from '@angular/core';
import { DeskPosComponent } from './home/deskPos/components/deskPos.component';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1><br/>
			<desk-list></desk-list>
  			`
})
export class HomeComponent  {
	name = "angular";
}
