app.controller('StorytimeController',['$scope','View',StorytimeController]);

function StorytimeController($scope,View){
    $scope.hello = "HELLO";

    var refresh = function(){
        $scope.scriptClass = View.scriptClass;
        $scope.codeClass = View.codeClass;
    }    

    View.register(refresh)

}