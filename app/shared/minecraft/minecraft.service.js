app.factory('Minecraft',function(){

    var cards = [{
        name: 'Teleport',
        summary: 'teleport the player to a new position on the map',
        link: 'https://arghbox.files.wordpress.com/2014/04/intro_a5.pdf'
        },{
        name: 'Flower Path',
        summary: 'create a trail of flowers that follows the player',
        link: 'https://arghbox.files.wordpress.com/2014/04/flowerpath_a5.pdf'
        },{
        name: 'Warehouse',
        summary: 'use maths to create the basic structure for a house',
        link: 'https://arghbox.files.wordpress.com/2014/04/warehouse_a5.pdf'
        },{
        name: 'Chat',
        summary: 'learn how to use strings to create a chat program',
        link: 'https://arghbox.files.wordpress.com/2014/04/chat_a5.pdf'
        },{
        name: 'Freeze',
        summary: 'freeze any blocks of water below the player',
        link: 'https://arghbox.files.wordpress.com/2014/04/freeze_a5.pdf'
        },{
        name: 'Block Fighter',
        summary: 'create a game that gives the player points for hitting blocks',
        link: 'https://arghbox.files.wordpress.com/2014/04/blockfighter_a5.pdf'
        }];

    var minecraft = {};

    minecraft.query = function(){
        return cards;
    };

    return minecraft;

});