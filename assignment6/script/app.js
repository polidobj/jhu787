(function () {
'use strict';

angular.module('LunchCheck', []).controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope) {
  $scope.message = "";
  $scope.lunchString = "";
  $scope.spanclass = "";
  $scope.divclass = "";
  
  $scope.checkLunch = function () {
	  var lunchArray = $scope.lunchString.split(",");
	  
	  var count = 0;
	  for(var i=0; i<lunchArray.length; ++i){
		if(lunchArray[i].trim().length > 0)
			++count;
	  }	  
	  
	  if(count == 0){
		  $scope.message = "Please enter data first";
		  $scope.spanclass = "problem";
		  $scope.divclass = "problemborder";
	  } else if(count <= 3){
		  $scope.message = "Enjoy!";
		  $scope.spanclass = "ok";
		  $scope.divclass = "okborder";
	  }else {
		  $scope.message = "Too much!";
		  $scope.spanclass = "ok";
		  $scope.divclass = "okborder";
	  }
  };

};


})();
