// Step 1: Creating the Constructor Function for Living Things

let livingThing = function(species, sex, age, favoriteFood){
  this.species = species;  
  this.sex = sex;
  this.age = age;
  if(favoriteFood){
  	this.favoriteFood = favoriteFood;
  }
};

//For accessing our livingThing Constructor function from other files 
module.exports = livingThing;