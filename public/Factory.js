var app = angular.module('myApp');

app.factory('Factory', function ($http, geoFactory){
    var FourSquare = [];
    return {
     getPosts  
    };

   function getPosts () {
        if (FourSquare.length){
            console.log(FourSquare, 'factory');
            return Promise.resolve(FourSquare);
        }
    
       return geoFactory.getLocation().then(function(location){
          var clientId = 'ERCUS3MJIAMB0DFCMDQIZCRUMCA0RA01JM5L2BSKZEQ5FLLB';
          var clientSecret = 'ADOMAVTDRQDKWBB2OATWD4FLGEGXOTU5QC0ZD4DVG3DMR5I4';
           var url= `https://api.foursquare.com/v2/venues/search?client_id=${clientId}&client_secret=${clientSecret}&v=20150609&ll=${location.latitude},${location.longitude}&categoryId=4bf58dd8d48988d1c4941735`;
          return $http.get(url);
       }).then(function(response){
            FourSquare = response.data.response.venues;
            return FourSquare;
        }).catch(function(err){
            console.log(err);
        });
    }

});


