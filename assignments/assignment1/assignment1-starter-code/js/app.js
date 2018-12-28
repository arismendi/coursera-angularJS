(function(){
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.message = "";
  $scope.dishes = "";

  $scope.LunchCheck = function(){
    if($scope.dishes.trim() === ""){
      $scope.message ="";
      return;
    }
    var dishesNumber = countDishes($scope.dishes.split(','));
    $scope.message = (dishesNumber>3) ? "Too much!" : "Enjoy!";
  }

  function countDishes(dishes_list) {
  var totalDishes = 0;
  for (var i = 0; i < dishes_list.length; i++) {
    if(dishes_list[i].trim() === "")
    continue;
    totalDishes++;
  }
  return totalDishes;
}
}

})();
