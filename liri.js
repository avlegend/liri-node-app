// At the top of the liri.js file, add code to read and set any environment 
// variables with the dotenv package:
require("dotenv").config();

// Add the code required to import the keys.js file and store it in a variable
const keys = require("./keys.js");
const fs = require("fs");
const axios = require("axios");
const Spotify = require("node-spotify-api");
const moment = require("moment")
var spotify = new Spotify(keys.spotify);
const argOne = process.argv[2]; //Assume this is always our command
const argTwo = process.argv.slice(3).join('+'); //Always be our second argument


// spotify search
var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
});

manageInput(argOne, argTwo);
// adding a switch statement instead of an if/ esle if statment
function manageInput(action, potentialArgs) {
    switch (action) {
        case "concert-this":
            bandsInTown(potentialArgs);
            break;

        case "spotify-this-song":
            spotifySong(potentialArgs);
            break;

        case "movie-this":
            movieData(potentialArgs);
            break;

        case "do-what-it-says":
            random();
            break;
        default:
            console.log('That command is not supported');
            break;

    }
}


//This will search the Bands in Town Artist Events API
// Name of the venue
// Venue location
// Date of the Event (use moment to format this as "MM/DD/YYYY")

function bandsInTown(artist) {

    var queryArtist = artist || 'rolling stones';

    var queryUrl = "https://rest.bandsintown.com/artists/" + queryArtist + "/events?app_id=codingbootcamp"
    //console.log(queryUrl);
    axios.get(queryUrl)
        .then(function (response) {
            
            console.log("--------------------")
            // Name of the venue
            console.log(response.data[0].venue.name)
            
            // Venue location
            console.log("Venue location: " + response.data[0].venue.city) // venue location
            // Date of the Event (use moment to format this as "MM/DD/YYYY")
            let dateToFormat = moment(response.data[0].datetime, "YYYY-MM-DD")
            let conDate = moment(dateToFormat).format("MM/DD/YYYY")
            console.log("Date of the Event: " + conDate) // date of event
            console.log("--------------------")

        })
        .catch(function (err) {
            console.log(err);
        });
};

function spotifySong(querySong) {
    //const songTitle = process.argv[3];

    var query = querySong || "The Sign Ace of base"

    spotify.search({ type: 'track', query: query }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        //This will show the following information 
        //about the song in your terminal/bash window
        console.log("--------------------")
        // Artist(s)
        console.log("Artist(s): " + data.tracks.items[0].album.artists[0].name)
        // The song's name
        console.log("Song Name: " + data.tracks.items[0].name)
        // A preview link of the song from Spotify
        console.log("Link to Sample: " + data.tracks.items[0].preview_url);
        // The album that the song is from

        console.log("Album Name: " + data.tracks.items[0].album.name)
        console.log("--------------------")




    });

};

function movieData(queryMovie) {
    var movie = queryMovie || "Mr. Nobody"

    var queryUrl = "http://www.omdbapi.com/?apikey=trilogy&t=" + movie
    console.log(queryUrl)
    axios.get(queryUrl)
        .then(function (response) {
            //console.log(response)
            console.log("--------------------")
            console.log("Title: " + response.data.Title)
            console.log("Year: " + response.data.Year)
            console.log("IMDB Rating: " + response.data.imdbRating)
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[0]) // not responding
            console.log("Country: " + response.data.Country)
            console.log("Language: " + response.data.Language)
            console.log("Plot: " + response.data.Plot)
            console.log("Actors: " + response.data.Actors)
            console.log("--------------------")
        }).catch(function (err) {
            console.log(err);
        });

};

function random() {
    fs.readFile("random.txt", "utf8", function(err, data){
        if(err){
            return console.log(err)
        }
        var dataArr = data.split(", ");
        
        console.log(dataArr)
    })
}









