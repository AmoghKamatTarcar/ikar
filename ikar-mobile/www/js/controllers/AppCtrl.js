app.controller('AppCtrl', function ($scope, $ionicModal, $ionicPopover, $timeout,$ionicPlatform,$cordovaBarcodeScanner,$ionicLoading, $ionicModal, $ionicPopup, $http,ionicMaterialInk) {
        // Form data for the login modal
        $scope.loginData = {};
        $scope.serverUrl = "http://10.244.50.2:3000/"
        $scope.currentUserPAN = 'ARDP1165R';
    
        var navIcons = document.getElementsByClassName('ion-navicon');
        for (var i = 0; i < navIcons.length; i++) {
            navIcons.addEventListener('click', function () {
                this.classList.toggle('active');
            });
        }

      /*  var fab = document.getElementById('fab');
        fab.addEventListener('click', function () {
            //location.href = 'https://twitter.com/satish_vr2011';
            window.open('https://twitter.com/satish_vr2011', '_blank');
        });*/

        // .fromTemplate() method
        var template = '<ion-popover-view>' +
                        '   <ion-header-bar>' +
                        '       <h1 class="title">My Popover Title</h1>' +
                        '   </ion-header-bar>' +
                        '   <ion-content class="padding">' +
                        '       My Popover Contents' +
                        '   </ion-content>' +
                        '</ion-popover-view>';

        $scope.popover = $ionicPopover.fromTemplate(template, {
            scope: $scope
        });
        $scope.closePopover = function () {
            $scope.popover.hide();
        };
        //Cleanup the popover when we're done with it!
        $scope.$on('$destroy', function () {
            $scope.popover.remove();
        });

      $ionicPlatform.ready(function() {
           $scope.scanBarcode = function() {
                $scope.loading();
               $scope.openModal();
                $cordovaBarcodeScanner.scan().then(function(scandata) {
                    console.log(scandata);
                    $scope.loading();
                    if(scandata.cancelled==false){
                    $scope.transaction = [];
                    $scope.openModal();
                   // $scope.getMerchantByTan(scandata);
                    data = JSON.parse(scandata.text);
                    console.log(data);
                    $scope.transaction.PAN = data.PAN;
                    $scope.transaction.TIN = data.TIN;
                    $scope.transaction.storename = data.name;
                       
                    }else{
                       $scope.closeModal(); 
                    }
                }, function(error) {
                    console.log("An error happened -> " + error);
                    $scope.showPopup('Something went wrong!!', 'Transaction Failed');
                });
        };
        }); 


        $scope.loading = function() {
            $ionicLoading.show({
                template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
            });

            // For example's sake, hide the sheet after two seconds
            $timeout(function() {
                $ionicLoading.hide();
            }, 2000);
        };

        $ionicModal.fromTemplateUrl('my-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });

        $scope.openModal = function() {
            $scope.modal.show();
        };
        $scope.closeModal = function() {
            $scope.modal.hide();
        };
        // Cleanup the modal when we're done with it
        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });
         $scope.showPopup = function(msg,title) {
            var alertPopup = $ionicPopup.alert({
                title: title,
                template: msg
            });

            $timeout(function() {
                //ionic.material.ink.displayEffect();
                ionicMaterialInk.displayEffect();
            }, 0);
        };
        $scope.saveTransaction = function(transaction){
            console.log(transaction);
            
            
            var data = JSON.stringify({
                userPAN: $scope.currentUserPAN,
                merchantTIN : $scope.transaction.TIN,
                transactionAmount : transaction.amount,
                transactionDate : new Date(),
                transactionApproved : 0,
                transactionDesc : transaction.description
            });
            
            $http.post($scope.serverUrl+'api/transactions', data).success(function(data, status) {
                $scope.showPopup('Balance will be added to your account', 'Transaction Saved');
                $scope.closeModal();
            })
            
        }
        $scope.toggelInput = function(e){
            $(e.target).toggleClass("activehash");
        };
        $scope.showInput = function(e){
            $("#categoryinput").toggle('slow')
        };
        $scope.getMerchantByTan = function(scandata){
            
            $http({
              method: 'GET',
              url: $scope.serverUrl+'getMerchant/'+3543584301273778
            }).then(function successCallback(response) {
                console.log(response);
                
                // this callback will be called asynchronously
                // when the response is available
              }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
              });
        }
       
    });
