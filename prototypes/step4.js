// Step 4: Do we have a Dashboard to Control on our Created Living Things?
 // i.e. Can we change their Favorite Food with one 
	// command even after they've been created?

let livingThing = require('./step1');
let monkey = require('./step2');
let woman = require('./step3');

livingThing.prototype.favoriteFood = 'peanut-butter and jelly';
console.log(`This is the prototype of livingThings: `,livingThing.prototype);

console.log(`this is the woman.constructor`,woman.constructor);
console.log(`The problem is that when created the woman and the monkey, 
	we stipulated exactly what their favorite food will be. Now,
	we can't unanimously change the FavoriteFood of all Living Things at once`)

console.log(`The woman's favorite food is still: ${woman.favoriteFood}`);
console.log(`The monkey's favorite food is still: ${monkey.favoriteFood}`);