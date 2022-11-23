const input = document.querySelector(".search-input");
const select = document.querySelector(".type");
const button = document.querySelector(".search-button");
const secondButton = document.querySelector(".second-button");
const resultContainer = document.querySelector(".resultContainer");

let htmlString = "";
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
            console.log("nextUrl:", nextUrl);
            itemsAdj = items.map((item) => {
                return { name: item.name, image: item.images[1]?.url };
            });
            // console.log(itemsAdj);
            // console.log(itemsAdj[0].name);
            renderHTML(itemsAdj, false);
        },
        error: function (error) {
            console.log("Error:", error);
        },
    });
});

function renderHTML(itemsAdj, shouldAppend) {
    if (!shouldAppend) {
        htmlString = "";
    }
     

    for (let i = 0; i < itemsAdj.length; i++) {
        if (itemsAdj[i].image) {
            htmlString +=
                "<div>" +
                itemsAdj[i].name +
                "</div>" +
                '<img src="' +
                itemsAdj[i].image +
                '">';
        } else {
            htmlString +=
                "<div>" +
                itemsAdj[i].name +
                "</div>" +
                '<img src="./no-img.jpg">';
        }
    }

    resultContainer.innerHTML = htmlString;
}

secondButton.addEventListener("click", () => {
    $.ajax({
        url: nextUrl,
        success: function (data) {
            console.log("Data 2:", data);
            const results = data.artists || data.albums;
            const items = results.items;
            //save value of results.next to nextUrl;
            nextUrl = results.next;
            itemsAdj = items.map((item) => {
                return { name: item.name, image: item.images[1]?.url };
            });
            // console.log(itemsAdj);
            // console.log(itemsAdj[0].name);
            renderHTML(itemsAdj, true);
        },
        error: function (error) {
            console.log("Error:", error);
        },
    });
});
