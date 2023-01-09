(function () {
  "use strict";
  //define module with name, then dependencies module will need in array
  //any variables with $xxxx are reserved by Angular and can be used throughout the controller
  angular
    .module("CounterApp", [])
    //name of controller & controller function
    .controller("CounterController", CounterController);

  CounterController.$inject = ["$scope", "$timeout"];
  function CounterController($scope, $timeout) {
    $scope.counter = 0;

    //native Angular method
    $scope.upCounter = function () {
      $timeout(function () {
        $scope.counter++;
        console.log("Counter incremented!");
      }, 2000);
    };

    //apply method w/ setTimeout
    /* $scope.upCounter = function () {
      setTimeout(function () {
        $scope.$apply(function () {
          $scope.counter++;
        });
        console.log("counter incremented");
      }, 2000);
    }; */

    //digest method w/ setTimeout
    /*  $scope.upCounter = function () {
      setTimeout(function () {
        $scope.counter++;
        console.log("counter incremented");
        $scope.$digest();
      }, 2000);
    }; */
  }
})();
