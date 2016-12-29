import { Component} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Desk } from '../model/desk';
import { DeskService } from '../services/desk.service';

@Component({
	selector: 'desk-list',
	template: `
			 	<div class="col-xs-6 col-md-3 desk-pos" *ngFor="let desk of desks; let i=index">
		            <div class="desk-pos-name">{{desk.name}}</div>
		            <div class="desk-pos-type">
		                {{desk.type}}
		            </div>
		        </div>
			`
})

export class DeskComponent {
	constructor(
		private deskService : DeskService
	) {}

	desks : Desk[];

	loadDesks() {
		return this.deskService.getDesks()
								.subscribe(
                               desks => this.desks = desks.data, //Bind to view
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
	}

	ngOnInit() {
		this.loadDesks()
	}
}

