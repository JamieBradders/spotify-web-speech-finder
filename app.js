var app = angular.module('webSpeechSpotifyApp', []);

var recognizer = new webkitSpeechRecognition();
var searchTerm = false;
recognizer.lang = 'en';

app.controller('searchController', ['$scope', '$http', function($scope, $http) {

    var app = this;

    function getArtistsFromSpotify() {
        $http.get('https://api.spotify.com/v1/search?q=' + searchTerm + '&type=artist').
            success(function (data, status) {
                // success code here
                app.artists = data.artists.items;
                console.log(app.artists);
                console.log("the length of array " + data.length);

                $('.search-results').show().addClass('fadeIn');
            }).
            error(function (data, status) {
                // error code here
                console.log(data);
        });
    }

    // Web Speech API Code
    recognizer.onresult = function (event) {
        if (event.results.length > 0) {
            var result = event.results[event.results.length - 1];
            if (result.isFinal) {
                var resultText = result[0].transcript;
                searchTerm = encodeURIComponent(resultText);
                console.log('https://api.spotify.com/v1/search?q=' + searchTerm + '&type=artist');
                getArtistsFromSpotify();
            }
        }
    };

    $scope.activateSpeech = function() {
        recognizer.start();
    };

}]);

