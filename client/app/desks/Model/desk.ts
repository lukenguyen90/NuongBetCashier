export class Desk{
	constructor(
		public deskId: number,
		public status: number,
		public type: string,
		public isactive: boolean,
		public pos: string,
		public name: string,
		public shopId: number,
		public sorted: number,
		public categoryId: number
	){}
}