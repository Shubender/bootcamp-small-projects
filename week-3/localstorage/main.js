// Make a static HTML page that has a large <textarea> on it. When the user types in it, save the value in
//  localStorage. When the user comes back to the page after navigating away or closing the browser, the stored
//   value should automatically appear in the <textarea>.



const textarea = document.getElementById("bigtextArea");

let textareaVal = [];
//let savedText = [];


textarea.addEventListener("keyup", function () {
    textareaVal = textarea.value;
    console.log("textarea Val:", textareaVal);

    try {
        localStorage.setItem("userText", textareaVal);
        //savedText = localStorage.getItem("userText");
        //console.log("savedText", savedText);
    } catch (e) {
        console.log("e", e);
    }
});

textarea.value = localStorage.getItem("userText");


