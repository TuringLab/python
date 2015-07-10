app.controller('HomeController',['$scope','Project',HomeController]);

function HomeController($scope,Project){

    $scope.projects = Project.query();

    $scope.problems = [];
    for (var i=1; i<11; i++){
        $scope.problems.push({
            name : 'Euler Problem ' + i,
            link : '#/euler/' + i
        });
    };

}