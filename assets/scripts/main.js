/* global THREE */
const t = THREE;
const scene = new t.Scene();
const camera = new t.PerspectiveCamera(75, window.innerWidth, window.innerHeight, 0.1, 1000);

const renderer = new t.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// create a shape
const geometry = new t.BoxGeometry(1, 1, 1);

// create a material
const material = new t.MeshBasicMaterial({color: 0xFFFFFF, wireframe: false});
const cube = new t.Mesh(geometry, material);
// cube.position.y = 1;
scene.add(cube);

// camera.position.x = 300;
camera.position.z = 5;

// logic
const update = function () {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
};

// draw scene
const render = function () {
    renderer.render(scene, camera);
};

// run render loop (update-render-repeat)
const RenderLoop = function () {
    window.requestAnimationFrame(RenderLoop);
    update();
    render();
};

RenderLoop();
