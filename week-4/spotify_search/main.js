const input = document.querySelector(".search-input");
const select = document.querySelector(".type");
const button = document.querySelector(".search-button");
const secondButton = document.querySelector(".second-button");
const resultContainer = document.querySelector(".resultContainer");

let htmlString = "";
let nextUrl = '';

button.addEventListener('click', () => {
    console.log("Input:", input.value);
    console.log("select:", select.value);
    $.ajax({
        url: "https://spicedify.herokuapp.com/spotify",
        data: {
            q: input.value,
            type: select.value
        },
        success: function (data) {
            console.log("Data:", data);

            const results = data.artists || data.albums;
            const items = results.items;
            //save value of results.next to nextUrl;
            nextUrl = results.next;
            console.log("nextUrl:", nextUrl);
            const itemsAdj = items.map((item) => {
                return { name: item.name, image: item.images[1]?.url };
            });
            console.log(itemsAdj);
            console.log(itemsAdj[0].name);

            for (let i = 0; i < itemsAdj.length; i++) {
                htmlString +=
                    "<div>" +
                    itemsAdj[i].name +
                    "</div>" +
                    '<img src="' +
                    itemsAdj[i].image +
                    '">';
                //console.log(htmlStringName);
            }
            resultContainer.innerHTML = htmlString;
        },
        error: function (error) {
            console.log("Error:", error);
        },
    });
});

// additional eventL for new button
    // we will make a new $ajax request based on our global nextUrl
// 

secondButton.addEventListener("click", () => {
    console.log("Input:", input.value);
    console.log("select:", select.value);
    $.ajax({
        // https://spicedify.herokuapp.com/spotify?query=depesh&type=artist&offset=20&limit=20
        url: nextUrl,
        // url: "https://spicedify.herokuapp.com/spotify?query=depesh&type=artist&offset=20&limit=20",
        // data: {
        //     q: input.value,
        //     type: select.value,
        // },
        success: function (data) {
            console.log("Data:", data);

            const results = data.artists || data.albums;
            const items = results.items;
            //save value of results.next to nextUrl;
            const itemsAdj = items.map((item) => {
                return { name: item.name, image: item.images[1]?.url };
            });
            console.log(itemsAdj);
            console.log(itemsAdj[0].name);
            //let htmlString = "";

            for (let i = 0; i < itemsAdj.length; i++) {
                htmlString +=
                    "<div>" +
                    itemsAdj[i].name +
                    "</div>" +
                    '<img src="' +
                    itemsAdj[i].image +
                    '">';
                //console.log(htmlStringName);
            }
            resultContainer.innerHTML = htmlString;
        },
        error: function (error) {
            console.log("Error:", error);
        },
    });
});