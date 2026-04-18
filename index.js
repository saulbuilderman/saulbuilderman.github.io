const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const img = new Image();
img.src = "src/saul.png";

document.addEventListener("mousemove", function(event) {
    ctx.drawImage(img, event.x - 10, event.y - 10, 64, 64);

    setTimeout(function() {
        ctx.clearRect(event.x - 10, event.y - 10, 64, 64);
    }, 250);
});