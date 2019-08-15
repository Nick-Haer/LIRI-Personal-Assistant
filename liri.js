const dotenv = require("dotenv").config();

const keys = require(`./keys`)

const Spotify = require('node-spotify-api')

const axios = require(`axios`)

const moment = require(`moment`)


const spotify = new Spotify(keys.spotify);

let command = process.argv[2]

let param = process.argv[3]




console.log(command)

switch (command) {
    case `concert-this`:
        console.log(param)
        let queryurl = `https://rest.bandsintown.com/artists/${param}/events?app_id=codingbootcamp`
        axios.get(queryurl).then((response) => {
            console.log(response.data)
            console.log(response.data[0].venue.name)
            console.log(response.data[0].venue.city, response.data[0].venue.region)
            console.log(moment(response.data[0].datetime).format("MM/DD/YYYY"))
        }).catch((err) => {
            console.log(err)
            console.log(`boogaloo`)
        })

        break;
    case `spotify-this-song`:
        let song = param
        spotify
        .search({ type: 'track', query: song })
        .then(function(response) {
            console.log(response.tracks.items[0].album.artists[0].name);
            console.log(response.tracks.items[0].album.name);
            console.log(response.tracks.items[0].album.href);
            console.log(response.tracks.items[0].name)
        })
        .catch(function(err) {
            console.log(err);
        });


        break;
    case `movie-this`:


        break;
    case `do-what-it-says`:


        break;


}

