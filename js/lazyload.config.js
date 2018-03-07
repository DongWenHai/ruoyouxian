(function () {
var app = angular.module('app');

//配置懒加载信息
app.config(["$provide", "$compileProvider", "$controllerProvider", "$filterProvider", function ($provide, $compileProvider, $controllerProvider, $filterProvider) {
 app.controller = $controllerProvider.register;
 app.directive = $compileProvider.directive;
 app.filter = $filterProvider.register;
 app.factory = $provide.factory;
 app.service = $provide.service;
 app.constant = $provide.constant;
}])
	.config(["$ocLazyLoadProvider", function ($ocLazyLoadProvider) {
		$ocLazyLoadProvider.config({
	 		debug: false,
	 		events: false,
	 		modules: [
			 	{
			 		name: 'foottabs',
			 		files: [
			 			'./views/foottabs/foottabsController.js',
			 			'./views/foottabs/foottabs.css'
			 		]
			 	},
			 	{
			 		name: 'home',
			 		files: [
			 			'./views/home/homeController.js',
			 			'./views/home/home.css'
			 		]
			 	},
			 	{
			 		name: 'clothes',
			 		files: [
			 			'./views/clothes/clothesController.js',
			 			'./views/clothes/clothes.css'
			 		]
			 	}
	 		]
 		});
	}]);
	
})();