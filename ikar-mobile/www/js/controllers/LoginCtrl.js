app.controller('LoginCtrl', function ($scope, $stateParams, $state,ionicMaterialMotion , LoginService, $ionicPopup,$location ) {
$scope.data = {};
 
    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            //$location.path("/app/home");
            if($scope.data.username=='user'){
                $location.path("/app/userDashboard");
            }else if ($scope.data.username=='merchant'){
                $location.path("/app/merchantDashboard");
            }
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }

});