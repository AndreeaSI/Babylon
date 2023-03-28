import {Scene, Engine, FreeCamera, Vector3, AbstractMesh, HemisphericLight, MeshBuilder, CubeTexture, PBRMaterial, SceneLoader} from "@babylonjs/core";
import "@babylonjs/loaders";
export class Sofa {
scene: Scene;
engine: Engine; 


constructor(private canvas:HTMLCanvasElement){
this.engine =new Engine(this.canvas, true);
this.scene = this.CreateScene();
//this.CreateGround();
this.CreateSofa();
this.engine.runRenderLoop(()=>{
this.scene.render();

})
        }
  CreateScene():Scene {
const scene = new Scene(this.engine);
const camera = new FreeCamera("camera", new Vector3(85,60,-320), this.scene);
camera.attachControl();
camera.speed = 0.50;
const hemiLight = new HemisphericLight(
  "hemiLight", 
  new Vector3(20,30,35), 
  this.scene
  );
//const envTex = CubeTexture.CreateFromPrefilteredData(
 //   ""
//)
hemiLight.intensity = 0.5;

const ground = MeshBuilder.CreateGround(
"ground", 
{width:2, height:2}, 
this.scene
);

//const ball = MeshBuilder.CreateSphere("ball", {diameter: 1}, this.scene);

//ball.position = new Vector3(0,1,0);
return scene;
  } 
  async CreateSofa(): Promise<void>{
    //SceneLoader.ImportMesh("", 
    //"./models/", 
   //"sofa.glb", 
   // this.scene, 
//(meshes)=>{
        //console.log('meshes', meshes)
  // });
const models = await SceneLoader.ImportMeshAsync("", "./models/", "sofa.glb");
console.log("models", models);

  }
}