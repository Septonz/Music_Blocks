var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
box1=createSprite(100,550,200)
//box1.scale=0.01
box1.shapeColor="green"
box2=createSprite(300,550,200)
//box1.scale=0.01
box2.shapeColor="blue"
box3=createSprite(500,550,200)
//box1.scale=0.01
box3.shapeColor="yellow"
box4=createSprite(700,550,200)
//box1.scale=0.01
box4.shapeColor="purple"

    //create box sprite and give velocity
player=createSprite(random(20,750))
player.scale=0.5
player.velocityY=6
player.velocityX=-6
player.shapeColor="white"

edge1=createSprite(800,-20,4000)
edge1.scale=0.5
edge1.visible=false
edge2=createSprite(1,200,10,2000)
edge2.scale=0.5
edge2.visible=false
edge3=createSprite(800,200,10,4000)
edge3.scale=0.5
edge3.visible=false
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();
    // player.bounceOff(topEdge);
    // player.bounceOff(bottomEdge);
if(box2.isTouching(player)&& player.bounceOff(box2)){
    player.shapeColor="blue"
    music.play();
}
if(box4.isTouching(player)&& player.bounceOff(box4)){
    player.shapeColor="purple"
    player.velocityY=0
    player.velocityX=0
    music.stop()
}
if(box3.isTouching(player)&& player.bounceOff(box3)){
    player.shapeColor="yellow"
    music.play();
}
if(box1.isTouching(player)&& player.bounceOff(box1)){
    player.shapeColor="green"
    music.play();
}
if(edge1.isTouching(player)&& player.bounceOff(edge1)){

}
if(edge2.isTouching(player)&& player.bounceOff(edge2)){

    
}
if(edge3.isTouching(player)&& player.bounceOff(edge3)){

    
}
drawSprites();

    //add condition to check if box touching surface and make it box
}
