import * as THREE from 'three';
import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/fragment.glsl'

import atmosphereVertexShader from './shaders/atmosphereVertex.glsl'
import atmosphereFragmentShader from './shaders/atmosphereFragment.glsl'

//------------------------------------------------INITIAL SETTING-------------------------------------------------------// OK

const canvasContainer = document.querySelector('#canvasContainer') 

const scene = new THREE.Scene() 

const camera = new THREE. 
  PerspectiveCamera(
  75,
  canvasContainer.offsetWidth / canvasContainer.offsetHeight,
  0.1,
  1000
)

camera.position.z = 10

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas: document.querySelector('canvas'),
})

renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight)
renderer.setPixelRatio(window.devicePixelRatio)

//------------------------------------------------MODELING-------------------------------------------------------// OK


const starGeometry = new THREE.BufferGeometry()


const starMaterial = new THREE.PointsMaterial({
  color: 0xffffff
})


const starVertices = []
for(let i = 0; i < 10000; i++){
  const x = (Math.random() - 0.5) * 2000
  const y = (Math.random() - 0.5) * 2000
  const z = -Math.random() * 2000
  starVertices.push(x,y,z)
}


starGeometry.setAttribute('position', 
  new THREE.Float32BufferAttribute(
    starVertices,
    3
  )
)


const stars = new THREE.Points(
  starGeometry, starMaterial
)


scene.add(stars)


const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(5, 50, 50),
  new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      globeTexture: {
        value: new THREE.TextureLoader()
        .load('./assets/earthUVTexture.jpeg')
      }
    }
  })
)


scene.add(sphere)


const atmosphere = new THREE.Mesh(
  new THREE.SphereGeometry(5, 50, 50),
  new THREE.ShaderMaterial({
    vertexShader:  atmosphereVertexShader,
    fragmentShader: atmosphereFragmentShader,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide
  })
)


atmosphere.scale.set(1.1,1.1,1.1)


scene.add(atmosphere)

//------------------------------------------------INTERACTIVE LOGIC-------------------------------------------------------//


let previousPoint;
let pointPosition = new THREE.Vector3(0, 0, 0);


const earthRadius = 5;
const latitudeInput = document.getElementById('latitude');
const longitudeInput = document.getElementById('longitude');
const addPoint = document.getElementById('addPoint');

var myobj = {latitude: {latitudeInput}, longitude: {longitudeInput}};
var myJSON = JSON.stringify(myobj);


function latLonToVector(lat, lon, radius) {

  const phi = (90 - lat) * (Math.PI / 180); 
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.cos(phi);

  const z = radius * Math.sin(phi) * Math.sin(theta);

  return new THREE.Vector3(x, y, z);
}


addPoint.addEventListener('click', () => { 

  const latitude = parseFloat(latitudeInput.value);
  const longitude = parseFloat(longitudeInput.value);

  if (isNaN(latitude) || isNaN(longitude)) {
    alert("Please fill in both the latitude and longitude fields, or enter a location name in the field above.");
    return;
  }
  
  document.querySelector('.accordion-width').style.display = 'block';

  const pointGeometry = new THREE.BufferGeometry();

  const pointMaterial = new THREE.PointsMaterial({ color: 0xff0000, size: 0.2 });


  const pointPosition = latLonToVector(latitude, longitude, earthRadius);
  
  if (previousPoint) {
    scene.remove(previousPoint);
  }

  pointGeometry.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0], 3));
  

  const point = new THREE.Points(pointGeometry, pointMaterial);


  point.position.copy(pointPosition);
  

  previousPoint = point;
  
  scene.add(point);
});


const desiredCameraPosition = new THREE.Vector3();


let rotateEarth = true;


function animate() {

  const latitude = parseFloat(latitudeInput.value);
  const longitude = parseFloat(longitudeInput.value);
  

  if (isNaN(latitude) && isNaN(longitude)) {
    rotateEarth = true;
    if (previousPoint) {
      scene.remove(previousPoint);
      previousPoint = null;
    }
  } else {

    rotateEarth = false;
  }

  requestAnimationFrame(animate);

  renderer.render(scene, camera);


  if (rotateEarth) {
    sphere.rotation.y += 0.0000;
  }

  if (previousPoint) {
    desiredCameraPosition.copy(previousPoint.position);
    desiredCameraPosition.setLength(10);
    camera.position.lerp(desiredCameraPosition, 0.05);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
  }

  stars.lookAt(camera.position);

  camera.lookAt(new THREE.Vector3(0, 0, 0));

}

animate();

