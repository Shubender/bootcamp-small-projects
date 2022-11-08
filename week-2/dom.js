// Write a function that expects a string representing a selector to be passed as a parameter. 
// The function should find all the elements in the document that match the selector and 
// change their style so that the text they contain is italic, underlined, and bold.



function changeText(string) {
    const byTagName = document.querySelectorAll(string);
    const myArray = Array.from(byTagName);

    console.log(myArray);

    for (const element of myArray) {
        element.style.fontStyle = "italic";
        element.style.fontWeight = "bold";
        element.style.textDecoration = "underline";
    }

    //body.addClass("change-font-style)");
    //result.addClass("change-font-style)");
    //result.classList.add('change-font-style');
}

changeText('p');




// Write a function that expects a string representing a class name to be passed as a parameter. 
// The function should return an array containing all the elements in the document that have 
//the class that was passed in.


function returnArr (name) {
    const getElementsByClassName = document.getElementsByClassName(name);
    const paragraphArray = Array.from(getElementsByClassName);
    return paragraphArray;
}

let work = returnArr('change-font-style');
console.log(work);



// Write a function that inserts an element into the body of the currently loaded page. 
// That element should have fixed position, z-index of 2147483647, left of 20px, top of 100px,
//font-size of 200px, and contain the text 'AWESOME'.

function addElement() {
    const newElement = document.createElement("p");

    newElement.textContent = "AWESOME";
    newElement.style.position = 'fixed';
    newElement.style.zIndex = 2147483647;
    newElement.style.left = 20 + 'px';
    newElement.style.top = 100 + "px";
    newElement.style.fontSize = 200 + "px";

    const myBody = document.querySelector('body');
    myBody.appendChild(newElement);
}

addElement();