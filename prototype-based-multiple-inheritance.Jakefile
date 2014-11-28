var myObject = {
//	prototypeList: [],
	create: function(protoList) {
		var copy = {
			prototypeList: [],
			visitedList: [],
			call: function(funcName, parameters,visitedList) {
				console.log("call function invoked");
				// Check if this object has a function whose name == funcName
				if (this.hasOwnProperty(funcName)) {
					console.log("Function found");
					this[funcName].apply(this,parameters);

					// TODO: figurefuncNamellparameters(parameters)
					// and return the result of calling funcName(parameters)
				} else {
					// Loop through prototypeList to check if this object has
					// a parent with a function whose name == funcName
					visitorList.push(this);		// put current object in visitedList
					for (parent in this.prototypeList) {
						if (typeof this.call == 'function') { // check if call function exists
							console.log("call function existed in object");
							parent.call(funcName, parameters,visiedList);
						}
					}
				}
			}
		};
		copy.prototype = myObject;

		if (protoList == null) {
			copy.prototypeList = [];
		} else {
			for (element in protoList) {
				copy.prototypeList.push(element);
			}
		}
		return copy;
	}
}


// Test code
// Create a new object "obj0" of myObject that doesn't inherit
var obj0 = myObject.create(null);

// Add a method to obj0 called func
obj0.func = function(arg) { 
	console.log("Found function invoked");
	return "func0: " + arg; };

// Create a new object obj1 of myObject that inherit obj0
var obj1 = myObject.create([obj0]);

/* Create variable that uses 'call' method to see if obj1 has a method
named 'func' with parameter ["hello"]  or if obj1 inherits another object with this method
*/
var result1 = obj0.call("func", ["hello"]);
//var result2 = obj1.call("func", ["hello"]);

// Print result to screen. It should display "func0: hello"
//debug(result1);
//debug(result2);



/*
http://stackoverflow.com/questions/9163341/multiple-inheritance-prototypes-in-javascript
http://www.phpied.com/3-ways-to-define-a-javascript-class/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript
http://stackoverflow.com/questions/2064731/good-example-of-javascripts-prototype-based-inheritance
http://javascript.info/tutorial/inheritance
http://javascriptweblog.wordpress.com/2011/05/31/a-fresh-look-at-javascript-mixins/
http://stackoverflow.com/questions/3007460/javascript-check-if-anonymous-object-has-a-method


PROTOTYPE-BASED MULTIPLE INHERITANCE
Task is to create an object 'myObject' with a 'create' method that supports
multiple inheritance of functions: 'myObject.create(prototypeList)',
where 'prototypeList' is a list of prototype objects (which may be null or empty).
The 'create' method should be inherited by all objects created by the
'create' method.

The multiple inheritance should work as follows: when invoking a function 
of an object that does not exists within the object itself then it is first
search for in its first prototype, then in its second prototype etc. 
When searching for a function in a prototype, if it does not exist within
the prototype then it is search for in the prototypes of the prototype etc. 
Thus the search for a function should be performed in a depth-first manner 
and from beginning-to-end in each object's list of prototypes.

Object1 inherits another object2. that is, object1 is the prototype of object2

Example:
var obj0 = Object.create(null)
var obj1 = Object.create(obj0)
//obj0 is the prototype of obj1. So obj1 inherits from obj0

Inheritance is dynamic. So, we can later change from which object an object inherits.

obj1.getPrototype(); //this returns obj1's prototype
obj1.setPrototype(obj0) //this sets obj1's prototype to obj0

To be able to control the function lookup ourselves you also need 
to implement a 'call(funcName, parameters)' method, which should search 
for a function as described above. The 'call' method takes two parameters: 
the name of the function 'funcName' and a list of parameters 
'parameters' to the function. 
The 'call' method should be implemented in 'myObject' and should be inherited 
by all objects created by 'myObject.create(prototypeList)'.

Note:
There can be name clashes (same name of prototype which another inherits).
So use depth-first search from left to right and take the first that matches.
There's an in-built lookup function:
obj.funcA;
But we should implement call method:  obj.call(funcA, [...])
It searches tree to find the appropriate function to use.


Example:
var obj0 = myObject.create(null);
obj0.func = function(arg) { return "func0: " + arg; };
var obj1 = myObject.create([obj0]);
var obj2 = myObject.create([]);
obj2.func = function(arg) { return "func2: " + arg; };
var obj3 = myObject.create([obj1, obj2]);
var result = obj3.call("func", ["hello"]);
*/
