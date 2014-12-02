var myObject = {
    create: function(protoList) {   
        var copy = {
            prototypeList: [],
            call: function(funcName, parameters) {
                // Check if this object has a function whose name == funcName
                if (this.hasOwnProperty(funcName)) {
                    console.log("Note: at line 8, found the function");
                    return this[funcName].apply(this,parameters);
                } else {
                    // Loop through prototypeList to check if this object has a parent with a function == funcName
                    for (var i = 0, ic = this.prototypeList.length; i < ic; i++) {
                        var parent = this.prototypeList[i];     // local variable for the object in the prototypeList
                        console.log("Note: at line 14, parent index = " + i + ", object = " + parent);

                        if (parent.hasOwnProperty(funcName)) {  // check if parent has a function == funcName
                            console.log("Note: at line 17");
                            i = ic; // stop outer loop by setting continuation condition to false
                            return parent[funcName].apply(parent,parameters);
                        } else if (parent.prototypeList.length > 0) {   // check if parent has parents in the prototypeList
                            for (var j = 0, jc = parent.prototypeList.length; j < jc; j++) {    // Loop through parent's parents in prototypeList
                                var parentsParent = parent.prototypeList[j];    // local variable for the object in the prototypeList
                                console.log("Note: at line 23, parentsParent = " + parentsParent);
                                var isFuncInParent = parentsParent.call(funcName, parameters);   // use call method to recursively check if parentsParent (or any of its parents) has a function == funcName
                                if (isFuncInParent != null) {
                                    i = ic; // stop outer loop by setting continuation condition to false
                                    j = jc; // stop inner loop by setting continuation condition to false
                                    return isFuncInParent;
                                }
                            }
                        }
                    }
                }
            }
        };

        copy.prototype = myObject;

        if (protoList == null) {
            copy.prototypeList = [];
        } else {
            for (var i = 0, ic = protoList.length; i < ic; i++) {
                copy.prototypeList.push(protoList[i]);
            }
        }
        return copy;
    }
}

// TEST CODE:
var obj0 = myObject.create(null);
obj0.func = function(arg) { return "func0: " + arg; };
var obj1 = myObject.create([obj0]);
var obj2 = myObject.create([]);
obj2.func = function(arg) { return "func2: " + arg; };
var obj3 = myObject.create([obj1, obj2]);
var result = obj3.call("func", ["hello"]);
console.log("result: " + result);

/* Notes:
There can be name clashes (same name of prototype which another inherits).
So use depth-first search from left to right and take the first that matches.
*/