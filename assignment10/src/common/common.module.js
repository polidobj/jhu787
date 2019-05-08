(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://my787jhu.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
