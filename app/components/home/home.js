app.controller('HomeController',['$scope',HomeController]);

function HomeController($scope){

    var eulerLinks = [];
    for (var i=1; i<11; i++){
        eulerLinks.push({
            name : 'Euler Problem ' + i,
            link : '#/euler/' + i
        });
    };

    $scope.sections = [
        {title: 'General ', links : [
            {name:'Storytime', link:'#/storytime/1'}
        ]},
        {title: 'Turtle', links : [
            {name:'Turtle Power', link:'#/turtle/1'}
        ]},
        {title: 'Project Euler', links : eulerLinks}
    ];




}