var WINDOW_WIDTH = 600;
var WINDOW_HEIGHT = 400;

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, WINDOW_WIDTH / WINDOW_HEIGHT, 0.1, 1000);
camera.position.set(5, 5, 5);
camera.lookAt(scene.position);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(WINDOW_WIDTH, WINDOW_HEIGHT);
renderer.setClearColor(0xEEEEEE, 1);
document.getElementById("main-container").appendChild(renderer.domElement);

// Setup scene
loadModel('roadTile_255').then(scene.add.bind(scene)).catch(console.log.bind(console));

function render() {
	requestAnimationFrame(render);
	renderer.render(scene, camera);
}
render();
