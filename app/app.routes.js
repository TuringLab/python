app.config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/euler/:problemNumber', {
            templateUrl : './app/components/euler/euler.html',
            controller: 'EulerController'
        })
        .when('/project/:projectName', {
            templateUrl : './app/components/project/project.html',
            controller: 'ProjectController'
        })
        .when('/minecraft/:cardName', {
            templateUrl : './app/components/minecraft/minecraft.html',
            controller: 'MinecraftController'
        })
        .otherwise({
            templateUrl : './app/components/home/home.html',
            controller: 'HomeController'
        })
}]);