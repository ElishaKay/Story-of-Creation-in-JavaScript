// Step 6: Seeing as Prototypes allow us to 
	//  dynamically change the nature of our Creations,
		// Let's create our world like that

let livingThing = require('./step1');

let monkey = new livingThing('chimpanzee','male', 5);
let woman = new livingThing('human','female', 25);
let man = new livingThing('human','male', 30);

livingThing.prototype.favoriteFood = 'lettuce';
console.log(`This is the prototype of livingThings: `,livingThing.prototype);

console.log(`The man's favorite food is now: ${man.favoriteFood}`);
console.log(`The woman's favorite food is now: ${woman.favoriteFood}`);
console.log(`The monkey's favorite food is now: ${monkey.favoriteFood}`);

livingThing.prototype.favoriteFood = 'McDonalds';
console.log(`To control our creations, lets set
the prototype of livingThings to love McDonalds `,livingThing.prototype);

console.log(`The man's favorite food is now: ${man.favoriteFood}`);
console.log(`The woman's favorite food is now: ${woman.favoriteFood}`);
console.log(`The monkey's favorite food is now: ${monkey.favoriteFood}`);