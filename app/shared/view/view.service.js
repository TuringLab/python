app.factory('View',[function(){

    var view = {};
    var watchers = [];

    view.scriptBig = function(){
        view.scriptClass = 'col-md-8';
        view.codeClass = 'col-md-4';
        notify();
    }

    view.codeBig = function(){
        view.scriptClass = 'col-md-4';
        view.codeClass = 'col-md-8';
        notify();
    }

    view.scriptFull = function(){
        view.scriptClass = 'col-md-12';
        view.codeClass = 'ng-hide';
        notify();
    }

    view.codeFull = function(){
        view.scriptClass = 'ng-hide';
        view.codeClass = 'col-md-12';
        notify();
    }

    view.register = function(watcher){
        watchers.push(watcher);
        watcher();
    }

    var notify = function(){
        for (var i=0; i<watchers.length; i++){
            watchers[i]();
        }
    }

    view.codeBig();

    return view;

}]);