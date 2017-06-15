(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.items = "";
  $scope.list= $scope.items.split(",");
  $scope.numofitems = 0;
  $scope.message=" ";

  $scope.calcumsg = function() {
  	// console.log($scope.items);
  if ($scope.items === "") {
  		$scope.message = "Please Enter Data First";
  	}
  else {
  	$scope.message = calcumsg2($scope.items);
 	}
  // console.log(list);
  // console.log(numofitems);
  };
  
  // console.log(message);
}

function calcumsg2(listoitms){
	var iitms = listoitms.split(",")
	var cnt = iitms.length;
	console.log(listoitms);
	console.log(iitms);
	console.log(cnt);
	if (cnt <=3) {
  		return "Enjoy!";
  		// console.log("hi i m here");
  	}
  	else{
  		return "Too much!";
  		// console.log("hi i m also here");
  	}
}
})();
