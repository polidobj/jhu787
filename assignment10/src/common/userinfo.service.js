(function () {
"use strict";

angular.module('common')
.service('UserInfoService', UserInfoService);


//UserInfoService.$inject = [''];
function UserInfoService() {
  var service = this;
  service.userInfo = null;

  service.getUserInfo = function () {
    return service.userInfo;
  };
  
  service.setUserInfo = function(userInfo){
	  service.userInfo = userInfo;
  };

}

})();
