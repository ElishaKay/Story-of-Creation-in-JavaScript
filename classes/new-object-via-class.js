class Band {
	constructor(name, origin){
		this.name = name;
		this.origin = origin;
	}

	printName(){
		console.log(`name = ${this.name}`);
	}

	printOrigin(){
		console.log(`origin = ${this.origin}`);
	}

}

var Beatles = new Band('Beatles','UK');
console.log('Beatles:',Beatles);

class Member extends Band{
	constructor(name){
		super(name); //lets me reference parent properties from the subclass 'Member'
		this.name = 'Lemon'; //Here I can redefine a key that was formerly defined by the parent class
		console.log(this.name);
	}
}

var Paul = new Member('Paul', 'UK');

console.log(Beatles.name);
console.log(Paul.name);