//Make a JSON validator website. It should have a <textarea> where users can input their JSON. 
//After clicking a button a message should appear, telling users if the JSON is valid or not.

/*

Create textarea
Create button
Get data from textarea
Check data for right JSON
return massage with Data is OK / Wrong Data

*/



const textarea = document.getElementById("textareaID");
//console.log("textarea:", textarea);
const myButton = document.querySelector("button");
//console.log("myButton:", myButton);

let textareaVal;

document.addEventListener("keyup", function () {
    textareaVal = textarea.value;
    //console.log("textarea Val:", textareaVal);
});

myButton.addEventListener("click", function () {
    //console.log("Button clicked");
    try {
        let json = JSON.parse(textareaVal);
        console.log("this is our JSON: ", json);
        alert("JSON data is OK!");
    } catch (e) {
        console.log(e);
        alert("JSON data is wrong!");
    }
});