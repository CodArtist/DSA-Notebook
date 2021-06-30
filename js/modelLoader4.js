var scene4 = new THREE.Scene();
var modelContainer4=document.getElementById("modelContainer4");


scene4.background=new THREE.Color(0x5B2286);


var camera4 = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera4.position.z = 1;


var renderer4 = new THREE.WebGLRenderer({ antialias: true, alpha: true });

renderer4.setSize(modelContainer4.clientWidth,modelContainer4.clientHeight );
renderer4.outputEncoding = THREE.sRGBEncoding;
renderer4.shadowMap.enabled = true;
modelContainer4.appendChild( renderer4.domElement );

var controls4 = new THREE.OrbitControls(camera4, renderer4.domElement);
controls4.enableDamping = true;
controls4.dampingFactor = 0.25;
controls4.enableZoom = true;

const light14 = new THREE.AmbientLight(0xFFFFFF,1 ); // soft white light
scene4.add( light14 );

var obj4;



const gltfLoader4 = new THREE.GLTFLoader();
const url4 = 'model/humanhead.glb';
gltfLoader4.load(url, (gltf4) => {
  const root4 = gltf4.scene;
  obj4=root4;
  root4.scale.set(2,2,2);
  // root.position.y-=2;
  root4.receiveShadow = true;
  root4.castShadow = true;
  scene4.add(root4);

});

var animate4 = function () {
	requestAnimationFrame( animate4 );
    controls4.update();
	renderer4.render(scene4, camera4);
};

animate4();


