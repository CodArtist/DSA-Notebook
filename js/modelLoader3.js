var scene3 = new THREE.Scene();
var modelContainer3=document.getElementById("modelContainer3");


scene3.background=new THREE.Color(0x5B2286);


var camera3 = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera3.position.z = 1;


var renderer3 = new THREE.WebGLRenderer({ antialias: true, alpha: true });

renderer3.setSize(modelContainer3.clientWidth,modelContainer3.clientHeight );
renderer3.outputEncoding = THREE.sRGBEncoding;
renderer3.shadowMap.enabled = true;
modelContainer3.appendChild( renderer3.domElement );

var controls3 = new THREE.OrbitControls(camera3, renderer3.domElement);
controls3.enableDamping = true;
controls3.dampingFactor = 0.25;
controls3.enableZoom = true;

const light13 = new THREE.AmbientLight(0xFFFFFF,1 ); // soft white light
scene3.add( light13 );

var obj3;



const gltfLoader3 = new THREE.GLTFLoader();
const url3 = 'model/humanhead.glb';
gltfLoader3.load(url, (gltf3) => {
  const root3 = gltf3.scene;
  obj3=root3;
  root3.scale.set(2,2,2);
  // root.position.y-=2;
  root3.receiveShadow = true;
  root3.castShadow = true;
  scene3.add(root3);

});

var animate3 = function () {
	requestAnimationFrame( animate3 );
    controls3.update();
	renderer3.render(scene3, camera3);
};

animate3();


