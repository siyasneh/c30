const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var mainPlatform, platform1, platform2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18, block19, block20, block21, block22, block23, block24, block25;
var polygon, polygonImg;
var rope1;

function preload() {
    polygonImg = loadImage("polygon.png");
}

function setup() {
    var canvas = createCanvas(1500, 600);
    engine = Engine.create();
    world = engine.world;

    mainPlatform = new Ground(750, 590, 1500, 25);
    platform1 = new Ground(650, 400, 270, 20);
    platform2 = new Ground(1140, 250, 240, 20);

    //Pyramid 1
    //Level 1
    block1 = new Block(560, 370, 30, 40);
    block2 = new Block(590, 370, 30, 40);
    block3 = new Block(620, 370, 30, 40);
    block4 = new Block(650, 370, 30, 40);
    block5 = new Block(680, 370, 30, 40);
    block6 = new Block(710, 370, 30, 40);
    block7 = new Block(740, 370, 30, 40);
    //Level 2
    block8 = new Block(590, 330, 30, 40);
    block9 = new Block(620, 330, 30, 40);
    block10 = new Block(650, 330, 30, 40);
    block11 = new Block(680, 330, 30, 40);
    block12 = new Block(710, 330, 30, 40);
    //Level 3
    block13 = new Block(620, 290, 30, 40);
    block14 = new Block(650, 290, 30, 40);
    block15 = new Block(680, 290, 30, 40); 
    //Level 4
    block16 = new Block(650, 250, 30, 40);

    //Pyramid 2
    //Level 1
    block17 = new Block(1080, 220, 30, 40);
    block18 = new Block(1110, 220, 30, 40);
    block19 = new Block(1140, 220, 30, 40);
    block20 = new Block(1170, 220, 30, 40);
    block21 = new Block(1200, 220, 30, 40);
    //Level 2
    block22 = new Block(1110, 180, 30, 40);
    block23 = new Block(1140, 180, 30, 40);
    block24 = new Block(1170, 180, 30, 40);
    //Level 3
    block25 =new Block(1140, 140, 30, 40); 

    var op = {restitution: 1, friction: 1, density: 1}
    polygon = Bodies.rectangle(200, 400, 10, 10, op);
    World.add(world, polygon);
    //polygon.addImage(polygonImg); 
    //polygon.scale = 0.13;
    rope1 = new Rope(this.polygon, {x: 200, y: 280});

}

function draw() {
    background(0);
    Engine.update(engine);

    push();
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks", 100, 50);
    textSize(25);
    fill(255, 255, 255);
    pop();

    imageMode(CENTER);
    rectMode(CENTER);
    //rect(this.polygon.position.x, this.polygon.position.y, 20, 20);
    image(polygonImg, this.polygon.position.x, this.polygon.position.y, 40, 40);

    rope1.display();

    mainPlatform.display();
    platform1.display();
    platform2.display();
    
    //Pyramid 1 , Level 1
    push();
    fill("#68A7CD");
    stroke(0, 0, 0);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    pop();
    //Level 2
    push();
    fill("#C06152");
    stroke(0, 0, 0);
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    pop();
    //Level 3
    push();
    fill("#78A970");
    stroke(0, 0, 0);
    block13.display();
    block14.display();
    block15.display();
    pop();
    //Level 4
    push();
    fill("#E7A548");
    stroke(0, 0, 0);
    block16.display();
    pop();

    //Pyramid 2, Level 1
    push();
    fill("#68A7CD");
    stroke(0, 0, 0);
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    pop();
    //Level 2
    push();
    fill("#78A970");
    stroke(0, 0, 0);
    block22.display();
    block23.display();
    block24.display();
    pop();
    //Level 3
    push();
    fill("#C06152");
    stroke(0, 0, 0);
    block25.display();
    pop();
}

function mouseDragged() {
    Matter.Body.setPosition(this.polygon, { x: mouseX, y: mouseY});
}

function mouseReleased() {
    rope1.fly()
}

function keyPressed() {
    if(keyCode = 32) {
        window.location.reload();
    }
}