// Make a page that has on it an element that is 100px by 100px in size, has absolute positioning, 
// and has a solid background color. Add an event handler that makes this box center itself directly 
// under the user's mouse pointer as it is moved across the screen.

let mySquare = document.querySelector(".square");

let moveSquare = (getPos) => {
    mySquare.style.left = getPos.pageX - 50 + "px";
    mySquare.style.top = getPos.pageY - 50 + "px";
};

document.addEventListener("mousemove", moveSquare);

