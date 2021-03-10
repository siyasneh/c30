class Block {
  constructor(x, y, width, height) {
      var options = {
          'restitution' : 0.8,
          'friction' : 0.3,
          'density' : 0.2
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.fade = 255;
      World.add(world, this.body);
  }
  display() {
      var angle= this.body.angle;
      var pos = this.body.position;

      console.log(this.body.speed);

      if(this.body.speed<8.5) {
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
      }
      else {
          push();
          World.remove(world, this.body);
          tint(255, this.fade);
          this.fade = this.fade-0.5;
          pop();
      }
  }
}