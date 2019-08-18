# LIRI-Personal-Assistant
This node app is built to provide useful functionalities through command line interaction.


This is a CLI node app built to take in a series of commands, and then give back interesting information on the topic targeted by each command. This app aims to provide information on request about concert dates, movies, and songs. It further has an option to read another file and execute a command from this file. Each command is logged into a text document.

The app is organized into a large switch case that funnels commands to the correct medium for gathering information. It then augemnts whatever search method it's using with whatever entry the user gives, which can be a song name, singer/band name, a movie name, or a call to do the stored command. This then reutrns information to the user about their chosen query.

To use this app, spimply enter node liri.js. Then enter a space and the command you would like. This can be 

* concert-this
* spotify-this-song
* movie-this
* do-what-it-says.

Then, if your command is do-what-it-says, press enter. Otherwise, enter another space, and then whatever your search query.

Examples:

* concert-this ariana grande
* spotify-this-song wreck of the edmund fitzgerald 
* movie-this return of the king

Then, press enter, and enjoy learning about your chosen topic!

I devloped this app, as part of a project for the SMU coding bootcamp.

The main technologies used were 

* Node.js
* Axios
* Dotenv
* Moment
* Node-Spotify-API
* OMDB API
* Bands-In-Town-API

Find the code here

https://github.com/Nick-Haer/LIRI-Personal-Assistant

Find Screenshots of the app working here

![](/Screenshots/concert1.png)

![](/Screenshots/concert2.png)

![](/Screenshots/movie-1.png)

![](/Screenshots/movie2.png)

![](/Screenshots/do-what-it-says-concert.png)

![](/Screenshots/do-what-it-says-movie.png)

![](/Screenshots/do-what-it-says-song.png)

![](/Screenshots/spotify-1.png)

![](/Screenshots/spotify-2.png)