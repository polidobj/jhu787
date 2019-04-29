(function () {

angular.module('data')
.component('items', {
  templateUrl: 'templates/items.component.html',
  bindings: {
    itemslist: '<'
  }
});

})();