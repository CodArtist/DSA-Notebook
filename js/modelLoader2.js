var scene2 = new THREE.Scene();
var modelContainer2=document.getElementById("modelContainer2");


scene2.background=new THREE.Color(0x5B2286);


var camera2 = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera2.position.z = 1;


var renderer2 = new THREE.WebGLRenderer({ antialias: true, alpha: true });

renderer2.setSize(modelContainer2.clientWidth,modelContainer2.clientHeight );
renderer2.outputEncoding = THREE.sRGBEncoding;
renderer2.shadowMap.enabled = true;
modelContainer2.appendChild( renderer2.domElement );

var controls2 = new THREE.OrbitControls(camera2, renderer2.domElement);
controls2.enableDamping = true;
controls2.dampingFactor = 0.25;
controls2.enableZoom = true;

const light12 = new THREE.AmbientLight(0xFFFFFF,1 ); // soft white light
scene2.add( light12 );

var obj2;



const gltfLoader2 = new THREE.GLTFLoader();
const url2 = 'model/humanhead.glb';
gltfLoader2.load(url, (gltf2) => {
  const root2 = gltf2.scene;
  obj2=root2;
  root2.scale.set(2,2,2);
  // root.position.y-=2;
  root2.receiveShadow = true;
  root2.castShadow = true;
  scene2.add(root2);

});

var animate2 = function () {
	requestAnimationFrame( animate2 );
    controls2.update();
	renderer2.render(scene2, camera2);
};

animate2();


