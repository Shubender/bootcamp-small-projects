var clickZone = document.getElementById("clickZone");
console.log("clickZone", clickZone);

var fruitsAndVeggies = document.getElementsByClassName("food");
console.log("fruitsAndVeggies", fruitsAndVeggies);

var melon = fruitsAndVeggies[0];
var salad = fruitsAndVeggies[1];
var grapes = fruitsAndVeggies[2];
var carrot = fruitsAndVeggies[3];

function generateRandomNum() {
    return Math.floor(Math.random() * 100);
}
var melonPos = 20;
var saladPos = 20;
var grapesPos = 20;
var carrotPos = 20;

clickZone.addEventListener("click", function () {
    console.log("clicked on the click zone");

    melonPos += generateRandomNum();
    saladPos += generateRandomNum();
    grapesPos += generateRandomNum();
    carrotPos += generateRandomNum();

    melon.style.left = melonPos + "px";
    salad.style.left = saladPos + "px";
    grapes.style.left = grapesPos + "px";
    carrot.style.left = carrotPos + "px";
});

var melonbtn = document.getElementById("melonBtn");
melonbtn.addEventListener("click", function (e) {
    melonPos += generateRandomNum();
    melon.style.left = melonPos + "px";
    e.stopPropagation();
});
function generateRandomVal() {
    return Math.floor(Math.random() * 256);
}

document.addEventListener("click", function (e) {
    // if (e.keyCode === 32) {
    var r = generateRandomVal();
    var g = generateRandomVal();
    var b = generateRandomVal();

    var randomColor = "rgb(" + r + "," + g + "," + b + ")";
    document.body.style.backgroundColor = randomColor;
    // }
});
