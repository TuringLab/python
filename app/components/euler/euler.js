app.controller('EulerController',['$scope','$sce','$routeParams','View',EulerController]);

function EulerController($scope,$sce,$routeParams,View){
    $scope.eulerId = $routeParams.eulerId;

    var eulerUrl = 'http://projecteuler.net/problem=' + $scope.eulerId
    $scope.eulerUrl = $sce.trustAsResourceUrl(eulerUrl)

    var eulerAnswerUrl = 'http://blog.dreamshire.com/project-euler-' + $scope.eulerId + '-solution/'
    $scope.eulerAnswerUrl = $sce.trustAsResourceUrl(eulerAnswerUrl)

    $scope.answers = {1: '233168', 2: '4613732', 3: '6857', 4: '906609', 5: '232792560', 6: '25164150', 7: '104743', 8: '23514624000', 9: '31875000'};

    var refresh = function(){
        $scope.scriptClass = View.scriptClass;
        $scope.codeClass = View.codeClass;
    }    

    View.register(refresh)

}