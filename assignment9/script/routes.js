(function () {
	
angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
    .state('home', {
		url: '/',
		template: '<p>Use the categories link above to view the categories on the menu.</p>'
    })

    .state('categories', {
		url: '/categories',
		templateUrl: 'templates/categories.state.html',
		controller: 'CategoriesController as catcon',
		resolve: {
		  categories: ['MenuDataService', function (MenuDataService) {
			return MenuDataService.getAllCategories();
		  }]
		} 
   
	})	
	
    .state('items', {
		url: '/items/{catid}',
		templateUrl: 'templates/items.state.html',
		controller: 'ItemsController as itemcon',
		resolve: {
		  items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
			return MenuDataService.getItemsForCategory($stateParams.catid);
		  }]
		}
    });

}

})();