const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let player1 = { x: 100, y: 300, punching: false, kicking: false };
let player2 = { x: 600, y: 300 };

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw players (just rectangles for now)
    ctx.fillStyle = "cyan";
    ctx.fillRect(player1.x, player1.y - 100, 50, 100);

    ctx.fillStyle = "orange";
    ctx.fillRect(player2.x, player2.y - 100, 50, 100);

    // Punch (extend small arm)
    if (player1.punching) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(player1.x + 50, player1.y - 60, 20, 10);
    }

    // Kick (extend leg)
    if (player1.kicking) {
        ctx.fillStyle = "red";
        ctx.fillRect(player1.x + 40, player1.y - 10, 30, 10);
    }

    requestAnimationFrame(draw);
}

draw();

// Keyboard Controls
document.addEventListener("keydown", (e) => {
    if (e.key === "a") player1.punching = true;
    if (e.key === "s") player1.kicking = true;
});

document.addEventListener("keyup", (e) => {
    if (e.key === "a") player1.punching = false;
    if (e.key === "s") player1.kicking = false;
});
