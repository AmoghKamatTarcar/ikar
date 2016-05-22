app.controller('TransactionCtrl', function ($scope, $ionicModal, $ionicPopover, $timeout,$ionicPlatform,$cordovaBarcodeScanner,$ionicLoading, $ionicModal, $ionicPopup) {
        
        
    
        $scope.saveTransaction = function(transaction){
            console.log(transaction);
            $scope.closeModal();
        }


})