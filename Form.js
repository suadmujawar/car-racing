class Form() {
    constructor() {}
    display() {
        var title=createElement('h2');
        title.html('Car racing game');
        title.position(130,0);
        var input=createInput('USERNAME');
        var button=createButton('PLAY');
        var greeting=createElement('h3');
        input.position(130,120);
        button.position(130,220);

        button.mousePressed(function() {
            input.hide();
            button.hide();
            var name=input.value();
            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html('WELCOME '+name);
            greeting.position(200,200);
        }) 
    }
}