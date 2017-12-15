export class User {
	fname: string;
	lname: string;
	username: string;
	password: string;
	email: string;
	qOne: string;
	id: string;

	constructor(fname: string, lname: string, username: string, password: string,
		email: string, qOne: string, id: string) { 
			this.fname = fname;
			this.lname = lname;
			this.username = username;
			this.password =  password;
			this.email = email;
			this.qOne = qOne;
			this.id = id;
	}
}