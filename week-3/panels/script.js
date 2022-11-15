(function () {
    var container = document.getElementById("container");
    var forground = document.getElementById("forground");
    var slider = document.getElementById("slider");

    const mouseMove = function (event) {
        //console.log(event.pageX - container.offsetLeft);
        let mousePos = event.pageX - container.offsetLeft;
        if (mousePos < 0 || mousePos > container.offsetWidth - 10) {
            return;
        }
        slider.style.left = event.pageX - container.offsetLeft + "px";
        forground.style.width = event.pageX - container.offsetLeft + "px";
    };

    // console.log("container size: ", container.offsetWidth);
    // console.log("container left: ", container.offsetLeft);

    slider.addEventListener("mousedown", function () {
        container.addEventListener("mousemove", mouseMove);
    });


    document.addEventListener("mouseup", function () {
        container.removeEventListener("mousemove", mouseMove);
        console.log("mouse go out the box");
    });

    


    //  container.removeEventListener("mouseleave", function () {
    //      console.log("mouse go out the box");
    //  });



    // function mousePosition(e){
    //     console.log(e)
    // }

    // Look up for "removeEventListener"





//     let moveSlider = (getPos) => {
//         slider.style.left = getPos.pageX + "px";
//         slider.style.top = getPos.pageY + "px";
//     };

// container.addEventListener("mousemove", moveSlider);






})();



