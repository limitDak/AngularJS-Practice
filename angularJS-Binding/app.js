(function () {
  "use strict";
  //define module with name, then dependencies module will need in array
  //any variables with $xxxx are reserved by Angular and can be used throughout the controller
  angular
    .module("BindingApp", [])
    //name of controller & controller function
    .controller("BindingController", function ($scope) {
      $scope.firstName = "Dak";
      //$scope.fullName = "";

      $scope.showNumberOfWatchers = function () {
        console.log("# of Watchers: ", $scope.$$watchersCount);
      };

      $scope.setFullName = function () {
        $scope.fullName = $scope.firstName + " " + "DeL";
      };

      $scope.logFirstName = function () {
        console.log("First name is: ", $scope.firstName);
      };

      $scope.logFullName = function () {
        console.log("Full name is: ", $scope.fullName);
      };
    });
})();

//SUMMARY FOR BINDINGS

/*
  2-WAY BINDING:
    E.G. NG-MODEL
    - LISTENER FOR CHANGE ON IN PUTE AUTOMATICALLY SET UP BY ANGULAR UPDATES PROPVALUE ON $SCOPE
    - DIRECT UPDATE TO PROP VALUE IS AUTOMATICALLY UPDATED IN UI

  1-WAY BINDING:
    E.G. ({{PROP}})
    - DIRECT UPDATE TO PROP VALUE IS AUTOMATICALLY UPDATED IN UI

  1-TIME BINDING:
    E.G. ({{::PROP}})
    - INIITIALIZED VALUE OF PROP IS AUTOMATICALLY UPDATED UI
    - WATCHER FOR PROP IS REMOVED, SO UI NEVER AGAIN GETS UPDATED
*/
