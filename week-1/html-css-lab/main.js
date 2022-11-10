let menu = document.querySelector(".menu");
let nav = document.querySelector("nav");
let backdrop = document.querySelector(".backdrop");

menu.addEventListener('click', () => {
    console.log('menu click');
    nav.classList.remove("hidden");
    backdrop.classList.remove("hidden");
});

let closeButton = document.querySelector(".close-button");

closeButton.addEventListener("click", () => {
    console.log("menu click");
    nav.classList.add("hidden");
    backdrop.classList.add("hidden");
});

backdrop.addEventListener("click", () => {
    console.log("menu click");
    nav.classList.add("hidden");
    backdrop.classList.add("hidden");
});


/*



Implement a eventlistener to the hamburger menu element

if the event click was fired remove the hidden class on the side-bar and backdrop
Implement a eventlistener for the close button and the backdrop

if the event click was fired add the hidden class on the side-bar and backdrop





HTML
1. Create div element (we already have img for it)
2. Create nav el
3. Inside div create unsorted list with links
4. When click to menu block will shows (from left to right)
5. Click to X will hide block (from right to left)
6. background

CSS
1. have a clss hidden transform to the right
2. transition - animation
3. position the close button (right: , position: absolute)
4. side-bar stuling: z-index it on top of everything
5. backdrop should be height and width: 100% use background color ....

JS
0. get side-bar as HTMLElement with getEl...
1. add listener click on img menu
    then toggle the class 'hidden' on the side-bar
2. add 

*/
