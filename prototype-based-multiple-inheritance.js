var myObject = {
    create: function(protoList) {   
        var copy = {
            prototypeList: [],
            call: function(funcName, parameters) {
                // Check if this object has a function whose name == funcName
                if (this.hasOwnProperty(funcName)) {
                    return this[funcName].apply(this,parameters);
                } else {
                    // Loop through prototypeList to check if this object has a parent with a function == funcName
                    for (var i = 0, ic = this.prototypeList.length; i < ic; i++) {
                        var parent = this.prototypeList[i];     // local variable for the object in the prototypeList

                        if (parent.hasOwnProperty(funcName)) {  // check if parent has a function == funcName
                            i = ic; // stop outer loop by setting continuation condition to false
                            return parent[funcName].apply(parent,parameters);
                        } else if (parent.prototypeList.length > 0) {   // check if parent has parents in the prototypeList
                            for (var j = 0, jc = parent.prototypeList.length; j < jc; j++) {    // Loop through parent's parents in prototypeList
                                var parentsParent = parent.prototypeList[j];    // local variable for the object in the prototypeList
                                var funcInParent = parentsParent.call(funcName, parameters);   // use call method to recursively check if parentsParent (or any of its parents) has a function == funcName
                                if (funcInParent != null) { // if the parentsParent (or any of its parents) does have a function == funcName then funcInParent will not equal null
                                    i = ic;                 // stop outer loop by setting continuation condition to false
                                    j = jc;                 // stop inner loop by setting continuation condition to false
                                    return funcInParent;
                                }
                            }
                        }
                    }
                }
            }
        };
        copy.prototype = myObject;

        if (protoList == null) {        // if the protoList == null, then the object doesn't inherit any parents
            copy.prototypeList = [];    // set the prototype's list of parents to an empty array
        } else {                        // if the protoList == null, then the object does inherit parent(s)
            for (var i = 0, ic = protoList.length; i < ic; i++) {   // loop through the array of parents
                if (protoList[i].prototypeList.indexOf(copy) != -1) {   // if the parent has this object as a parent, then throw error
                    throw "IllegalArgument";                            // but how can the parent have this object as a parent since this object is being created now?
                } else {                                                // else if the parent does not have this object as a parent
                    copy.prototypeList.push(protoList[i]);              // add parent to array of parents for this object
                }
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