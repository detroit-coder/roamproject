var app = angular.module('myApp');

app.factory('geoFactory', function (){
    var location = {};
    return {
     getLocation  
    }

   function getLocation () {
       if (location.lattitude && location.longitude){           
           return Promise.resolve(location);
        }
       
       return new Promise(function(resolve, reject){
           navigator.geolocation.getCurrentPosition(function(position) {
               location.latitude = position.coords.latitude;
               location.longitude = position.coords.longitude;
                resolve(location);
            });
       })               
   }
});
