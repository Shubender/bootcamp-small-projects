function toAlternatingCase(str) {
    // Define your method here :)
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            newStr += str[i].toLowerCase();
            //console.log(newStr);
        } else if (str[i] === str[i].toLowerCase()) {
            newStr += str[i].toUpperCase();
            //console.log(newStr);
        }

        //console.log(newStr);
    }
    console.log(newStr);
    return newStr;
}

let myStr = "Hello World123";

toAlternatingCase(myStr);
