const express = require("express");
// const https = require("https");
const app = express();
require("dotenv").config();
app.use(express.static("./projects"));

const {getToken, getTweets} = require("./twitter");


// 1. get a Bearer Token by making a POST request with encoded Key and Secret

// TASK: implement logic for actual GET-Request for getting Tweets. See getToken() function for analogy
// 2. get the Tweets by making a GET request with Bearer Token

// 3. filter & format/simplify tweets

// TASK: implement filterTweets function
//  - use the array method filter and map
//  - tip: log the tweets and see how to access different information that we are interested in
//          example: tweets.entities.urls[0].url
//  - tip: first filter and then change the structure with map
//      - we want to have something like { "text": "asdfasd", "url": "https://wp.com"}

function filterTweets(tweets) {
    // console.log("entities.urls: ", tweets[0].entities.urls[0].url);
    const filteredTweets = tweets.filter((tweet) => {
        return tweet.entities.urls.length === 1;
    });

    const newTweets = filteredTweets.map(tweet => {
       // TASK for later: move urls from text
         return { text: tweet.full_text.slice(0, -24), url: tweet.entities.urls[0].url };
    });
    return newTweets;
}

// 4. respond to the client with the filtered/formatted tweets

app.get("/links.json", (req, res) => {
    getToken()
        .then((token) => {
            return getTweets(token);
        })
        .then((tweets) => {
            const filteredTweets = filterTweets(tweets);
            res.json(filteredTweets);
        })
        .catch((error) => {
            res.sendStatus(500);
        });
});

app.listen(8080, () => {
    console.log("Server running on localhost:8080");
});
