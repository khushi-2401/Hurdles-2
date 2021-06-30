const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

trackImg, hey;

var canvas;

var engine, world;

var gameState = 0;

var playerCount;
var allPlayers;

var distance = 0;

var database;

var count = 0;

var form, player, game;

var Image1, Image2, Image3, Image4, Image5, Image6, trackImg, hey;

var runners, runner1, runner2, runner3, runner4, runner5, runner6;


function preload(){
  Image1 = loadImage("1.png");
  Image2 = loadImage("2.jpg");
  Image3 = loadImage("3.png");
  Image4 = loadImage("4.png");
  Image5 = loadImage("5.png");
  Image6 = loadImage("6.png");
  trackImg = loadImage("track.jpg");
  hey = loadImage("download.png")
 
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);

  engine = Engine.create();
  world = engine.world;


  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

  h1 = new Hurdles(500,100);
 

  

  
}


function draw(){

  Engine.update(engine);

  


  if(playerCount === 6){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    game.play();
    
  h1.display();
  

  }
  
  if(gameState === 2){
    game.end();
  }
}
