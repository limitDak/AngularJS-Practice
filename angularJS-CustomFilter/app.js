(function () {
  ("use strict");
  //define module with name, then dependencies module will need in array
  //any variables with $xxxx are reserved by Angular and can be used throughout the controller
  angular
    .module("MsgApp", [])
    //name of controller & controller function
    .controller("MsgController", MsgController)
    .filter("line", LineFilter)
    .filter("truth", TruthFilter);

  //add array with what controller is to expect to protect when using minification
  MsgController.$inject = ["$scope", "lineFilter"];

  function MsgController($scope, lineFilter) {
    $scope.name = "Dakota";
    $scope.stateOfBeing = "hungry";

    $scope.sayMessage = function () {
      var msg = "Dakota wrote this string";
      return msg;
    };

    $scope.feedCat = function () {
      $scope.stateOfBeing = "fed";
    };

    $scope.sayLineMessage = function () {
      var msg = "Dakota wrote this string";
      msg = lineFilter(msg);
      return msg;
    };
  }

  function LineFilter() {
    return function (input) {
      input = input || "";
      input = input.replace("string", "line");
      return input;
    };
  }

  function TruthFilter() {
    return function (input, target, replace) {
      input = input || "";
      input = input.replace(target, replace);
      return input;
    };
  }
})();
