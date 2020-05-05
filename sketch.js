const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var slingshot;


function setup(){
    var canvas = createCanvas(900,900);
    engine = Engine.create();
    world = engine.world;
   
    
    wall1 = new Wall(500, 900, 1000, 20);
    wall2 = new Wall(500, 0, 1000, 20);
    wall3 = new Wall(900, 500, 20, 1000);
    wall4 = new Wall(0, 450, 20, 1000);

    log1 = new LogPlatform(600, 450, 300, PI/4);
    log2 = new LogPlatform(350, 600, 300, -PI/1.4);

    target1 = new Pig(500, 430);
    target2 = new Pig(510, 405);
    target3 = new Pig(520, 380);

    bullet = new Bullet(100,100);

    slingshot = new SlingShot(bullet.body,{x:200, y:300});
}


function draw(){
    background(248, 182, 82);
    Engine.update(engine);
    strokeWeight(4);
    
   
    wall1.display();
    wall2.display();
    wall3.display();
    wall4.display();

    log1.display();
    log2.display();

    target1.display();
    target2.display();
    target3.display();

    bullet.display();
    
    slingshot.display();  

    console.log(mouseX, mouseY);

    
    //drawSprites(); 
}

function mouseDragged(){
    Matter.Body.setPosition(bullet.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    slingshot.fly();
}