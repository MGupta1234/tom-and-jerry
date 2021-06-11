var cat,catMoving,catStart,catScared;
var mouse,mouseStart,mouseThinking,mouseSmart;
var background1, backgroundImg;

function preload() {
    catMoving=loadAnimation("images/cat2.png","images/cat3.png");
    mouseThinking=loadAnimation("images/mouse2.png","images/mouse3.png");
    backgroundImg=loadImage("images/garden.png");
    catStart=loadAnimation("images/cat1.png");
    catScared=loadAnimation("images/cat4.png");
    mouseStart=loadAnimation("images/mouse1.png");
    mouseSmart=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    background1=createSprite(500,400,10,10);
    //background1.addImage(backgroundImg);
    cat=createSprite(800,700,10,10);
    mouse=createSprite(400,700,10,10);
    cat.addAnimation(catStart);
    cat.scale = 0.2;
    mouse.addAnimation(mouseStart);
    mouse.scale= 0.15;
    
}

function draw() {

    background(backgroundImg);
    if(cat.x - mouse.x <(cat.width - mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("scaredKit",catMoving);
        cat.x = 360
        cat.scale = 0.2
        cat.changeAnimation("scaredKit");
        mouse.addAnimation("teaser",mouseSmart);
        mouse.scale=0.15;
        mouse.changeAnimation("teaser");


    }

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
      cat.velocityX = -6;
      cat.addAnimation("sadCat",catScared);
      cat.changeAnimation("sadCat");
      cat.scale = 0.2;
      mouse.addAnimation("happymouse",mouseThinking);
      mouse.frameDelay = 25;
      mouse.changeAnimation("happymouse")
      
  }



}
