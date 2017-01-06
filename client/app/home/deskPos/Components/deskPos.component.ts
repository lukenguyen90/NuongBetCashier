import { Component} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Desk } from '../../../Models/desk';
import { DeskService } from '../../../Services/desk.service';

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

export class DeskPosComponent {
	constructor(
		private deskService : DeskService
	) {}

	desks : Desk[];

	loadDesks() {
		return this.deskService.getDesks()
								.subscribe(
                               desks => this.desks = desks, //Bind to view
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
	}

	ngOnInit() {
		this.loadDesks()
	}
}

