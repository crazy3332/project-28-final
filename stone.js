class stone {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.3,
          'friction':1,
          'density':6.0
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.image = loadImage("sprites/stone.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;    
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.radius,this.radius)

    }
  };
  