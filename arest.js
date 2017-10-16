angular.module('app', [])
  .controller('mainCtrl', mainCtrl)

function mainCtrl ($scope) {
  $scope.famList = [];
  $scope.famAdd = function() {
    var fam = {
      person: $scope.inputPerson,
      father: $scope.inputFather,
      mother: $scope.inputMother,
      done: false
    }

    $scope.famList.push(fam);
    console.log($scope.famList);
  }

  $scope.remove = function() {
    for (var item in $scope.famList) {
      if (item.done) {
        delete $scope.famList.item;
      }
    }
  }
};
