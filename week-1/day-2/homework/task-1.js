// 1th task

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
