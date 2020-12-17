class Plinko {
    constructor(x,y,radius) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,width,height,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill("white");
      circle(pos.x, pos.y, this.radius);
    }
  };
