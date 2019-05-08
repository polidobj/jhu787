(function () {
"use strict";

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['MenuService', 'UserInfoService', 'ApiPath'];
function MyinfoController(MenuService, UserInfoService, ApiPath) {
  var myinfoCtrl = this;
  myinfoCtrl.myinfo = UserInfoService.getUserInfo();
  
  myinfoCtrl.myinfoIsNull = myinfoCtrl.myinfo === null;
  
  if(myinfoCtrl.myinfo != null) {
	  MenuService.getMenuItem(myinfoCtrl.myinfo.favoritedish).then(function (response){
		  var imageUrl =  ApiPath + "/images/" + response.short_name + ".jpg";
		  myinfoCtrl.fav = {
			  name: response.name,
			  description: response.description,
			  image:  imageUrl
		  };
	  });  
  }
}

})();