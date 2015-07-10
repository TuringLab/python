app.controller('ProjectController',['$scope','$sce','$routeParams','View','Project',ProjectController]);

function ProjectController($scope,$sce,$routeParams,View,Project){
    var projectName = $routeParams.projectName;
    var project = Project.get(projectName);

    $scope.name = project.name;
    $scope.worksheet = $sce.trustAsResourceUrl(project.worksheet);
    $scope.trinket = $sce.trustAsResourceUrl(project.trinket);

    var refresh = function(){
        $scope.scriptClass = View.scriptClass;
        $scope.codeClass = View.codeClass;
    }    

    View.register(refresh)

}