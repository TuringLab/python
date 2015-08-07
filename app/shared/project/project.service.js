app.factory('Project', function(){

    var projectList = ['introduction','storytime','secretMessages','turtlePower','turtleAdvanced','turtleSpiral'];
    var projectDict = {
        introduction : {
            name: 'Introduction',
            summary: 'Learn the basics of programming python',
            worksheet : 'https://www.raspberrypi.org/learning/python-intro/',
            trinket : 'https://trinket.io/embed/python/1a7e03b22f'
        },
        storytime : {
            name: 'Storytime',
            summary: 'Write a program which creates a random story',
            worksheet : 'https://www.raspberrypi.org/learning/storytime/worksheet/',
            trinket : 'https://trinket.io/embed/python/c906debd87'
        },
        secretMessages : {
            name: 'Secret Messages',
            summary: 'Create a Python script to encrypt and decrypt messages',
            worksheet : 'http://projects.codeclub.org.uk/en-GB/10_python/01/Secret%20Messages.html',
            trinket : 'https://trinket.io/embed/python/72e25ee185'
        },
        turtlePower : {
            name: 'Turtle Power',
            summary: 'Learn how to control a Python turtle to draw shapes on the screen',
            worksheet : 'http://projects.codeclub.org.uk/en-GB/09_python/04/Turtle%20Power.html',
            trinket : 'https://trinket.io/embed/python/96cf15656a'
        },
        turtleAdvanced: {
            name: 'Turtle Advanced',
            summary: 'More advanced projects with the Python turtle',
            worksheet : 'http://michael0x2a.com/blog/turtle-examples',
            trinket : 'https://trinket.io/embed/python/7a3b3c913d'
        },
        turtleSpiral : {
            name: 'Turtle Spiral',
            summary: 'See a turtle spiral being created - just click run on the code',
            worksheet : 'http://www.ehow.com/how_12125602_draw-spirals-using-python.html',
            trinket : 'https://trinket.io/embed/python/0ed06ad269'
        },
        minecraft : {
            name: 'Minecraft Pi',
            summary: 'Warning this challenge can only be run on Raspberry Pi',
            worksheet : 'https://www.raspberrypi.org/learning/getting-started-with-minecraft-pi/worksheet/',
            trinket : 'https://trinket.io/embed/python/0ed06ad269'
        }
    }

    var project = {};

    project.query = function(){
        var results = [];
        angular.forEach(projectList, function(projectName){
            projectDict[projectName].link = '#/project/' + projectName;
            results.push(projectDict[projectName]);
        });
        return results;
    };

    project.get = function(projectName){
        return projectDict[projectName];
    };

    return project;

});