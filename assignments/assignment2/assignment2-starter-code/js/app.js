(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService) {
    var listToBuy = this;

    listToBuy.toBuyItems = ShoppingListCheckOffService.getToBuyItems();
    listToBuy.removeToBuyItem = function(itemIndex) {
      ShoppingListCheckOffService.removeFromToBuy(itemIndex);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var listBought = this;

    listBought.boughtItems = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    // Lists of already bought items
    var boughtList = [];
    service.getBoughtItems = function() {
      return boughtList;
    };

    // Lists of items to buy
    var toBuyList = [{
        name: "Cookies",
        quantity: 10
      },
      {
        name: "Pizza",
        quantity: 5
      },
      {
        name: "Tea",
        quantity: 10
      },
      {
        name: "Sugar",
        quantity: 2
      },
      {
        name: "Coffee",
        quantity: 20
      }

    ];

    service.getToBuyItems = function() {
      return toBuyList;
    };

    service.removeFromToBuy = function(itemIndex) {
      boughtList.push(toBuyList[itemIndex]);
      toBuyList.splice(itemIndex, 1);
    };

  }

})();
