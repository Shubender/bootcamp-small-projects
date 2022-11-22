(function () {
    var input = $("input");
    var results = $("#results");
    let inputResult;
    let countArrow = -1;
    let countryCount;
    //let hack = 0;
    let timeout;

    input
        .on("input", function () {
            // we pass the value from the input field
            inputResult = input.val().toLowerCase();
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                findAndShowResults(inputResult);
            }, 250);
            //console.log("inputResult:", inputResult);
        })
        .on("focus", function () {
            // show the results
            results.show();
        })
        // .on("blur", function () {                        //work not correctly!!!
        //     // hide the results
        //     results.hide();
        // })

        .on("keydown", function (e) {
            // this is gonna be implemented later
            // this is to navigate via arrow keys 40 and 38
            
            if (e.keyCode === 40) {                         //jump to second position at first time!!!  
                countArrow++;
                if (countArrow === countryCount) {
                    countArrow = countryCount - 1;
                    return;
                }
                console.log("countArrow: ", countArrow);
                input.val(results.children().eq(countArrow).text());
                results.children().eq(countArrow).addClass("arrowOn");
                results.children().eq(countArrow - 1).removeClass("arrowOn");
                
            } 
            
            if (e.keyCode === 38) {
                countArrow--;
                if (countArrow < 0) {
                    countArrow = 0;
                    return; 
                }
                input.val(results.children().eq(countArrow).text());
                console.log("countArrowUp: ", countArrow);
                results.children().eq(countArrow + 1).removeClass("arrowOn");
                results.children().eq(countArrow).addClass("arrowOn");
            }

            if (e.keyCode === 13) {
                results.hide();
            }
        });

    results.
        on("click", function (e) {
            input.val(e.target.outerText);
            console.log(e.target.outerText);
            results.hide();
        });    

    // gets the value from the input field
    // if there is no value -> hides the results
    // finds the results using findResults()
    // and then calls renderResults()

    function findAndShowResults($value) {
        // TODO:
        //console.log("inputResult:", val);
        $.ajax({
            url: "https://spicedworld.herokuapp.com/",
            data: {
                q: $value,
            },
            success: function (data) {
                // do something with the data here
                // console.log("data", data);
                console.log("$data", data);
                console.log("$value", $value);
                console.log('$("input").val()', $("input").val());
                if ($value === inputResult) {
                    //console.log('ALL IS OK!');
                    renderResults(data);
                } 
                // if (data === 0) {
                //     results.hide();
                // }
                // if (data === []) {
                //     results.hide();
                // }
                countryCount = data.length;
                console.log("countryCount", countryCount);
            },
        });
        //renderResults(filteredCountries);
    }

    // gets an array
    // shows the results using getResultsHtml()
    function renderResults(resultItems) {
        // TODO:
        //getResultsHtml(resultItems);
        results.html(getResultsHtml(resultItems));
    }

    // gets an array
    // if it's empty -> return 'No results'
    // else return a string containing div tags for
    // every result item
    function getResultsHtml(results) {
        // TODO:
        let htmlString = "";

        if (results.length === 0) {
            htmlString = "<div>" + "No results" + "</div>";
            return htmlString;
        }

        for (let i = 0; i < results.length; i++) {
            htmlString += "<div>" + results[i] + "</div>";
        }
        //console.log(htmlString);
        return htmlString;
    }
})();
