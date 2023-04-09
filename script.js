// ball position
let ballx = 240;
let bally = 250;
let dX = 2;
let dY = -2;
// plank position
let plankx = 200;
let plankdx = 0;
const plankwidth = 100;

let hitCount = 0;

function updatehitCount() {
  const hitCountNG = document.getElementById("hitCount");
  hitCountNG.innerHTML = `hit count: ${hitCount}`;
}

function moveball() {
  const ball = document.getElementById("ballNG");
  const container = document.getElementById("container");
  const plank = document.getElementById("plankNG");
  const top = window.getComputedStyle(plank).getPropertyValue("top");
  const ballColors = [
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "red",
  ];
  //  sides
  if (ballx + dX > container.offsetWidth - ball.offsetWidth || ballx + dX < 0) {
    dX = -dX;
  }
  //  top
  if (bally + dY < 0) {
    dY = -dY;
  }
  //  plank

  if (
    bally + dY >= container.offsetHeight - ball.offsetHeight &&
    ballx + ball.offsetWidth > plankx &&
    ballx < plankx + plankwidth
  ) {
    ball.style.backgroundColor = ballColors[hitCount % ballColors.length];
    dY = -dY;
    hitCount++;
    speedBall();
    if (hitCount === 10) {
        clearInterval(interval);
        const status = document.getElementById("gameStatus");
        status.innerHTML = "VIctory!!!!!";
        status.style.color = "green"
        
    const restartBtn = document.getElementById("restartBtn");
    restartBtn.style.display = "block";
    return;
  }

  
}

  // game over
  if (bally + dY > container.offsetHeight - ball.offsetHeight) {
    clearInterval(interval);
    const status = document.getElementById("gameStatus");
    status.innerHTML = "Game Over";
    status.style.color = "red"

    const restartBtn = document.getElementById("restartBtn");
    restartBtn.style.display = "block";
    return;
  }
  ballx += dX;
  bally += dY;
  ball.style.left = ballx + "px";
  ball.style.top = bally + "px";
}

function movePlank() {
  const plank = document.getElementById("plankNG");
  const container = document.getElementById("container");
  if (
    plankx + plankdx > container.offsetWidth - plank.offsetWidth ||
    plankx + plankdx < 0
  ) {
    return;
  }
  plankx += plankdx;
  plank.style.left = plankx + "px";
}

function speedBall() {
  if (hitCount % 5 == 0) {
    dX *= 1.5;
    dY *= 1.5;
  }
}
function restartGame() {
  location.reload();
}
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    plankdx = -6;
  } else if (event.key === "ArrowRight") {
    plankdx = 6;
  }
});

document.addEventListener("keyup", (event) => {
  plankdx = 0;
});

const interval = setInterval(() => {
  updatehitCount();
  moveball();
  movePlank();
}, );
