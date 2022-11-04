// Write a function called each that accepts either an object or an array as its first parameter and a callback as its second parameter.

// If the first parameter is an object, it should loop over the object's properties and call the callback for each one. The property value should be the first parameter passed to the callback and the property name should be the second.

// If the first parameter is an array, it should loop over the array's elements and call the callback for each one. The array element should be the first parameter passed to the callback and the index should be the second.

each(
    {
        a: 1,
        b: 2,
    },
    function (val, name) {
        console.log("The value of " + name + " is " + val);
    }
); // logs 'the value of a is 1' and 'the value of b is 2'

each(["a", "b"], function (val, idx) {
    console.log("The value of item " + idx + " is " + val);
});

// my code above:

function myFunc(first, second) {
    console.log(first, second);
};

function each (myData, myFunc) {
    if (logType(myData) === "object") {
        for (const property in myData) {
            myFunc();
        }
    }

    if (Array.isArray(myData)) {

    }
}

const myObj = {
    a: 1,
    b: 2
}

const myArr = ["a", "b"];

myFunc(myObj);
myFunc(myArr);