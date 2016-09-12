app.controller("ViewCtrl", function($scope, FlowerData) {
  $scope.flowers = [];

  FlowerData.getFlowers($scope.$parent.getUser())
  .then( (flowerArray) => {
    $scope.flowers = flowerArray;

  });
});