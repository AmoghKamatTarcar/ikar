'use strict';

MetronicApp.controller('UserProfileController', function($rootScope, $scope, $http, $timeout,$stateParams) {
    $scope.$on('$viewContentLoaded', function() {   
        Metronic.initAjax(); // initialize core components
        Layout.setMainMenuActiveLink('set', $('#sidebar_menu_link_profile')); // set profile link active in sidebar menu 
        $scope.loadMerchantTransactions();
    });
    
      $scope.loadMerchantTransactions = function(){
          if($stateParams.id!=undefined){
            
            $http.get("/getEntryForMerchant/"+$stateParams.id)
            .then(function(response) {            
                $scope.transactionData = response.data;
                //console.log($scope.transactionData);
            });
        
          }
    };
}); 
