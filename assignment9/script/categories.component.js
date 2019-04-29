(function () {

angular.module('data')
.component('categories', {
  templateUrl: 'templates/categories.component.html',
  bindings: {
    categorieslist: '<'
  }
});


})();