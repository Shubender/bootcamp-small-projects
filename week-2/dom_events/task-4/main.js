// Make a page that has on it an element that is 200px by 200px in size and has a solid background color. 
// Nest within that element another element that is 50px by 50px in size and has a different solid background color. 
// When the user clicks on the outer element its background color should change to a randomly selected color. 
// However, if the user clicks on the inner element, the inner element's background color should change
//  to a randomly selected background color but the outer element's background color should not change at all.

const mySquare = document.querySelector(".big-square");
const mysmallSquare = document.querySelector(".small-square");

function generateRandomVal() {
    return Math.floor(Math.random() * 256);
}

let randBackColor = () => {
    var red = generateRandomVal();
    var green = generateRandomVal();
    var blue = generateRandomVal();
    let randomColor = "rgb(" + red + "," + green + "," + blue + ")";
    mySquare.style.backgroundColor = randomColor;
};

mySquare.addEventListener("click", randBackColor);


let randBackColor2 = (event) => {
    event.stopPropagation();
    var red = generateRandomVal();
    var green = generateRandomVal();
    var blue = generateRandomVal();
    let randomColor = "rgb(" + red + "," + green + "," + blue + ")";
    mysmallSquare.style.backgroundColor = randomColor;
};


mysmallSquare.addEventListener("click", randBackColor2);