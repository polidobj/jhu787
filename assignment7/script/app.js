(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service ('ShoppingListCheckOffService', ShoppingListCheckOffService)
.filter('angularDollars', AngularDollarsFilter);

// LIST #1 - controller
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var ToBuyList = this;

  ToBuyList.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

  ToBuyList.boughtItem = function (itemIndex) {
    ShoppingListCheckOffService.boughtItem(itemIndex);
  };
}


// LIST #2 - controller
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var AlreadyBoughtList = this;
  AlreadyBoughtList.show = false;
  AlreadyBoughtList.boughtItems = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService () {
  var service = this;

  // List of shopping items
  var toBuyItems = [{ name: "cookies", quantity: 12, pricePerItem: 1 },
	{ name: "bundt cakes", quantity: 3, pricePerItem: 7 },
	{ name: "doughnuts", quantity: 12, pricePerItem: 2 },
	{ name: "scones", quantity: 4, pricePerItem: 4 },
	{ name: "brownies", quantity: 8, pricePerItem: 3 }];
  var boughtItems = [];

  service.boughtItem = function (itemIndex) {
    var boughtItemArray = toBuyItems.splice(itemIndex, 1);
	var boughtItem = boughtItemArray[0];
	boughtItems.push(boughtItem);
	
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

function AngularDollarsFilter() {
  return function (input) {
    return "$$$ " + input ;
  };
}
})();
