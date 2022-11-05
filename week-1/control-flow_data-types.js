// Write a function named logType that expects a single argument and logs a different string 
// depending on the type/value of the argument that is passed to it. The string it logs should
//  be one of the following:

// "undefined!"
// "null!"
// "number!"
// "not a number!"
// "string!"
// "boolean!"
// "bigint!"
// "function!"
// "object!"
// "array!"
// "I have no idea!"



function logType(myVar) {
    let result = typeof myVar;

    if (myVar === null) {
        result = "null";
    }

    if (myVar !== myVar) {
        result = "NaN";
    }

    if (Array.isArray(myVar)) {
        result = "array";
    }

    switch (result) {
        case "undefined":
            console.log("undefined!");
            break;
        case "null":
            console.log("null!");
            break;
        case "number":
            console.log("number!");
            break;
        case "NaN":
            console.log("not a number!");
            break;
        case "string":
            console.log("string!");
            break;
        case "boolean":
            console.log("boolean!");
            break;
        case "bigint":
            console.log("bigint!");
            break;
        case "function":
            console.log("function!");
            break;
        case "object":
            console.log("object!");
            break;
        case "array":
            console.log("array!");
            break;
        default:
            console.log("I have no idea!");
    }
}





// Copy the following object into your code:

// var a = {
//    Berlin: 'Germany',
//    Paris: 'France',
//    'New York': 'USA'
// };
// Then create a new empty object b and use a for..in loop to iterate over all of a's properties. 
// Give b properties whose names are the values from a and whose values are the property names from a. 
// The result should be an object that looks like this:

// {
//    Germany: 'Berlin',
//    France: 'Paris',
//    USA: 'New York' 
// }



var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA",
};

var b = {};

for (var variable in a) {
    b[a[variable]] = variable;
}

console.log(b);



//Write a while or for loop that counts down from 10 to 1, logging each number to the console.



for (let i = 10; i > 0; i--) {
    console.log(i);
}
