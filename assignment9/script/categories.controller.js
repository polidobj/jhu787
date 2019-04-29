(function () {
'use strict';
	
angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['categories'];
function CategoriesController(categories) {
  var catcon = this;
  catcon.categories = categories;
}

})();