var database;
var form;
var player;
var game;

function setup(){
  database = firebase.database();
  createCanvas(400,400);
  game=new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");
  
  
}


