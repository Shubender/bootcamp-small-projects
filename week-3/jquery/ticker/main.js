

const headlines = $("#headlines"); //document.getElementById("headlines");
console.log("headlines:", headlines);

let firstLink; //document.querySelector("a");
console.log("firstLink:", firstLink);

const ticker = $("#ticker"); //document.getElementById("ticker");
console.log("ticker:", ticker);

let widthOfHeadlines = ticker.outerWidth(); //headlines.offsetWidth;
console.log("widthOfHeadlines:", widthOfHeadlines);

let currentLeftValue = widthOfHeadlines;
let id;

function moveLeft() {
    
    id = requestAnimationFrame(() => {
        firstLink = $("a").eq(0); //document.querySelector("a");
        if (headlines.offset().left + firstLink.outerWidth() < 0) {
            headlines.remove(firstLink); //headlines.removeChild(firstLink);
            headlines.append(firstLink); //headlines.appendChild(firstLink);

            currentLeftValue = 0;
            headlines.css({ left: currentLeftValue + "px" }); // ???
            //headlines.style.left = currentLeftValue + "px";
        }

        headlines.css({ left: currentLeftValue + "px" }); // ???
        //headlines.style.left = currentLeftValue + "px";
        currentLeftValue -= 3;
        moveLeft();
    });
}

$("a")
    .on("mouseenter", function () {
        console.log("mouseenter");
        cancelAnimationFrame(id);
    })
    .on("mouseleave", function () {
        console.log("mouseleave");
        moveLeft();
    });

// ticker.addEventListener("mouseenter", function () {
//     cancelAnimationFrame(id);
// });

// ticker.addEventListener("mouseleave", function () {
//     moveLeft();
// });

moveLeft();




//BACKUP 15.11.22 before jQuery

/*

const headlines = document.getElementById("headlines");
let firstLink = document.querySelector("a");
let widthOfHeadlines = headlines.offsetWidth;
let currentLeftValue =
    widthOfHeadlines; 
let id;

const ticker = document.getElementById("ticker");

function moveLeft() {
    if (headlines.offsetLeft + firstLink.offsetWidth < 0) {
        headlines.removeChild(firstLink);
        headlines.appendChild(firstLink);
        firstLink = document.querySelector("a");
        currentLeftValue = 0;
        headlines.style.left = currentLeftValue + "px";
    }
    id = requestAnimationFrame(() => {
        headlines.style.left = currentLeftValue + "px";
        currentLeftValue -= 1.5;
        moveLeft();
    });
}


ticker.addEventListener("mouseenter", function () {
    cancelAnimationFrame(id);
});

ticker.addEventListener("mouseleave", function () {
    moveLeft();
});

moveLeft();

*/
