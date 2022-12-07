

$(function (){
    // console.log("TEST");
    $.get("/links.json", function (data) {
        data.forEach((tickerElement) => {
            $("#headlines").append(
                '<a href="' +
                    tickerElement.url +
                    '"target="_blank">' +
                    tickerElement.text +
                    "</a>"
            );
            // console.log("data: ", data);
        });
    });
    moveLeft();
});


const headlines = $("#headlines"); //document.getElementById("headlines");
// console.log("headlines:", headlines);

let firstLink; //document.querySelector("a");
// console.log("firstLink:", firstLink);

const ticker = $("#ticker"); //document.getElementById("ticker");
// console.log("ticker:", ticker);

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

// TODO: stop and run not work

$("a")
    .on("mouseenter", function () {
        // console.log("mouseenter");
        cancelAnimationFrame(id);
    })
    .on("mouseleave", function () {
        // console.log("mouseleave");
        moveLeft();
    });