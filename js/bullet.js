class Bullet {
  constructor(x,y){
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
    }

    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 50;
    this.height = 50;
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    rect(pos.x, pos.y, this.width, this.height);
    fill(0, 255, 255);
    rectMode(CENTER);
  }
}
