// Step 2: Creating the Monkey and his favorite Food

let livingThing = require('./step1');

let monkey = new livingThing('chimpanzee','male', 5, 'banana');

console.log(`The monkey has been created and his favoriteFood is: ${monkey.favoriteFood}`);
console.log(`Here's all the information we have about the monkey: `);
console.log(monkey);

//For accessing our monkey from other files 
module.exports = monkey;