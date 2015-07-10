app.controller('MainController',['$rootScope','$route',MainController]);

function MainController($rootScope,$route){
    // $rootScope.$on('$routeChangeStart', function(event, current, next) { 
    //     if (!next) return;
    //     if (!next.$$route) return;
    //     if (!next.$$route.controller) return;
    //     if (next.$$route.controller == 'ProjectController') checkSave(event); 
    //     if (next.$$route.controller == 'EulerController') checkSave(event); 
    //  });


    var checkSave = function(event){
        var check = confirm("Make sure you have saved before clicking OK?");
        if (!check) event.preventDefault();
    }
}