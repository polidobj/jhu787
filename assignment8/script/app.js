(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service ('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
	var list = this;
	list.searchTerm = "";
	list.found = [];

	list.search = function () {
		if(list.searchTerm.length > 0){
			var promise = MenuSearchService.getMatchedMenuItems(list.searchTerm);

			promise.then(function (response) {
				list.found = response;
			})
			.catch(function (error) {
				console.log("Something went terribly wrong.");
			});
		} else {
			list.found.length = 0;
		}

	};

	list.removeItem = function (itemIndex) {
		list.found.splice(itemIndex, 1);
	};
}	

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService ($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
	return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (result) {
		// process result and only keep items that match
		var foundItems = result.data.menu_items.filter(item => item.description.indexOf(searchTerm) !== -1);		

		// return processed items
		return foundItems;
	});	
  };
}	

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'itemsFound.html',
	restrict: 'E',
    scope: {
      foundItems: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}

function FoundItemsDirectiveController() {
  var list = this;
}
})();

