import { Component } from '@angular/core';
import { DeskComponent } from './desks/components/desk.component';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1><br/>
			<desk-list></desk-list>
  			`
})
export class AppComponent  {
	name = "angular";
}
