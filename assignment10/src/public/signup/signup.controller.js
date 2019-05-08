(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService', 'UserInfoService'];
function SignupController(MenuService, UserInfoService) {
	var signupCtrl = this;
	signupCtrl.showBadFav = false;
	signupCtrl.showInfoSaved = false;
  
	signupCtrl.go = function(){
		//get the favorite dish
		MenuService.getMenuItem(signupCtrl.favoritedish).then(function(response){
			// favorite is ok
			signupCtrl.showBadFav = false;
			var userInfo = {
				favoritedish: signupCtrl.favoritedish,
				firstname: signupCtrl.firstname,
				lastname: signupCtrl.lastname,
				email: signupCtrl.email,
				phone: signupCtrl.phone
			};
			UserInfoService.setUserInfo(userInfo);
			signupCtrl.showInfoSaved = true;
		}).catch(function(error) {
			//favorite is invalid
			signupCtrl.showBadFav = true;
			signupCtrl.showInfoSaved = false;
			console.log(error);
		});
	};
  
}

})();