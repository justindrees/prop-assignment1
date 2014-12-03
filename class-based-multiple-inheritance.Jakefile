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
					console.log("---------call function invoked--------- "+n);
					if(typeof t[funcName] == 'function'){
						result = t[funcName].apply(t,parameters);
						console.log("FOUND IN: "+n);
						return result;
					}else if(superC != null || superC == 'undefined'){
						console.log("WASNT FOUND IN: "+n+"....beginning for loop of its superclasses");
						console.log(n+" superclasses are: "+superC+" and the length of superC is: "+superC.length);
						for(var i = 0; i < superC.length; i++){
							console.log(t.name+" calling on "+superC[i].name);
							console.log("1 superC length of "+t.name+": "+superC.length+" i: "+i);
							new1 = superC[i].new();
                        	result = new1.call(funcName, parameters);
                        	if(result != undefined){			// if result has been found, break away from further search
                        		break;
                        	}
                        	console.log("---------back in call function of "+n+"---------");
                        	console.log("2 superC length of "+t.name+": "+superC.length+" i: "+i);
						}
						return result;
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

var class4 = createClass("Class0", null);
class4.func4 = function(arg) { return "func4: " + arg; };
classY = createClass("ClassY", []);
classY.funcY = function(arg) { return "funcY: " + arg; };
var class5 = createClass("Class5", [class4,classY]);
var class6 = createClass("Class6", []);
class6.func6 = function(arg) { return "func6: " + arg; };
var class7 = createClass("Class3", [class5,class6]);

var class0 = createClass("Class0", [class7]);
class0.func0 = function(arg) { return "func0: " + arg; };
var class1 = createClass("Class1", [class0]);
var class2 = createClass("Class2", []);
class2.func2 = function(arg) { return "func2: " + arg; };
var class3 = createClass("Class3", [class1, class2]);


var obj3 = class3.new();
var result = obj3.call("123", ["hello"]);
console.log("result: "+result);



/*var class0 = createClass("Class0", null);
class0.func0 = function(arg) { return "func0: " + arg; };
var class1 = createClass("Class1", [class0]);
var class2 = createClass("Class2", []);
class2.func2 = function(arg) { return "func2: " + arg; };
var class3 = createClass("Class3", [class1, class2]);
var obj3 = class3.new();
var result = obj3.call("func0", ["hello"]);
console.log("result: "+result);*/


/*var class0 = createClass("Class0", null);
class0.func = function(arg) { return "func: " + arg; };
var class1 = createClass("Class1", [class0]);
var obj = class1.new();
var result = obj.call("func", ["hello"]);
console.log("result: "+result);*/
