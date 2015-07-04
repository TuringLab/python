app.controller('ViewController',['$scope','View',function($scope,View){

    $scope.buttons = [
        {icon:'glyphicon glyphicon-align-left',method: View.scriptFull},
        {icon:'glyphicon glyphicon-menu-right',method: View.scriptBig},
        {icon:'glyphicon glyphicon-menu-left',method: View.codeBig},
        {icon:'glyphicon glyphicon-console',method: View.codeFull}
    ];

}]);