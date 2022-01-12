import { friction, gravity } from "./constants.js";
import { c, canvas } from "./context.js";
class Player {
  constructor(x = 0, y = 0, w = 10, h = 10, e = 0) {
    this.position = {
      x: x,
      y: y,
    };

    this.dimension = {
      width: w,
      height: h,
    };

    this.velocity = {
      x: 0,
      y: 0,
    };

    this.acceleration = {
      x: 0,
      y: 0,
    };

    this.elasticity = e;

    this.move = {
      x: 5,
      y: 10,
    };
  }

  draw() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.fillStyle = "red";
    c.fillRect(
      this.position.x,
      this.position.y,
      this.dimension.width,
      this.dimension.height
    );
  }

  correctPosition() {
    let isAHit = {
      x: false,
      y: false,
    };

    let edgeCorrection = 0;

    if (this.position.x < 0) {
      this.position.x = edgeCorrection;
      isAHit.x = true;
    }

    if (this.position.x + this.dimension.width > canvas.width) {
      this.position.x = canvas.width - this.dimension.width - edgeCorrection;
      isAHit.x = true;
    }

    if (this.position.y < 0) {
      this.position.y = edgeCorrection;
      isAHit.y = true;
    }

    if (this.position.y + this.dimension.height > canvas.height) {
      this.position.y = canvas.height - this.dimension.height - edgeCorrection;
      isAHit.y = true;
    }
    return isAHit;
  }

  updateVelocity() {
    this.velocity.x += gravity.x + this.acceleration.x;
    this.velocity.y += gravity.y + this.acceleration.y;

    if (this.velocity.x > 0)
      this.velocity.x = Math.max(0, this.velocity.x - friction.x);
    else this.velocity.x = Math.min(0, this.velocity.x + friction.x);

    if (this.velocity.y > 0)
      this.velocity.y = Math.max(0, this.velocity.y - friction.y);
    else this.velocity.y = Math.min(0, this.velocity.y + friction.y);

    const hit = this.correctPosition();

    // checking for x
    if (hit.x === true) {
      this.velocity.x *= -this.elasticity;
    }

    //checking for y
    if (hit.y === true) {
      this.velocity.y *= -this.elasticity;
    }
  }

  updatePosition() {
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;
  }

  update() {
    this.draw();
    this.updatePosition();
    this.updateVelocity();
  }

  goRight() {
    let u = this.move.x;
    this.velocity.x += u;
    // this.acceleration.x = u/this.t;
  }

  goDown() {
    let u = this.move.y;
    this.velocity.y += u;
    // this.acceleration.y = u/this.t;
  }

  goLeft() {
    let u = -this.move.x;
    this.velocity.x += u;
    // this.acceleration.x = u/this.t;
  }

  goUp() {
    let u = -this.move.y;
    this.velocity.y += u;
    // this.acceleration.y = u/this.t;
  }
}

export { Player };
