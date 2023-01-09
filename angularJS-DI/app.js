(function () {
  ("use strict");
  //define module with name, then dependencies module will need in array
  //any variables with $xxxx are reserved by Angular and can be used throughout the controller
  angular
    .module("DIApp", [])
    //name of controller & controller function
    .controller("DIController", DIController);

  //add array with what controller is to expect to protect when using minification
  DIController.$inject = ["$scope", "$filter", "$injector"];

  function DIController($scope, $filter, $injector) {
    $scope.name = "Dakota";

    $scope.upper = function () {
      let upCase = $filter("uppercase");
      $scope.name = upCase($scope.name);
    };

    console.log($injector.annotate(DIController));
  }
})();
