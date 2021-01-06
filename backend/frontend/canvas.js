const BG_COLOUR = "#231f20";
var ctx = document.getElementById("ctx").getContext("2d");
var canvas = document.getElementById("canvas");
const socket = io("http://localhost:3001/");
socket.on("init", handleInit);
function handleInit(msg) {
  console.log(msg);
}
function paintGame() {
  ctx.fillStyle = BG_COLOUR;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

paintGame();
