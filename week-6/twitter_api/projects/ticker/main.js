/*

Create a json file containing the text and hrefs of the links in your ticker project and 
remove the links from your html file. When the page loads, make an ajax request to fetch 
the text and hrefs and, once you have them, insert the links into the page. Once the links 
are in the page, start the animation. To test this you should use http-server.

http-server /path/to/ticker


TODO:
add .json file with data
get the data somehow
$.get(localhost:8080/urls.json, function(data){
            data.forEach((tickerElement) => {
                $(“#headlines”).append(“<a href=\“” +tickerElement.url + “\”>”
                + tickerElement.title + “</a>“)
            });
        });
iterate through the retrived array
append tags to headlines

*/

$(function (){
    // console.log("TEST");
    $.get("/links.json", function (data) {
        data.forEach((tickerElement) => {
            $("#headlines").append(
                '<a href="' +
                    tickerElement.url +
                    '">' +
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



// ticker.addEventListener("mouseenter", function () {
//     cancelAnimationFrame(id);
// });

// ticker.addEventListener("mouseleave", function () {
//     moveLeft();
// });

//moveLeft();


// headlines.addEventListener("mouseenter", function () {
//     headlines.style.textDecoration = "underline";
//     headlines.style.color = "yellow";
// });

// headlines.addEventListener("mouseleave", function () {
//     headlines.style.textDecoration = "none";
//     headlines.style.color = "black";
// });

//cancelAnimationFrame(id);
//requestAnimationFrame

/*
1. Right function wich stop animation when mouse on block (mouseenter - the mouse pointer has moved on an element)
2. Add addEventListener wich will call stop function
3. 

*/


// Check every time your function is called if the sum of headlines.offsetLeft and firstLink.offsetWidthis
// smaller then 0

// if it is smaller than 0:
// remove the firstLink with removeChild from the headlines
// append the firstLink with appendChild to the headlines
// get and save the new firstLink with querySelector for example
// reset the currentLeftValue to 0 and set the style.left of headlines to the new value

