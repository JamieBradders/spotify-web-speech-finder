## What is this?

This is a very simple and rough web app that lets you search for artists on spotify using the Web Speech API. This current build uses AngularJS to make a http request to the Spotify Web API and return a list of artists that match the criteria you have provided. In the near future I plan to work on this web app and extend the functionality with the help of Spotify's API.

## How do I use this?

Make sure you have Node.js installed locally. Clone the repository to your local machine and fire up terminal.

Navigate to the directory and run ```npm install``` this will install all of the app's required dependencies. Once installed, run ```node server.js``` and if all is well, you should receive a message advising you that the app is available to view on localhost:3000.

Fire up your browser and navigate to http://localhost:3000.

To use the app, simply click on the search now button and allow the browser to use your computer's microphone. Simply say the name of the artist you are looking for and wait for the results to come back.
   