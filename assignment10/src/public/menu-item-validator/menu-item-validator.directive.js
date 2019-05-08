(function () {
"use strict";

angular.module('public')
.directive('menuItemValidationDirective', menuItemValidationDirective);

menuItemValidationDirective.$inject = ['MenuService'];
function menuItemValidationDirective(MenuService) {
	var menuItemValidationCtrl = this;
	return {
		require: 'ngModel',
		link: function(scope, element, attr, mCtrl) {
			function myValidation(value) {
				console.log('validate menu item');
				MenuService.getMenuItem(value).then(function(response){
					// favorite is ok
					console.log('menu item is valid');
					mCtrl.$setValidity('favorite', true);
				}).catch(function(error) {
					//favorite is invalid
					console.log('menu item is invalid.');
					mCtrl.$setValidity('favorite', false);
				});
				return value;
			}
			mCtrl.$parsers.push(myValidation);
		}
	};
}

})();