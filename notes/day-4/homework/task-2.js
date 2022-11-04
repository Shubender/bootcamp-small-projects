// Write a function that takes an array as a parameter and returns a new array containing all of the items that are in the array that was passed in but in reverse order. Unlike the reverse method that all arrays have, this function should leave the original array unchanged.


function myReverse(arr) {
    var storage = arr;
    return storage.reverse();
}

var a = [1, 2, 3];

console.log(a);
console.log(myReverse(a));