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
			var instanceObject = {	// the instance object
				call: function(funcName, parameters){		// method to search for the function in the tree
					// TODO: search for function
					if (this.hasOwnProperty(funcName)) {
						return this[funcName].apply(this,parameters);
						console.log("call function existed in object");
					}else{
						console.log("call function did not exist in object");
						for (parent in this.superClasses) {
							if (typeof this.call == 'function') { // check if call function exists
                                parent.call(funcName, parameters);
                          	}
                     	}
					}
				}
			}
			return instanceObject;
		}
	};
	return classObject;
}


// TESTS
var class0 = createClass("Class0", null);
class0.func = function(arg) { return "func0: " + arg; };
var class1 = createClass("Class1", [class0]);
var class2 = createClass("Class2", []);
class2.func = function(arg) { return "func2: " + arg; };
var class3 = createClass("Class3", [class1, class2]);
var obj3 = class3.new();
var result = obj3.call("func", ["hello"]);
