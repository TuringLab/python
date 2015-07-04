app.controller('TurtleController',['$scope','View',TurtleController]);

function TurtleController($scope,View){
    $scope.hello = "HELLO";

    var refresh = function(){
        $scope.scriptClass = View.scriptClass;
        $scope.codeClass = View.codeClass;
    }    

    View.register(refresh)

}