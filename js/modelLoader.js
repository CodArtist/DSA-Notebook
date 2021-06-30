var scene = new THREE.Scene();
var modelContainer=document.getElementById("modelContainer");


scene.background=new THREE.Color(0x5B2286);


var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 1;


var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

renderer.setSize(modelContainer.clientWidth,modelContainer.clientHeight );
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.shadowMap.enabled = true;
modelContainer.appendChild( renderer.domElement );

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;
// const axesHelper = new THREE.AxesHelper( 5 );
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
const url = 'model/harshhead.glb';
gltfLoader.load(url, (gltf) => {
  const root = gltf.scene;
  obj=root;
  root.scale.set(2,2,2);
  // root.position.y-=2;
  root.receiveShadow = true;
  root.castShadow = true;
  scene.add(root);

});
var position = { x : 0, y: 0 };
var target = { x :1, y: 0 };

var tween = new TWEEN.Tween(position).to(target, 2000);
tween.onUpdate(function(){
  // obj.position.x = position.x;
  // obj.position.y = position.y;
  obj.rotation.y=position.x;
});
tween.onComplete(function() {
  // position = { x :obj.rotation.y, y: 0 };
 tween2.start();
});
tween.easing(TWEEN.Easing.Elastic.Out);


var tween2 = new TWEEN.Tween(position).to({x:0,y:0}, 2000);
tween2.onUpdate(function(){
  // obj.position.x = position.x;
  // obj.position.y = position.y;
  obj.rotation.y=position.x;
});
tween2.onComplete(function() {
  // position = { x : 0, y: 0 };
  // target={x:0, y:0};
  // tween.start();
});
tween2.easing(TWEEN.Easing.Elastic.Out);

// tween.start();
window.addEventListener('click',()=>{
  // prompt(camera.rotation.x);


  // controls.target.set(1,1,1)
// tween.start();
});



var animate = function () {
	requestAnimationFrame( animate );
 
   if(obj)
   {
     TWEEN.update();
    
    //  position = { x :obj.rotation.x, y: 0 };
    
        // obj.rotation.z+=0.01;
    // obj.rotation.x+=0.01;
    // obj.rotation.y+=0.01;
}
// if(obj)
// {createjs.Tween.get(obj.rotation, { loop: true }).wait(500).to({ y: Math.PI*2 }, 1500, createjs.Ease.getPowInOut(3)).wait(500);
// }


    controls.update();
	renderer.render(scene, camera);
};

animate();


