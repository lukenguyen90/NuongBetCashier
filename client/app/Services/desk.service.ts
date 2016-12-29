// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Desk }           from '../Models/desk';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DeskService {
	// Resolve HTTP using the constructor
	constructor (private http: Http) {}
	// private instance variable to hold base url
    private desksUrl = 'http://localhost:9009/api/desk/getDesks'; 

    getDesks() : Observable<Desk[]> {
    	return this.http.get(this.desksUrl)
    					.map((res:Response) => res.json())
    					.catch((error:any) => Observable.throw(error.json().error) || 'Server error');
    }

}