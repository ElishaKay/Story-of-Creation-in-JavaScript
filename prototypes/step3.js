// Step 3: Creating the Woman and her favorite Food
let livingThing = require('./step1');
let monkey = require('./step2');

let woman = new livingThing('human','female', 25, 'sushi');

console.log(`The woman has now also been created and her favorite food is ${woman.favoriteFood}`);

//For accessing our monkey from other files 
module.exports = woman;