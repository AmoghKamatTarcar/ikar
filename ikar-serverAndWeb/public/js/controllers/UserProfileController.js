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
                $scope.merchantTransactions = response.data.length;
                //console.log($scope.transactionData);
            });
              $http.get("/getMerchantComplainsById/"+$stateParams.id)
            .then(function(response) {            
                $scope.complainData = response.data;
                $scope.merchantComplains = response.data.length;
                //console.log($scope.transactionData);
            });
              $http.get("/getMerchantProfile/"+$stateParams.id)
            .then(function(response) {            
                $scope.merchantData = response.data[0];
                console.log($scope.merchantData);
            });
        
          }
    };
    $scope.manualAudit = function(){
            
            $http.get("/addEntryForMerchantToBlock/"+$stateParams.id)
            .then(function(response) {            
                $scope.auditData = response.data;
                 bootbox.alert("Report Generated and Entry Succesfully saved in Blockchain"+ ($scope.auditData!=''?', <br>Transaction Id : '+$scope.auditData:''));
                console.log($scope.auditData);
            });
             
    };
}); 
