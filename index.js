let type = "WebGL"
if (!PIXI.utils.isWebGLSupported()) {
  type = "canvas"
}
let cat = new PIXI.Graphics();

let app = new PIXI.Application({ 
    width: window.innerWidth,       // default: 800
    height: window.innerHeight,        // default: 600
    antialias: true,    // default: false
    transparent: false, // default: false
    resolution: 1       // default: 1
  }
);

window.addEventListener("resize", function() {
	app.renderer.resize(window.innerWidth, window.innerHeight);
});

window.onload = function() {
	document.body.appendChild(app.view);
	state = play;

	//Start the game loop 
	app.ticker.add(delta => gameLoop(delta));
};
function gameLoop(delta){
	state(delta);
}

function play(delta) {

}
