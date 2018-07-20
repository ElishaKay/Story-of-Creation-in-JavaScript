<h1>The Story of Creation (with JS)</h1>

In this tutorial, we'll play the role of God as he embarks on creating his world.

As we begin to construct our creatures, we have several things we need to take into account:

a) Should our Creatures have free will?
b) How unique should each instance of a creature be (i.e. Should all monkies love bananas? Or, will some monkeys prefer mangoes?)
c) How will we categorize our creatures (Species? Sex? Age?)
d) What is the lowest common denominator[s] of all living creatures?

This will allow us to dig into some special features of the JavaScript Language, including:

- [Prototypes](#prototypes)
- [Var / Let / Const](#var-let-or-const)
- [Classes](#classes)
- [Other Projects](#other-projects)
- [More Good Resources on JavaScript](#more-good-resources-on-javascript)




Prototypes
--------

Check out the folder in the root directory called "Prototypes". You'll notice 6 JS files there. Each file is meant to portray a different step of the development process.

<img src="_img/creation.png">


Step 1: Creating the Constructor Function for Living Things (the Power to Create A Variety of Living Things with varying Characteristics)

Step 2: Creating the Monkey while specifying his favorite Food

Step 3: Creating the Woman while specifying her favorite Food

Step 4: Attempting to Change the Favorite Food of both the Monkey and the Woman with one line of code.

Step 5: When we create the Man, what if we don't stipulate what his favorite food will be? Will the prototype feature allow us to easily change his taste even after he's been created?

Step 6: Rethinking The Story of Creation.

What if we don't stipulate the Monkey and Woman's favorite food when creating them? Will prototypes allow us to control the market's taste easily with one line of code? (Hint: This is where the Prototype Feature shines. Read on to learn why...)




<h2>When Should You Use Prototypes?</h2>

Prototypes allow you to easily define methods to all instances of a particular object. The beauty is that the method is applied to the prototype, so it is only stored in the memory once, but every instance of the object has access to it.


<h2>How Do Prototypes Work?</h2>

A function is just a special kind of object, and like any object a function can have properties. Functions automatically get a property called prototype, which is just an empty object. 

When an object is constructed using the 'new' keyword, it gets some special treatment - it inherits all of the properties of its constructor’s prototype. It also receives a built in constructor property (which is something you can’t set manually). It can only be set for you, as part of construction with the new keyword.


Var Let Or Const
--------

<img src="_img/js-hoisting-variables.png">

All declarations (var, let, const, function, function*, class) are "hoisted" in JavaScript. 
var/function/function* are initialised with undefined or the (generator) function right when the binding is created at the top of the scope. The lexically declared variables (let/const/class) however stay uninitialised. This means that a ReferenceError exception is thrown when you try to access it. It will only get initialised when the let/const/class statement is evaluated, everything before (above) that is called the temporal dead zone.

<h1>Hoisting and Functions</h1>

<img src="_img/js-hoisting-and-functions.png">

The temporal dead zone is not a syntactic location, but rather the time between the variable (scope) creation and the initialisation. let/const/class will throw an exception if you access the variable before the initialisation.


<h1>Block Scope with Let</h1>

<img src="_img/block-scope-with-let.png">

Is there any difference between let and const in this matter?

The only difference between them is that a constant must be and can only be assigned in the initialiser part of the declaration (const one = 1;


Classes
--------

If you'd like to compare how objects were instantiated before and after ES6, you can view the directory in the root folder called "classes". The aim is to cover the Constructor and Super elements of classes, and the purpose of subclasses.



Other Projects
--------


React Fundamentals. 

https://github.com/ElishaKay/react-fundamentals

Angular 2 Crash Course:

https://www.slideshare.net/ElishaKramer/angular-2-crash-course-72995467

The MEAN Stack (mongo, express, angular and NodeJS): 

https://www.slideshare.net/slideshow/embed_code/key/2oNlvbQwI0CY0Q 

Object Instantiation Before and After ES6:

https://codepen.io/Kramer1346/pen/oZbRBO?editors=0012


More Good Resources on JavaScript
--------

Objects in JS: Old School:
https://medium.com/dailyjs/instantiation-patterns-in-javascript-8fdcf69e8f9b

Objects in JS with ES6:

https://scotch.io/tutorials/better-javascript-with-es6-pt-ii-a-deep-dive-into-classes


