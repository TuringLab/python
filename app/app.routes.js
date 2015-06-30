app.config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/euler/:eulerId', {
            templateUrl : './app/components/euler/euler.html',
            controller: 'EulerController'
        })
        .when('/storytime/:storytimeId', {
            templateUrl : './app/components/storytime/storytime.html',
            controller: 'StorytimeController'
        })
        .when('/turtle/:turtleId', {
            templateUrl : './app/components/turtle/turtle.html',
            controller: 'TurtleController'
        })
        .otherwise({
            templateUrl : './app/components/home/home.html',
            controller: 'HomeController'
        })
}]);