'use strict';

MetronicApp.controller('DashboardController', function($rootScope, $scope, $http, $timeout ) {
    $scope.$on('$viewContentLoaded', function() {         

        // initialize core components
        Metronic.initAjax();
        $scope.initMap();
        $scope.loadMerchants('today');
        
    });
    
    $scope.loadMerchants = function(type){
     // http://localhost:3000/getEntryForMerchant/ARDPR1165A
        $http.get("/getMerchantsByTransaction")
        .then(function(response) {
            var data ;
            if(type == 'today'){
                data  = response.data.today;
            }else if(type == 'week'){
                data = response.data.week;
            }else if(type == 'month'){
                data = response.data.month;
            }
            
            
            $scope.merchantData = response.data;
            //console.log(response.data);
            $scope.merchantData.totalMerchants = response.data.totalMerchants;
        });
    };
    $scope.transactions = {'revenue':14568, 'denials':25, 'complains':3 , 'transactionsCount':49 };
    $scope.loadTransactions = function(type){
        var data = [{'day':{'revenue':14568, 'denials':25, 'complains':3 , 'transactionsCount':49 },
                    'week':{'revenue':145682, 'denials':187, 'complains':14 , 'transactionsCount':600 },
                    'month':{'revenue':545684, 'denials':1639, 'complains':127, 'transactionsCount':4643 }}];
        console.log(data);
        $scope.transactions = data[0][type];
    } 
    
    $scope.initMap = function(){
      /*  var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
          center: {lat: 15.283434, lng: 73.985034},
          zoom: 14,
          styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},               {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]

        });
      
      var flagAreas = [
        [15.283082, 73.984820,{'name':'xyz'}], [15.284014, 73.986794,{'name':'xyz'}],
        [15.283434, 73.985034,{'name':'xyz'}], [15.283124, 73.986450,{'name':'xyz'}],
        [15.282627, 73.987802,{'name':'xyz'}], [15.282896, 73.984069,{'name':'xyz'}],
        [15.282979, 73.981065,{'name':'xyz'}], [15.285856, 73.983296,{'name':'xyz'},{'name':'xyz'}],
        [15.283910, 73.983468,{'name':'xyz'}], [15.284345, 73.983639,{'name':'xyz'}],
        [15.285711, 73.987051,{'name':'xyz'}], [15.284179, 73.987330,{'name':'xyz'}]
      ];
      var pointer = {
    path: 'M 10 10 L 30 10 L 20 30 z',
    fillColor: '##026D3F',
    fillOpacity: 0.9,
    scale: 1,
    strokeColor: '#28b779',
    strokeWeight: 7
  };
      angular.forEach(flagAreas, function(value, key) {
  

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(value[0], value[1]),
            map: map,
            icon:pointer,
            animation:google.maps.Animation.DROP,
            data : 'sasa'
          });
           google.maps.event.addListener(marker, 'click', function() {console.log(data);});
          });
     
  }*/
         var map = new GMaps({
            div: '#gmap_marker',
            lat: 15.283082,
            lng: 73.984820,
            styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},               {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
        });
       /* map.addMarker({
           lat: 15.283082,
            lng: 73.984820,
            title: 'Lima',
            details: {
                database_id: 42,
                author: 'HPNeo'
            },
            click: function (e) {
                if (console.log) console.log(e);
                alert('You clicked in this marker');
            }
        });
        */
        var flagAreas = [
        [15.283082, 73.984820,{'name':'Raikar Jewellers',address:'',id:1}], 
        [15.284014, 73.986794,{'name':'Tato ',address:'',id:1}],
        [15.291116, 73.958888,{'name':'Mustaffa',address:'',id:1}], 
        [15.283124, 73.986450,{'name':'Sharda classic',address:'',id:1}],
        [15.282896, 73.984069,{'name':'PSPl infotech',address:'',id:1}],
        [15.275220, 73.955884,{'name':'Borkars',address:'',id:1}], 
        [15.285856, 73.983296,{'name':'Sanjay Stores'},{'name':'xyz',address:'',id:1}],
        [15.283910, 73.983468,{'name':'Shyam furnitures',address:'',id:1}], 
        [15.284990, 73.965068,{'name':'Trip Advisor',address:'',id:1}],
        [15.277124, 73.989444,{'name':'Ranche Ghar Restaurant',address:'',id:1}], 
        [15.284179, 73.987330,{'name':'Angles Sports',address:'',id:1}]
      ];
        angular.forEach(flagAreas, function(value, key) {
            map.addMarker({
            lat: value[0],
            lng: value[1],
            title: 'Marker with InfoWindow',
            infoWindow: {
                content: '<span style="color:#000">'+value[2].name+'</span><span style="color:#000">'+value[2].address+'</span><a href="">Details</a>'
            }
        });
        })
        
        var path = [
            [15.295753, 73.953052],
            [15.281926, 73.952794],
            [15.275551, 73.950477],
            [15.267851, 73.958974],
            [15.265118, 73.976998],
            [15.271163, 74.002233],
            [15.295587, 73.989615],
            [15.305108, 73.975968],
            [15.301465, 73.962922],
            [15.295753, 73.953052]
        ];

        map.drawPolyline({
            path: path,
            strokeColor: '#131540',
            strokeOpacity: 0.6,
            strokeWeight: 3
        });
        map.setZoom(12);
    }
  
  
});