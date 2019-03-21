# liri-node-app

__Creator:__ Andres Valdes 

__Created on__: March 20th 2019

---------------------------------------------------------

LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives back data. The user has the option of using four commands (listed below) in conjuntion with specific parameters associated with the commands. The Commands are:

* concert-this

* spotify-this-song

* movie-this

* do-what-it-says
---------------------------------------------------------

#HOW TO USE LIRI

##Step by step instructions

1. Open your terminal

1. navigate to folder that contain the _liri.js_ file

1. Enter a command from above
    1. **Example 1:** Run the concert-this command
    ```
    node liri.js concert-this <name of artist or band>
    ```
    Output will display:
    * Name of venue
    * Venue location
    * Date of event (using moment format)
    
    
    <img width="705" alt="concert-this" src="https://user-images.githubusercontent.com/47486942/54732345-7c83f380-4b50-11e9-88de-8890a17a59f5.png">
    

    1. **Example 2:** Run the spotify-this-song command
    ```
    node liri.js spotify-this-song '<song name here>'
    ```
    Output will display:
    * Artist(s)
    * The song's name
    * A preview link of the song from Spotify
    * The album that the song is from
    
    
    <img width="935" alt="spotify-this" src="https://user-images.githubusercontent.com/47486942/54732343-7726a900-4b50-11e9-8faa-1eec4a093dce.png">
    

    1. **Example 3:** Run the movie-this command

    ```
    node liri.js movie-this '<movie name here>'
    ```

    Output will display:
    * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.


   
   <img width="924" alt="movie-this" src="https://user-images.githubusercontent.com/47486942/54732334-7261f500-4b50-11e9-9168-215f85f67061.png">



   1. **Example 4:** Run the do-what-it-says command
    ```
    node liri.js do-what-it-says
    ```

    Output will display what is written in the random.txt file
    
    <img width="609" alt="Do-what-it-says" src="https://user-images.githubusercontent.com/47486942/54732262-17c89900-4b50-11e9-83eb-3489ab332b3b.png">
