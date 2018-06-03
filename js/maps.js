//Data

          //Angular App Module and Controller
          var sampleApp = angular.module('mapsApp', []);
          sampleApp.controller('MapCtrl', function ($scope) {

             var mapOptions = {
                  zoom: 4,
                  center: new google.maps.LatLng(25,80),
                  mapTypeId: google.maps.MapTypeId.TERRAIN
              }

               $scope.markers = [];
              
              var infoWindow = new google.maps.InfoWindow();

              var map = new google.maps.Map(document.getElementById('mapper'), mapOptions);

   /*     var options = {
                enableHighAccuracy: true
            };

            navigator.geolocation.getCurrentPosition(function (pos) {
                $scope.position = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
                $scope.map = {
                    center:
                  {
                      latitude: pos.coords.latitude,
                      longitude: pos.coords.longitude

                  },

                  zoom:17
                };


 infoWindow.setPosition(center);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(center);

                //console.log(JSON.stringify($scope.map));
            },
                        function (error) {
                            alert('Unable to get location: ' + error.message);
                        }, options);

*/

 navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,


            };
   console.log(position.coords.latitude);

    console.log(position.coords.longitude);

                $scope.lat=position.coords.latitude;
                $scope.longi=position.coords.longitude;

                 console.log($scope.lat);
                console.log($scope.longi);



            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });


var flag=0;


              google.maps.event.addListener(map, 'click', function (e) {
             //   alert("Latitude: " + e.latLng.lat() + "\r\nLongitude: " + e.latLng.lng());
if(flag==1){
$scope.mymarker.setMap(null);
}
           $scope.lat=e.latLng.lat();
                $scope.longi=e.latLng.lng();
                    //add marker
                    $scope.mymarker = new google.maps.Marker({
                        map: map,
                        position: new google.maps.LatLng($scope.lat, $scope.longi)
                        
                    });


                    flag=1;

console.log(flag);
          
            //    console.log($scope.lat);
              //  console.log($scope.longi);

            });     

            
              }   );

           //var sampleFlickr = angular.module('mapsApp',[]);

            sampleApp.controller('SearchCtrl', function ($scope, $http) {

                                                  $scope.searchButtonText = "Search";
                                                 

 
                  $scope.logId = function() {


                                             console.log($scope.id);
                                             console.log($scope.lat);
                                             console.log($scope.longi);

                                                 $scope.loading = true;
                                                 $scope.searchButtonText = "Searching";


                                              $http.jsonp('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c6cbd1445febf9830208782f6444f759&format=json&lat='+$scope.lat+'&lon='+$scope.longi+'&tags='+$scope.id).success(function(data){
                                             
                                                });
                                             /* $http.jsonp('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c6cbd1445febf9830208782f6444f759&format=json&per_page=3&tags='+$scope.id).success(function (data){
                    

                                               });
*/                                       
                                          $scope.foundit="true";

                                            
                                            jsonFlickrApi=function (data){

                                                                                
                                                                                $scope.viewby = 10;
                                                                                $scope.totalItems = data.length;
                                                                                $scope.maxSize = 5; //Number of pager buttons to show

                                                                                 $scope.itemsPerPage = 10;
                                                                                 $scope.currentPage = 1; //reset to first paghe

                                                                                 $scope.images=data.photos.photo;
                                                                                 console.log($scope.images);
                                                                                     $scope.loading = false;


                                                                              $scope.searchButtonText = "Search";



                                                                         }


                                             }

  
                


                 
            });



    angular.module('mapsApp').filter('pagination', function()
{
 return function(input, start)
 {
  start = +start;
  return input.slice(start);
 };
});
 













/*sampleApp.controller('ctrl',['$scope', function ($scope) {
    $scope.logId = function() {
        console.log($scope.id);
    }
}]);*/