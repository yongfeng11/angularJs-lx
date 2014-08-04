// 为核心的 list 服务创建模块
var showList = angular.module( "list", ["ngRoute"] );

// 在 URL ,模板和控制器之间建立映射关系
function umRouteConfig ( $routeProvider ) {
	$routeProvider
	.when( "/", {
		controller:Listcontent,
		templateUrl:"list.html"
	})
	.otherwise({
		redirectTo:"/"
	})
}

showList.config( umRouteConfig );


// 请求数据
function Listcontent ( $scope, $http ) {
	$http.get( "user.json" ).success( function ( data ) {
		console.log(data);
		$scope.lists = data;
	})
}
