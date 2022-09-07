var scene = new THREE.Scene();
var modelContainer=document.getElementById("modelContainer");


scene.background=new THREE.Color(0x5B2286);


var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z =60;
camera.position.y =0;
camera.position.x =0;
camera.lookAt(0,0,0)



var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

renderer.setSize(modelContainer.clientWidth,modelContainer.clientHeight );
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.shadowMap.enabled = true;
modelContainer.appendChild( renderer.domElement );

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = false;
controls.enablePan = false;
var start = 45  //current angle
// controls.maxAzimuthAngle = THREE.Math.degToRad(start)
// controls.minAzimuthAngle = THREE.Math.degToRad(start)
controls.maxPolarAngle = THREE.Math.degToRad(180-start)
controls.minPolarAngle = THREE.Math.degToRad(120-start)
// const axesHelper = new THREE.AxesHelper(100);
// scene.add( axesHelper );

// const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
// scene.add( light );

// const light = new THREE.PointLight( 'white', 2, 1000 );
// light.position.set( 0,0,0 );
// scene.add( light );

// const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.1 );
// scene.add( directionalLight );

const light1 = new THREE.AmbientLight(0xFFFFFF,1 ); // soft white light
scene.add( light1 );


// var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 0.1);
// keyLight.position.set(-100, 0, 100);
// scene.add(keyLight);

// var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.1);
// fillLight.position.set(100, 0, 100);
// scene.add(fillLight);

// var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
// backLight.position.set(100, 0, -100).normalize();
// scene.add(backLight);


var obj;

// var mtlLoader = new THREE.MTLLoader();
// // mtlLoader.setTexturePath('/examples/3d-obj-loader/assets/');
// mtlLoader.setPath('model/');
// mtlLoader.load('notebook2.mtl', function (materials) {

//     materials.preload();
    
//     var objLoader = new THREE.OBJLoader();
//     objLoader.setMaterials(materials);
//     objLoader.setPath('model/');
//     objLoader.load('notebook2.obj', function (object) {
        

       
//          obj=object;
//          obj.rotation.y+=0.01;

//         scene.add(object);
//         object.position.y -= 1;
//         // object.position.z -= 10;

//     });

// });

const gltfLoader = new THREE.GLTFLoader();
const url = 'model/head.glb';
gltfLoader.load(url, (gltf) => {
  const root = gltf.scene;
  obj=root;

  obj.position.x=0;
  obj.position.y=0;
  obj.position.z=0;
  obj.scale.set(0.8,0.8,0.8);
  if(window.innerWidth<1050)
  {
    obj.scale.set(0.6,0.6,0.6);
    obj.position.x=0;

  }

  root.receiveShadow = true;
  root.castShadow = true;
  scene.add(root);

 

  
});

var position = { x : -1, y: 0 };
var target = { x :1, y: 0 };
var animTime = 800
var k =3
var z = 4
var facx =-1.5
var facz =1.5

var tween = new TWEEN.Tween(position).to(target, animTime);
tween.onUpdate(function(){

  obj.rotation.y=-position.x/2;
  obj.rotation.x=Math.abs(position.x/k) *facx -facx/4;
  obj.rotation.z=position.x/z * facz;



});
tween.onComplete(function() {
 tween2.start();
});
var tweenCurve = TWEEN.Easing.Quadratic.Out
tween.easing(tweenCurve);


var tween2 = new TWEEN.Tween(position).to({x:-1,y:0}, animTime);
tween2.onUpdate(function(){

  obj.rotation.y=-position.x/2;
  obj.rotation.x=Math.abs(position.x/k) * facx - facx/4;
  obj.rotation.z=position.x/z * facz;

});
tween2.onComplete(function() {

  tween.start();

});
tween2.easing(tweenCurve);



tween.start();

var animate = function () {
	requestAnimationFrame( animate );
 
   if(obj)
  {
     TWEEN.update();
    
  

}



    controls.update();
	renderer.render(scene, camera);
};

animate();


