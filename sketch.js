var bg;
var cat;
var catimg1, catimg2,catimg4;

var mouse;
var mouseimg1 , mouseimg2, mouseimg4;


function preload() {
    //load the images here
bg=loadImage ("images/garden.png");
  
catimg1 = loadAnimation("images/cat1.png");
catimg2 = loadAnimation("images/cat2.png","images/cat3.png");
catimg4 = loadAnimation("images/cat4.png");

mouseimg1 = loadAnimation("images/mouse1.png");
mouseimg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
mouseimg4 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(870,600);
cat.addAnimation("catsleeping",catimg1);
cat.scale=0.2;

mouse = createSprite(200,600);
mouse.addAnimation ("mousestanding", mouseimg1);
mouse.scale=0.15;

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

if(cat.x - mouse.x <(cat.width - mouse.width)/2){
    cat.velocityX=0;
    cat.addAnimation("catstanding",catimg4);
    cat.scale=0.2;
    cat.X = 300; 
    cat.changeAnimation("catstanding");

    mouse.addAnimation("mouselast",mouseimg4);
    mouse.scale=0.15;
    mouse.changeAnimation("mouselast");
}


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseteasing", mouseimg2);
    mouse.changeAnimation("mouseteasing");
    mouse.frameDelay=25;

    cat.addAnimation("catrunning",catimg2);
    cat.changeAnimation("catrunning");
    cat.velocityX=-5;
}
    

}
