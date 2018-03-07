angular.module('app')
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
		$stateProvider
			.state('foottabs', {
				url: '',
				abstract:true,
				templateUrl: './views/foottabs/foottabs.html',
				controller:'foottabsController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('foottabs');
					}]
				}
			})
			.state('foottabs.home', {
				url: '/home',
				templateUrl: './views/home/home.html',
				controller:'homeController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('home');
					}]
				}
			})
			.state('clothes', {
				url: '/clothes',
				templateUrl: './views/clothes/clothes.html',
				controller:'clothesController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('clothes');
					}]
				}
			})
			
	}])