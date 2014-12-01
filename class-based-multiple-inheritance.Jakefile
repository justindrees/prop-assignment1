/*
CLASS-BASED MULTIPLE INHERITANCE
Make a method 'createClass(className, [superclasses])'
It returns an object that points to the class.
Can only instantiate with superclasses that exist.
Note (task c): prevent infinite loop when using .call()

var class0 = createClass(class0, []);
class0.new();
obj0.class(funcName, []); //Search in class object for function, then look in inherited classes
*/

function createClass(className, superClassList) {
	var classObject = {				// defines the class
		name: className,
		superClasses: superClassList,
		new: function() {			// creates an instance of the defined class
			var superC = superClassList;
			var n = className;
			var t = this;
			var result;
			var instanceObject = {	// the instance object
				call: function(funcName, parameters){		// method to search for the function in the tree
					if(typeof t[funcName] == 'function'){
						result = t[funcName].apply(t,parameters);
						return result;
					}else if(superC != null || superC == 'undefined'){
						for(i = 0; i < superC.length; i++){
							new1 = superC[i].new();
                        	result = new1.call(funcName, parameters);
						}
					}
					return result;
				}
			}
			return instanceObject;
		}
	}
	return classObject;
};

// TESTS

/*var class0 = createClass("Class0", null);
class0.func = function(arg) { return "func: " + arg; };
var class1 = createClass("Class1", [class0]);
var obj = class1.new();
var result = obj.call("func", ["hello"]);
console.log("result: "+result);*/

//---------------------------

/*var class0 = createClass("Class0", null);
class0.func0 = function(arg) { return "func0: " + arg; };
var class1 = createClass("Class1", [class0]);
var class2 = createClass("Class2", []);
class2.func2 = function(arg) { return "func2: " + arg; };
var class3 = createClass("Class3", [class1, class2]);
var obj3 = class3.new();
var result = obj3.call("func0", ["hello"]);
console.log("result: "+result);*/
