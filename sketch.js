var canvas, backgroundImage;

var gameState = 0;
 var playerCount;
var allPlayers;
 var database;

 var form,game,player;


 var cars,car1,car2,car3,car4;
 function setup(){
   canvas = createCanvas(displaywidth-20,displayheight-30);
   database = firebase.database();
   game = new Game();
   game.getState();
   game.start();
 }
 function draw(){
   
 }