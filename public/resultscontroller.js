var app = angular.module("myApp");

app.controller('resultscontroller', function($scope, $timeout, Factory, seatgeekFactory, TwitterFactory, $location, geoFactory, $anchorScroll) {
Factory.getPosts().then(function(response){
$timeout($scope.venues = response);
console.log($scope.venues);
}); 
       
seatgeekFactory.getSeats().then(function(response){
$timeout($scope.events = response);
console.log($scope.events);
}); 
    
TwitterFactory.getTweets().then(function(response){
$timeout($scope.statuses = response);
console.log($scope.statuses);
});    
    
geoFactory.getLocation().then(function(location){
    $scope.location = `${location.latitude},${location.longitude}`;
});
$scope.backtoResults = function(){
    
 
$location.path('/resultsView');
 
    };
   $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
   };  

});
