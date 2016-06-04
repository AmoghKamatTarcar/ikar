app.controller('ComplainCtrl', function ($scope, $stateParams, ionicMaterialInk , $cordovaGeolocation , $http , $location) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();

    // Toggle Code Wrapper
    var code = document.getElementsByClassName('code-wrapper');
    for (var i = 0; i < code.length; i++) {
        code[i].addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
    $(".hashtag").click(function () {
        $(this).toggleClass("activehash");
    });
    $(".addcat").click(function () {        
        $("#categoryinput").toggle('slow');
    });
    
    
    $scope.currentUserPAN = 'ARDPR1165R';
    
    var posOptions = {timeout: 10000, enableHighAccuracy: false};
    $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      var lat  = position.coords.latitude
      var long = position.coords.longitude
      $scope.position = position.coords;
      $scope.displayMap(position.coords)
    }, function(err) {
      // error
    });
    
    
    $scope.saveComplain = function(complain){
            complain.userPAN = $scope.currentUserPAN;
            complain.merchantLocation = $scope.position.lattitude+','+$scope.position.longitude;
            complain.imageproof = '';
            complain.status = 0;
            
            var data = JSON.stringify(complain);
            
            $http.post($scope.serverUrl+'api/complains', data).success(function(data, status) {
                $scope.showPopup('It dept will look into it, Thank you', 'Complain Lodged');
                $location.path("#/")
            })
            
        }
    
    $scope.displayMap = function(userPosition)
    {
            console.log('here');
            var mapUrl = "http://maps.google.com/maps/api/staticmap?center=";
            mapUrl = mapUrl + userPosition.latitude + ',' + userPosition.longitude;
            mapUrl = mapUrl + '&zoom=15&size=280x100&maptype=roadmap&sensor=true,&markers=color:green%7Clabel:S%7C'+userPosition.latitude + ',' + userPosition.longitude;
        console.log(mapUrl);
            var imgElement = document.getElementById("map");
            imgElement.src = mapUrl;
    }
    
    
 
        
      //  $scope.displayMap(position.cords)
        
   
});