var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");

}

function setup(){
  createCanvas(600,600);

  
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  
  tower = createSprite(300,300)
  tower.addImage(towerImg)
  tower.velocityY=2
  
  ghost = createSprite(200,200)
  ghost.addImage(ghostImg)
  ghost.scale=0.3
}

function draw(){
  background(0);
  if(gameState==="play"){
  if(tower.y>400){
  tower.y=300  
  }
  createDoor()
  
  ghost.velocityY+=0.8 
    if(keyDown("space")){
    ghost.velocityY=-10   
    }
  if(keyDown("right_arrow")){
  ghost.x+=3
  }
  if(keyDown("left_arrow")){
  ghost.x-=3
  }
  if(ghost.y>600){
  gameState="end"
  }
  }
 if(gameState==="end"){
tower.destroy();
doorsGroup.destroyEach();
climbersGroup.destroyEach();
 }  
  
  drawSprites();
  
}

function createDoor(){
if(frameCount% 200===0){
door = createSprite(200,-50)
door.x=round(random(100,400))
door.addImage(doorImg)
door.velocityY=2 
door.lifetime=800
doorsGroup.add(door)
  
climber = createSprite(200,10)
climber.x = door.x
climber.addImage(climberImg)
climber.velocityY=2
climber.lifetime=800
climbersGroup.add(climber)
  
ghost.depth=door.depth
ghost.depth+=1
}
}