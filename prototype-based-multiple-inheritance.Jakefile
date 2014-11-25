var myObject = {
	create: function(protoList) {
		this.prototypeList = [];

		if (protoList == null) {
			this.prototypeList = [];
		} else {
			for (element in protoList) {
				this.prototypeList.push(element);
			}
		}
		var testFunction = function() {
			return true;
		}
	},
	call: function(funcName) {
		return "Not yet implemented";
	}
}

var list = [1,2,3]
var obj0 = myObject.create(list);


/*
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
