app.controller('UserCtrl', function($scope, $stateParams, $cordovaBarcodeScanner,$ionicScrollDelegate,$ionicPlatform,ionicMaterialInk) {
    /* ionic.material.motion.pushDown({
        selector: '.push-down'
    });
    */
    ionicMaterialInk.displayEffect();

   // document.addEventListener("deviceready", function () {

   //     }, false);
                
    
     $scope.unfold = function(){
        console.log('herer');
         $(".fold-it-step1").css({'display' : 'block','position': 'relative'});
         $(".fold-it-step2").css({'display' : 'block','position': 'relative'});
    }
     $scope.fold = function(){
        console.log('herer');
         $(".fold-it-step1").css({'display' : 'none'});
         $(".fold-it-step2").css({'display' : 'none'});
    }
     $scope.scrollTop = function() {
    $ionicScrollDelegate.scrollTop();
  };



//$('#sub-header').on("touchmove", function (event) {
    
    $scope.dragHead = function(event,customheight){
        var position;
     //var scroll = $ionicScrollDelegate.$getByHandle('content').getScrollPosition().top;
        
        if(customheight>0){
            position = customheight;
        }else{
           // console.log('still');
            position = event.gesture.center.pageY;
        }
     
     var totalHeight = 400;
  if(position<totalHeight){
    if(position>100){
        if(position<200){           
            $(".action-button-wrapper").css({'opacity' : "0.2"});
        }else{
            $(".action-button-wrapper").css({'opacity' : '1'});
        }
        $(".action_area").css({'height' : position+'px'});
        $(".margin-top-preload").css({'top' : position+'px'});
        $(".custom-button").removeClass('custom-button-minimize');
        $(".action-button-wrapper").removeClass('action-button-wrapper-minimizer');
       
    }else{
        $(".custom-button").addClass('custom-button-minimize');
        $(".action-button-wrapper").addClass('action-button-wrapper-minimizer');
        $(".action-button-wrapper").css({'opacity' : '1'});
        if(customheight>0){
            $(".action_area").css({'height' : position+'px','transition': '1000ms'});
            $(".margin-top-preload").css({'top' : position+'px','transition': '1000ms'});
        }
        
    }
        
  }
    
};
    $scope.pageLoad = function(){
       var $container = $( '#uc-container1' ),
					pfold = $( '#uc-container1' ).pfold({
						easing : 'linear',
                        containerEasing : 'linear',
						folds : 1,
                        speed : 1000,
						folddirection : ['bottom'],
                        onEndFolding : function() { return false; },
		                onEndUnfolding : function() {
                          /*
                            $scope.pfold2 = $( '#uc-container2' ).pfold({
                            easing : 'linear',
                            containerEasing : 'linear',
                            folds : 1,
                            speed : 1000,
                            folddirection : ['bottom'],
                            onEndFolding : function() { 
                              pfold.fold();   
                            $( '#uc-container2' ).css({'display':'none'});
                            },
                            onEndUnfolding : function() { }
                            });
                            $scope.pfold2.unfold() ;*/
                          //  $( '.uc-container' ).css({'top':'30px'});
                        }
					});
                

				$container.find( '.clickme' ).on( 'click', function() {
                   
					pfold.unfold();
                   $scope.dragHead(event,100);

				} );
        $( 'span.close' ).on( 'click', function() {
                  pfold.fold();
				//	$scope.pfold2.fold();
                   // $scope.dragHead(event,399);
            
                    
				} )
    };
    var values = [6,2,4,8,6,9,11,5,4,8,6,9];
    var months = {0: 'Jan',1: 'Feb',2: 'Mar',3: 'Apr',4: 'May',5: 'Jun',6: 'Jul',7: 'Aug',8: 'Sept',9: 'Oct',10: 'Nov',11: 'Dec'};
    var width = '160px';
    var height = '50px';
    var lineWidth = '0';
    var barWidth = '2';
    var barSpacing = '4';
    var type="bar";
    $('#sparkline').sparkline(values, {
        type: "bar",
        // Map the offset in the list of values to a name to use in the tooltip
        tooltipFormat: '{{offset:offset}} {{value}}',
        tooltipValueLookups: {'offset': months},
        width : width,
        height : height,
        lineColor : '#80CBC4',
        barColor : '#B2DFDB',
        spotColor : '#004D40',
        maxSpotColor : '#004D40',
        minSpotColor : '#004D40',
        lineWidth : lineWidth,
        barWidth : barWidth,
        barSpacing : barSpacing
    });
    $('#sparklineOne').sparkline(values, {
        type: type,
        // Map the offset in the list of values to a name to use in the tooltip
        tooltipFormat: '{{offset:offset}} {{value}}',
        tooltipValueLookups: {'offset': months},
        width : width,
        height : height,
        lineColor : '#80CBC4',
        barColor : '#F48FB1',
        spotColor : '#004D40',
        maxSpotColor : '#004D40',
        minSpotColor : '#004D40',
         lineWidth : lineWidth,
         barWidth : barWidth,
        barSpacing : barSpacing
    });
    $('#sparklineTwo').sparkline(values, {
        type: type,
        // Map the offset in the list of values to a name to use in the tooltip
        tooltipFormat: '{{offset:offset}} {{value}}',
        tooltipValueLookups: {'offset': months},
        width : width,
        height : height,
        barColor : '#004D40',
        fillColor : '#FFAB91',
        spotColor : '#004D40',
        lineWidth : lineWidth,
         barWidth : barWidth,
        barSpacing : barSpacing
    });
    $('#sparklineThree').sparkline(values, {
        type: type,
        // Map the offset in the list of values to a name to use in the tooltip
        tooltipFormat: '{{offset:offset}} {{value}}',
        tooltipValueLookups: {'offset': months},
        width : width,
        height : height,
        lineColor : '#80CBC4',
        barColor : '#9CCC65',
        spotColor : '#004D40',
        maxSpotColor : '#004D40',
        minSpotColor : '#004D40',
         lineWidth : lineWidth,
        barWidth : barWidth,
        barSpacing : barSpacing
    });
   
    
    
    
    
    $scope.pageLoad();
    

});

