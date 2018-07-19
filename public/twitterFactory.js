var app = angular.module('myApp');
app.factory('TwitterFactory', function($http, geoFactory){
    return {
        getTweets
    };

    function getTweets () {
       
        var headers ={ 
            authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAAArR3QAAAAAAqFlSTW6HsfIhjWONcJBu%2FeDkxKc%3DqraFuk6WVbzQh1gWofY2XJewHa9nwEIYKHTvzAHJBEDwwKpS7n'
        };
    
        return geoFactory.getLocation().then(function(location){
           return $http.get(`api/twitter/search/tweets.json?&geocode=${location.latitude},${location.longitude},1mi`, {headers}).
                then(function(response) {
                    return response.data.statuses;
                console.log(response);
                });

        });
        
    }
});


// var search = '';
//q=${search}