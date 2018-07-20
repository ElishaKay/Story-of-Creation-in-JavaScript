//Before ES6:

var person = function(name, age, homeState){
  /* this = Object.create(person.prototype) */
  this.name     = name;
  this.age  = age;
  this.homeState = homeState;

  /* return this */
};

person.prototype.sayName = function(){
  alert('in the prototype function: ' + this.name);
};

// Later
var tyler = new person("Tyler", 23, "Utah");
var joey = new person("Joey", 25, "Arkansas");

alert('after defining the joey object: ' + joey.name)


//Same Concept in ES6!
console.log('Now the ES6 Way:')

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  
  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.height * this.width;
  }
}

// Below, we create an instance of the Rectangle class.
// In other words, our Rectangle Blueprint is being "Instantiated" (remember that word)
var square = new Rectangle(10, 10);

alert(`Same Concept in ES6 Produces the square's area:  ${square.area}`);