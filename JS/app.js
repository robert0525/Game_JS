let GameManger = {
setGameStart: function(classType) {
    this.resetPlayer(classType);
    this.setPreFight();
    },
resetPlayer: function(classType) {
    switch( classType) {
        case "Warrior":
            player = new Player(classType, 200, 0, 200, 100, 50);
            break;
        case "Rogue":
            player = new Player(classType, 100, 0, 100, 150, 200);
            break;
        case "Mage":
            player = new Player(classType, 80, 0, 50, 200, 100);
        break;
    default:
    }
},
setPreFight: function() {

}

}