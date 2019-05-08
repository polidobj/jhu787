describe('menuservice', function () {

	var menuservice;
	var $httpBackend;
	var ApiBasePath;

	beforeEach(function () {
		module('common');

		inject(function ($injector) {
			menuservice = $injector.get('MenuService');
			$httpBackend = $injector.get('$httpBackend');
			//ApiBasePath = $injector.get('ApiPath');
			// I don't know why this won't work.
			// ApiPath is defined in common.module.js
		});
	});

	it('should return A1 menu item', function() {
		var ApiPath = 'https://my787jhu.herokuapp.com';
		$httpBackend.whenGET(ApiPath + '/menu_items/A1.json').respond({"id":1,"short_name":"A1","name":"Won Ton Soup with Chicken","description":"chicken-stuffed won tons in clear chicken broth with white meat chicken pieces and a few scallions","price_small":2.55,"price_large":5.0,"small_portion_name":"pint","large_portion_name":"quart","created_at":"2019-05-07T19:29:22.345Z","updated_at":"2019-05-07T19:29:22.345Z","category_short_name":"A","image_present":true});
		menuservice.getMenuItem('A1').then(function(response) {
			expect(response).toEqual({"id":1,"short_name":"A1","name":"Won Ton Soup with Chicken","description":"chicken-stuffed won tons in clear chicken broth with white meat chicken pieces and a few scallions","price_small":2.55,"price_large":5.0,"small_portion_name":"pint","large_portion_name":"quart","created_at":"2019-05-07T19:29:22.345Z","updated_at":"2019-05-07T19:29:22.345Z","category_short_name":"A","image_present":true});
		});
		$httpBackend.flush();
	});

});
