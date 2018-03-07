angular.module('app')
	.controller('homeController',['$rootScope','$scope','$state',function($rootScope,$scope,$state){
		
		//banner数据
		$scope.banner = [
			{
				imgsrc: './images/banner.png',
				link:''
			},
			{
				imgsrc: './images/banner.png',
				link:''
			},
			{
				imgsrc: './images/banner.png',
				link:''
			},
			{
				imgsrc: './images/banner.png',
				link:''
			}
		];

		//索引圆个数
		$scope.pager = $scope.banner.length;

		//banner配置信息，autoPlay是否自动播放，showPager是否显示默认索引，slideInterval播放间隔时间，doesContinue是否循环播放
		$scope.bannerConfig = {
			autoPlay: true,
			showPager: true,
			slideInterval:2000,
			doesContinue: true
		};
		console.log($scope.bannerConfig);
	}])