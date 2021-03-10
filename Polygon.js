class Polygon {
    constructor(x,y,r){
    var options={
     restitution: 0.5,
     density:1,
     friction:0.04
    }
    this.r =20;
    this.body=Bodies.circle(x,y,20,options);
    this.image = loadImage("polygon.png");
    World.add(world,this.body);
    }
    display(){
        var posX =this.body.position.x;
        var posY = this.body.position.y;
        push();
        fill("red");
        imageMode(CENTER);
        image(this.image,posX,posY,50,50);
        pop();
    }
}