// Write a function called translateNumberToGerman that tries to get a number between 1 and 10 by calling another function called askForNumber. Here is the askForNumber function you should use:

// If askForNumber returns a number between 1 and 10, translateNumberToGerman should return the German translation of that number as a string.

// If askForNumber does not return a number between 1 and 10 and instead throws an exception, translateNumberToGerman should log the error message to the console and restart the whole process. The user should keep being prompted to input a number between 1 and 10 until she does so.

/*

Create array with German numbers
Create translateNumberToGerman
Add logic to translateNumberToGerman (if num / if not num)

*/

const germanNums = [
    "Eins",
    "Zwei",
    "Drei",
    "Vier",
    "Fünf",
    "Sechs",
    "Sieben",
    "Acht",
    "Neun",
    "Zehn",
];

function askForNumber() {
    var num = prompt("Please enter a number between 1 and 10");
    if (num >= 1 && num <= 10 && num == parseInt(num)) {
        return num;
    }
    throw new Error("Bad number");
}

function translateNumberToGerman() {
    try {
        const getNum = askForNumber();
        
        if (getNum >= 0 && getNum <= 10) {
            const index = getNum - 1;
            console.log("German number:", germanNums[index]);
            alert("German number: " + germanNums[index]);
            return germanNums[index].toString();
        }
    } catch (error) {
        console.log(error.name, error.message);
        translateNumberToGerman();
    }
}

translateNumberToGerman();
