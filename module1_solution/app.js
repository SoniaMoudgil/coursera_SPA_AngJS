(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
  
  $scope.menu = "";
  $scope.message = "Please enter the data first";

  $scope.displayMessage = function () {
    var msg = calculatMessageForString($scope.menu);
    $scope.message = msg;
  };
}


  function calculatMessageForString(string) {
    var msg = "Please enter the data first";
    
    console.log("menu is "+string);
    
    var totalItems = string.split(",").length;

    console.log("totalItems is "+totalItems);

    if (string=="")
     msg="Please enter the data first";//""
    else if(totalItems>3)
      msg="Too Much!";//"1,2,3,4" and "1,,3"
    else if(totalItems<=3 && totalItems>0)
      msg="Enjoy!";// "1"and "1,2", and "1,2,3" and "1,," 
    
    return msg;
  }





})();
