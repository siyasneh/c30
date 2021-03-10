class Rope{
    constructor(body1, point2) {
        var options = {
            bodyA : body1,
            pointB : point2,
            length : 10,
            stiffness : 0.1
        }
        this.body = Matter.Constraint.create(options);
        this.point2 = point2;
        World.add(world, this.body);
    }

    display() {
       
        if(this.body.bodyA) {
            push()
            strokeWeight(4);
            stroke("#00E4D0");
            line(this.body.bodyA.position.x, this.body.bodyA.position.y, this.point2.x, this.point2.y);  
            pop();
        }
    }

    fly() {
       this.body.bodyA = null;  
    }
}