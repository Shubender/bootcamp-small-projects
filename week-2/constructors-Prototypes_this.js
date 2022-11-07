// Write a constructor called Rectangle that accepts two numbers (width and height) as parameters. 
// Rectangle instances should have a method called getArea that returns the instance's width multiplied by its height. 

// Write another constructor called Square that accepts one number (which will serve as both width and the height) as a parameter.
//  Instances of Square should also have a getArea method but you should not rewrite the getArea function you wrote for Rectangle. 
//  Square instances should use the same getArea method that Rectangle instances do.

// var square = new Square(4);
//  square.getArea(); //16

//  var rect = new Rectangle(4, 5);
//  rect.getArea(); //20

console.log('TASK 1:');

function Rectangle(w, h) {
    this.width = w;
    this.height = h;

    this.getArea = function () {
        return this.width * this.height;
    };
}


var rect = new Rectangle(4, 5);
console.log("Rectangle is:", rect.getArea());

function Square(number) {
    
    Rectangle.call(this, number, number);
}

var square = new Square(4);
console.log("Square is:", square.getArea());




// Write a function called invertCase that expects a string as a parameter. This function should return 
// a new string with all the same characters as the string that was passed in but with the cases of the 
// alphabetic characters switched. Uppercase characters should become lowercase and lowercase letters should 
// become uppercase. Characters that are not alphabetic should not change. The toUpperCase and toLowerCase 
// methods that all strings have will come in handy here.

console.log("TASK 2:");

function invertCase(string) {
    var newStr = "";
    for (var i = 0; i < string.length; i++) {
        if (string[i] === string[i].toLowerCase()) {
            newStr += string[i].toUpperCase();
        } else {
            newStr += string[i].toLowerCase();
        }
    }
    return newStr;
}

console.log(invertCase("Hello World1!"));


// Write a constructor called Countdown that accepts a single argument - the number of seconds to count down. 
// It should be possible to call the start method of instances of Countdown to initiate the countdown. 
// Once the countdown starts, it should count down to zero starting with the number that was passed to the constructor 
// and logging each number to the console with a one second delay.

console.log("TASK 3:");

function Countdown (numSec) {
    this.num = numSec;
    this.start = () => {
        if (this.num > 0) {
            setTimeout(() => {
                console.log("Countdown:", this.num--);
                this.start();
            }, 1000);
        }
    };
}

var countdown = new Countdown(5);
countdown.start();


