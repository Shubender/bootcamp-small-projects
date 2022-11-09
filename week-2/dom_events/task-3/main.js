// Make a page that has on it an element that is 100px by 100px in size and has a solid black border. 
// When the user mouses down on this box, its background should change to a randomly selected color. 
// When the user mouses up on it, its background should change to another randomly selected color.

const mySquare = document.querySelector(".square");



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

mySquare.addEventListener("mousedown", randBackColor);

mySquare.addEventListener("mouseup", randBackColor);