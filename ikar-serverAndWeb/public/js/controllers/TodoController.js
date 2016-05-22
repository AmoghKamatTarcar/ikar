'use strict';

MetronicApp.controller('TodoController', function($rootScope, $scope, $http, $timeout) {
    $scope.$on('$viewContentLoaded', function() {   
        Metronic.initAjax(); // initialize core components     
        $scope.loadComplains();
    });
    
    $scope.loadComplains = function(){
      
        $http.get("/getMerchantComplains")
        .then(function(response) {
          
          var complainsData = []
          // 0: Pending ,1: completed, 2: overdue
          angular.forEach(response.data,function(record, key){
              if(!complainsData[record.status])complainsData[record.status] = []     
              complainsData[record.status].push(record);
          });
          console.log(complainsData);
          $scope.pendingCount = (complainsData[0])?complainsData[0].length:0;
          $scope.completedCount = (complainsData[1])?complainsData[1].length:0;
          $scope.overDueCount = (complainsData[2])?complainsData[2].length:0;
           
            $scope.totalComplaints = response.data.length;
          $scope.complains = complainsData[0];
        });
    };

    // set sidebar closed and body solid layout mode
    $rootScope.settings.layout.pageAutoScrollOnLoad = 1500;
});