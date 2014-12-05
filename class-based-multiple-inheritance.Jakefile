<!--handles circular inheritance-->

<html>
<body>
<h1></h1>
<p id="res">placeholder</p>
<script>


function createClass(className, superClassList) {
	var classObject = {				// defines the class
		name: className,
		superClasses: superClassList,
		new: function() {			// creates an instance of the defined class
			// variables copied from the class that new() is being called from into this particular instance object
			var superC = superClassList;	// give the instance object created from the class a copy of the superclasses
			var t = this;					// a copy of the class object that the new function is being called from
			var result;						// will contain the function if it is found in the tree
			var instanceObject = {			// the instance object
				call: function(funcName, parameters){		// method to search for the function in the tree
					if(typeof t[funcName] == 'function'){		// check if the function that is searched for exists in the instance
						result = t[funcName].apply(t,parameters);
						console.log("FOUND IN: "+t.name);
						return result;
					}else if(superC != null || superC == 'undefined'){		// if the list of superclasses is null or undefined there is no point to try to loop through it
						for(var i = 0; i < superC.length; i++){		// loop through the current instances superclasses
							new1 = superC[i].new();
                        	result = new1.call(funcName, parameters);
                        	if(result != undefined){			// if result has been found, break away from further search
                        		break;
                        	}
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

// TEST
var class0 = createClass("Class0", null);
class0.func0 = function(arg) { return "func0: " + arg; };
var class1 = createClass("Class1", [class0]);
var class2 = createClass("Class2", []);
class2.func2 = function(arg) { return "func2: " + arg; };
var class3 = createClass("Class3", [class1, class2]);
var obj3 = class3.new();
var result = obj3.call("func2", ["hello"]);

document.getElementById("res").innerHTML = result;

</script>
<h1></h1>
</body>
</html>
