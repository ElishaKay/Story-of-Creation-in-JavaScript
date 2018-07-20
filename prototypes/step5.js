// Step 5: Do we have a CRM on our Created Living Things?
 // i.e. Can we change their Favorite Food with one 
	// command even after they've been created?
		// Let's try using prototypes for this.
			// With Prototypes we can dynamically control our Creations

let livingThing = require('./step1');

let man = new livingThing('human','male', 30);
console.log('Here is the man object: ', man);
console.log(`Here is the man's favorite food before 
	assigning a prototype to livingThings: `, man.favoriteFood);

livingThing.prototype.favoriteFood = 'peanut-butter and jelly';
console.log(`This is the prototype of livingThings: `,livingThing.prototype);

console.log(`Here is the man's favorite food after 
		assigning a prototype to livingThings: `, man.favoriteFood);