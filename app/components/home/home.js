app.controller('HomeController',['$scope','Project','Minecraft',HomeController]);

function HomeController($scope,Project,Minecraft){

    $scope.projects = Project.query();
    $scope.mineCards = Minecraft.query();

    $scope.problems = [];
    for (var i=1; i<11; i++){
        $scope.problems.push({
            name : 'Euler Problem ' + i,
            link : '#/euler/' + i
        });
    };

}