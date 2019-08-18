const dotenv = require("dotenv").config();

const keys = require(`./keys`)

const Spotify = require('node-spotify-api')

const axios = require(`axios`)

const moment = require(`moment`)

const fs = require(`fs`)


const spotify = new Spotify(keys.spotify);


// console.log(param)


let command = process.argv[2]

let param = process.argv.slice(3).join(` `)

fs.appendFile(`log.txt`, `${command}: ${param}\n`, (error) => {
    if (error) {
        console.log(error)
    }

})


function activateLiri () {

    // console.log(command)
    // console.log(param)

    switch (command) {
        case `concert-this`:
            let queryurl = `https://rest.bandsintown.com/artists/${param}/events?app_id=codingbootcamp`
            console.log(param)
            axios.get(queryurl).then((response) => {

                if (!response.data[0]) {
                    console.log("Sorry, no upcoming concerts!")
                } else {
                // console.log(response.data[0])
                console.log(`Venue Name: ` + response.data[0].venue.name)
                console.log(`Venue Location: ` + response.data[0].venue.city, response.data[0].venue.region)
                let aDate = moment(response.data[0].datetime).format("MM/DD/YYYY")
                console.log(`Date: ${aDate}`)
                }

            }).catch((err) => {
                console.log(err)
            })
    
            break;
        case `spotify-this-song`:
            let song = param;
                if (!param) {
                    song = `Ace of Base The Sign`
                } else {
                    song = param
                }

            spotify
            .search({ type: 'track', query: song })
            .then(function(response) {
                console.log(`Artist Name: ` + response.tracks.items[0].album.artists[0].name);
                console.log(`Album Name: ` + response.tracks.items[0].album.name);
                console.log(`Preview URL: ` + response.tracks.items[0].preview_url)
                console.log(`Song Name: ` + response.tracks.items[0].name)
            })
            .catch(function(err) {
                console.log(err);
            });
    
    
            break;
        case `movie-this`:
                let queryUrl = `http://www.omdbapi.com/?t=${param}&y=&plot=short&apikey=trilogy`;
                axios.get(queryUrl).then((response) => {
                    console.log(`Title: ` + response.data.Title)
                    console.log(`Year: ` + response.data.Year)
                    console.log(`IMDB Rating: ` + response.data.Ratings[0].Value)
                    console.log(`Rotten Tomatoes Rating: ` + response.data.Ratings[1].Value)
                    console.log(`Country of Origin: ` + response.data.Country)
                    console.log(`Language: ` + response.data.Language)
                    console.log(`Plot: ` + response.data.Plot)
                    console.log(`Actors: ` + response.data.Actors)
                }).catch((err) => {
                    console.log(err)
                })
    
    
            break;
        case `do-what-it-says`:
        fs.readFile(`random.txt`, `utf8`, (error, data) => {
            if (error) {
                console.log(error)
            } else {
                // console.log(data)
                dataArray = data.split(`,`)
                command = dataArray[0]
                // console.log(command)
                param = dataArray[1].slice(1, param.length-1)
                //to remove the quotes included in the instructions, so the param would be similar to a value entered through the command line
                // console.log(param)
                activateLiri()
            }

        })
        break;

        default:
            console.log(`Please input a correct input command`)
    
    
    }

}

activateLiri()



