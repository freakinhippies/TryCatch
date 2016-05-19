var wrapper = document.getElementById("wrapper");

/**
 * Resizes the canvas when the window is resized.
 */
function resizeCanvas() {
  // Test if the canvas is not null first
  if (game.init()) {
    // Resize background and elements canvas
    game.bgCanvas.width = wrapper.clientWidth;
    game.bgCanvas.height = wrapper.clientHeight;
    game.elementCanvas.width = wrapper.clientWidth;
    game.elementCanvas.height = wrapper.clientHeight;

    // Resize player canvas and redraw player sprite
    game.playerCanvas.width = wrapper.clientWidth;
    game.player.draw();
  }
}
resizeCanvas();

window.addEventListener("resize", resizeCanvas, false);

window.onload = resizeCanvas();