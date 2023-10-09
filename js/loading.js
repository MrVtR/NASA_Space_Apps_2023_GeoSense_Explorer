const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(10, 32, 32);
const texture = new THREE.TextureLoader().load('./assets/loading.png'); // Replace with your Earth texture
const material = new THREE.MeshBasicMaterial({ map: texture });
const earth = new THREE.Mesh(geometry, material);

scene.add(earth);
camera.position.z = 20;

const animate = function () {
  requestAnimationFrame(animate);

  // Rotate the Earth
  earth.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate();
