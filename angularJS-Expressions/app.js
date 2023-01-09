(function () {
  ("use strict");
  //define module with name, then dependencies module will need in array
  //any variables with $xxxx are reserved by Angular and can be used throughout the controller
  angular
    .module("MsgApp", [])
    //name of controller & controller function
    .controller("MsgController", MsgController);

  //add array with what controller is to expect to protect when using minification
  MsgController.$inject = ["$scope"];

  function MsgController($scope) {
    $scope.name = "Dakota";
    $scope.stateOfBeing = "hungry";

    $scope.sayMessage = function () {
      return "Dakota wrote this string!";
    };

    $scope.feedCat = function () {
      $scope.stateOfBeing = "fed";
    };
  }
})();
