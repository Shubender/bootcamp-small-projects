const dots = document.getElementsByClassName("dot");

const images = document.getElementsByTagName('img');
//console.log(images);
const imagesArr = Array.from(images);
//console.log(imagesArr);
let index = 0;
let timeOutID;

let transition = false;                                 //for bug with transition


function moveImages() {
    timeOutID = setTimeout(() => {
        transition = true;                              //for bug with transition
        imagesArr[index].classList.remove("onscreen");
        imagesArr[index].classList.add("hidden-left");
        dots[index].classList.remove("selected");
        index++;
        if (index === imagesArr.length) index = 0;
        imagesArr[index].classList.add("onscreen");
        dots[index].classList.add("selected");
        moveImages();
    }, 3000);
}

moveImages();

document.addEventListener('transitionend', (event) => {
    const imageElement = event.target;
    transition = false;                                 //for bug with transition
    if (imageElement.classList.contains("hidden-left")) {
        imageElement.classList.remove("hidden-left");
    }
});


for (let i = 0; i <= dots.length; i++) {
    dots[i].addEventListener("click", () => {
        console.log("click nav:", i + 1);

        clearTimeout(timeOutID);
        dots[index].classList.remove("selected");
        imagesArr[index].classList.remove("onscreen");
        imagesArr[index].classList.add("hidden-left");
        dots[i].classList.add("selected");
        imagesArr[i].classList.add("onscreen");
        index = i;

        moveImages();
    });

    // if (transition === false) {                         //for bug with transition

    // }
}


        
    