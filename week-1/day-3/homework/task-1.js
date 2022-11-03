// Write a function that takes any number of numbers as arguments and returns the sum of those numbers.


const sum = function (numbers) {
    numbers = Number(numbers);
    for (var i = 1; i < arguments.length; i++) {
        numbers += Number(arguments[i]);
    }
    return numbers;
};

console.log(sum(5, 10)); //15
console.log(sum(5, 10, 15)); //30
console.log(sum(5, 10, 15, 100, 200)); //330