var app = angular.module("myApp");

app.controller('maincontroller', function($scope, Factory, seatgeekFactory, TwitterFactory, $location) {
Factory.getPosts();
seatgeekFactory.getSeats();
TwitterFactory.getTweets();
    
$scope.searchArea = function(){
     
$location.path('/resultsView');
 
    };
});

