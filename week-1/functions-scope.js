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



//Write a function named waitThenRun that takes another function as an argument. 
//It should wait 1.5 seconds and then run the function that was passed in.

//  waitThenRun(function() {
//      console.log('Hello!');
//      waitThenRun(function() {
//          console.log('Goodbye!');
//      }); // logs 'Goodbye!' 1.5 seconds later
//  }); // logs 'Hello!' 1.5 seconds later


//I try put code in function but both console.log work in one moment

// function waitThenRun(callback) {
//     setTimeout(callback, 1500);
// }


function waitThenRun(someFunc) {
    setTimeout(someFunc("Hello!"), 1500);
    setTimeout(someFunc("Goodbye!"), 3000);
}

function myFunc(string) {
    console.log(string);
}

waitThenRun(myFunc);


//This is not exactly what in the task - func waitThenRun don't takes another func

  setTimeout(function waitThenRun() {
      console.log("Hello!");
  }, 1500);

  setTimeout(function waitThenRun() {
      console.log("Goodbye!");
  }, 3000);





// Write a function that expects a number as an argument. If the value that is passed in is less than 0,
// equal to 0, or not a number, the function should return the string 'ERROR'. If the number that is passed 
// in is greater than or equal to 1000000 it should simply return the number. Otherwise it should multiply 
// the number by 10 however many times it takes to get a number that is greater than or equal to 1000000 and
// return that.

function multiplyTen(number) {
    if (number <= 0 || number !== number) {
        return "ERROR";
    } else if (number >= 1000000) {
        return number;
    } else {
        for (; number < 1000000; ) {
            number *= 10;
        }
        return number;
    }
}

 console.log(multiplyTen(10 / "sd"));

 var results = multiplyTen(10);
 console.log("The results is:", results);




// Write a function that returns a function that can be called repeatedly and passed a number
// each time. Each time it is called it should return the sum of the number that is passed in 
// and all other numbers that were passed in previous calls. That is, it should return the sum 
// of all the numbers that were ever passed to it.


var myTotaler = function() {
  var sum = 0;
    return function(num) {
      sum += num;
        return sum;
    };
};

var totaler = myTotaler();


 console.log(totaler(1)); //1
 console.log(totaler(2)); //3
 console.log(totaler(5)); //8
