//callback function will be executed right before the paint of the next frame
// requestAnimationFrame(() => {
//     console.log('log from request animation frame');
// });

// console.log('after request animation frame');

// //you specify a number when callack function is executed
// // setTimeout(() => {
// //     console.log("log from setTimeout");
// // }, 1000);

// function doSomethingOnEachPaint() {
//     requestAnimationFrame(() => {
//         console.log('log before paint');
//         doSomethingOnEachPaint();
//     })
// }

// doSomethingOnEachPaint();

const headlines = document.getElementById("headlines");
let firstLink = document.querySelector("a");

let widthOfHeadlines = headlines.offsetWidth;

let currentLeftValue =
    widthOfHeadlines; /* initally set to the width of headlines. will be changed in moveLeft function */
function moveLeft() {
    if (headlines.offsetLeft + firstLink.offsetWidth < 0) {
        headlines.removeChild(firstLink);
        headlines.appendChild(firstLink);
        firstLink = document.querySelector("a");
        currentLeftValue = 0;
        headlines.style.left = currentLeftValue + "px";
    }
    requestAnimationFrame(() => {
        headlines.style.left = currentLeftValue + "px";
        currentLeftValue--;
        moveLeft();
    });
}

// Check every time your function is called if the sum of headlines.offsetLeft and firstLink.offsetWidthis
// smaller then 0

// if it is smaller than 0:
// remove the firstLink with removeChild from the headlines
// append the firstLink with appendChild to the headlines
// get and save the new firstLink with querySelector for example
// reset the currentLeftValue to 0 and set the style.left of headlines to the new value

moveLeft();
