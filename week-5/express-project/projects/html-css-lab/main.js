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


//jQuerry code

const popup = $(".popup"); 
const popupClose = $(".popup-close"); 

setTimeout(function () {
    $(popup).delay(2000).removeClass("hidden"); //dalay???
    $(backdrop).removeClass("hidden");
    
}, 2000);

$(popupClose).on('click', function () {
    $(popup).addClass("hidden");
    $(backdrop).addClass("hidden");
});

