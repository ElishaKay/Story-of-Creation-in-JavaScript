All declarations (var, let, const, function, function*, class) are "hoisted" in JavaScript. 
`
var/function/function* are initialised with undefined or the (generator) function right when the binding is created at the top of the scope. The lexically declared variables (let/const/class) however stay uninitialised. This means that a ReferenceError exception is thrown when you try to access it. It will only get initialised when the let/const/class statement is evaluated, everything before (above) that is called the temporal dead zone.
`

The temporal dead zone is not a syntactic location, but rather the time between the variable (scope) creation and the initialisation. let/const/class will throw an exception if you access the variable before the initialisation.


Is there any difference between let and const in this matter?

The only difference between them is that a constant must be and can only be assigned in the initialiser part of the declaration (const one = 1;