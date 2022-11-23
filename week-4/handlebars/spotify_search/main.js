// DO NOT TOUCH ----------------------------------------------------------------

// 1. Initialize a handlebars.templates object in case it does not exist
Handlebars.templates = Handlebars.templates || {};

// 2. Select the handlebars templates from your HTML document
var templates = document.querySelectorAll(
    'script[type="text/x-handlebars-template"]'
);

// 3. Loop over the templates and compile them
Array.prototype.slice.call(templates).forEach(function (script) {
    Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
});
// ------------------------------------------------------------------------

var artistsSection = document.getElementById("resultContainer");
const input = document.querySelector(".search-input");
const select = document.querySelector(".type");
const button = document.querySelector(".search-button");

let nextUrl = "";
let itemsAdj = [];

button.addEventListener("click", () => {
    console.log("Input:", input.value);
    console.log("select:", select.value);
    $.ajax({
        url: "https://spicedify.herokuapp.com/spotify",
        data: {
            q: input.value,
            type: select.value,
        },
        success: function (data) {
            console.log("Data:", data);

            const results = data.artists || data.albums;
            const items = results.items;
            //save value of results.next to nextUrl;
            nextUrl = results.next;
            console.log("First nextUrl:", nextUrl);
            itemsAdj = items.map((item) => {
                return { name: item.name, image: item.images[1]?.url };
            });
            console.log("itemsAdj", itemsAdj);
            var artistHtml = Handlebars.templates.resultTemplate({
                itemsAdj,
            });
            artistsSection.innerHTML = artistHtml;
            //renderHTML(itemsAdj, false);
        },
        error: function (error) {
            console.log("Error:", error);
        },
    });
});

let timeout;

document.addEventListener("scroll", () => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
        if (
            document.body.clientHeight - window.scrollY <
            window.innerHeight + 200
        ) {
            console.log("Scroll End");
            $.ajax({
                url: nextUrl,
                success: function (data) {
                    const results = data.artists || data.albums;
                    const items = results.items;
                    //save value of results.next to nextUrl;
                    nextUrl = results.next;
                    console.log("Auto nextUrl:", nextUrl);
                    itemsAdj = items.map((item) => {
                        return { name: item.name, image: item.images[1]?.url };
                    });
                    //renderHTML(itemsAdj, true);
                    var artistHtml = Handlebars.templates.resultTemplate({
                        itemsAdj,
                    });
                    artistsSection.innerHTML = artistHtml;
                },
                error: function (error) {
                    console.log("Error:", error);
                },
            });
        }
    }, 250);
});
