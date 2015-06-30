app.controller('EulerController',['$scope','$sce','$routeParams',EulerController]);

function EulerController($scope,$sce,$routeParams){
    $scope.eulerId = $routeParams.eulerId;

    var eulerUrl = 'http://projecteuler.net/problem=' + $scope.eulerId
    $scope.eulerUrl = $sce.trustAsResourceUrl(eulerUrl)

    $scope.answers = {1: '233168', 2: '4613732', 3: '6857', 4: '906609', 5: '232792560', 6: '25164150', 7: '104743', 8: '23514624000', 9: '31875000'};
}