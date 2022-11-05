// Write a function called each that accepts either an object or an array as its first parameter and a callback as its second parameter.

// If the first parameter is an object, it should loop over the object's properties and call the callback for each one. The property value should be the first parameter passed to the callback and the property name should be the second.

// If the first parameter is an array, it should loop over the array's elements and call the callback for each one. The array element should be the first parameter passed to the callback and the index should be the second.


function myFunc(first, second) {
    console.log(first, second);
}

function each(myData, myFuncParam) {
    if (typeof myData === "object" && !Array.isArray(myData)) {
        for (const property in myData) {
            myFuncParam(myData[property], property);
        }
        console.log("object is work well!");
    }

    if (Array.isArray(myData)) {
        for (const element of myData) {
            myFunc(element, myData.indexOf(element));
        }
        console.log("array is work well!");
    }
}

const myObj = {
    a: 10,
    b: 20,
};

const myArr = ["a", "b"];

each(myObj, myFunc);
each(myArr, myFunc);



// Write a function that takes an array as a parameter and returns a new array containing all of the items that are in the array that was passed in but in reverse order. Unlike the reverse method that all arrays have, this function should leave the original array unchanged.


function myReverse(arr) {
    var storage = arr;
    return storage.reverse();
}

var a = [1, 2, 3];

console.log(a);
console.log(myReverse(a));



// Write a function called getLessThanZero that expects an array of numbers to be passed to it and returns a new array containing only those numbers from the array that was passed in that are less than zero.

function getLessThanZero(arr) {
    var result = arr.filter(num => num < 0);
    return result ;
}


console.log(getLessThanZero([1, 2, -1, -90, 10])); //[-1, -90]
console.log(getLessThanZero([1, 2])); //[]