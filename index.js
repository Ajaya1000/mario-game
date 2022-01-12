import { Player } from "./src/player.js";
const player = new Player(100, 10, 50, 50, 0.2);

function animate() {
  requestAnimationFrame(animate);
  player.update();
}

animate();

addEventListener("keydown", ({ key }) => {
  switch (key) {
    case "ArrowRight":
      player.goRight();
      break;
    case "ArrowUp":
      player.goUp();
      break;
    case "ArrowLeft":
      player.goLeft();
      break;
    case "ArrowDown":
      player.goDown();
      break;
    default:
      break;
  }
});
