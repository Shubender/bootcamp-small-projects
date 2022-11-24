// Write a function that takes two arrays as arguments and returns a new array containing all of the items
//  in the two arrays passed to it. This function should

// leave the original arrays unchanged

// contain no loops of any kind. That includes for, for...in, for...of, while, or do...while

// not call slice or any other method on the two arrays passed to it

// not call push or concat on any array in any way

let newArr;

function addArr(arr1, arr2) {
    return (newArr = [...arr1, ...arr2]);
}

const firstArr = [1, 3, 7, 4, 5];
const secondArr = [2, 8, 1, 5, 7];
addArr(firstArr, secondArr);
console.log({ newArr });