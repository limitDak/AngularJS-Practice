(function () {
  "use strict";
  //define module with name, then dependencies module will need in array
  //any variables with $xxxx are reserved by Angular and can be used throughout the controller
  angular
    .module("NameCalculator", [])
    //name of controller & controller function
    .controller("NameCalculatorController", function ($scope) {
      $scope.name = "";
      $scope.totalValue = 0;

      $scope.displayNumeric = function () {
        let totalNameValue = calculateNumericForString($scope.name);
        $scope.totalValue = totalNameValue;
      };

      function calculateNumericForString(string) {
        let totalStringValue = 0;
        for (var i = 0; i < string.length; i++) {
          totalStringValue += string.charCodeAt(i);
        }

        return totalStringValue;
      }
    });
})();
