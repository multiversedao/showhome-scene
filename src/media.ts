import {canvas} from'./canvas'
import { pivotScene}from'./scenePivot'
import * as utils from '@dcl/ecs-scene-utils'

var _discordDialogue = false
var _twitterDialogue = false
var _MultiverseDaoDialogue = false
var _openseaDialogue = false

export function media() {

const banna = new Entity()
banna.addComponent(new GLTFShape("models/banna.glb"))
banna.addComponent(
  new Transform({
    position: new Vector3(0, 0, 0),
  })
)
banna.setParent(pivotScene)
engine.addEntity(banna)

//Discord
const discord = new Entity()
discord.addComponent(new GLTFShape("models/discord.glb"))
discord.addComponent(
  new Transform({
    position: new Vector3(0, 0, 0),
  })
)
discord.addComponent(
  new OnPointerDown((e) => {
  openExternalURL("https://discord.gg/TMWQUtqhN2")	
  if (_discordDialogue == false){
    canvas()
    _discordDialogue=true
  }
  
},{hoverText: "Add Discord"})
)
discord.setParent(pivotScene)
engine.addEntity(discord)

//Twitter
const twitter = new Entity()
twitter.addComponent(new GLTFShape("models/twitter.glb"))
twitter.addComponent(
  new Transform({
    position: new Vector3(0, 0, 0),
  })
)
twitter.addComponent(
  new OnPointerDown((e) => {
  openExternalURL("https://twitter.com/multiversedao")	
  if (_twitterDialogue == false){
    canvas()
    _twitterDialogue=true
  }
},{hoverText:"Open Twitter"})
)
twitter.setParent(pivotScene)
engine.addEntity(twitter)

//MultiverseDao
const MultiverseDao = new Entity()
MultiverseDao.addComponent(new GLTFShape("models/multiversedao.glb"))
MultiverseDao.addComponent(
  new Transform({
    position: new Vector3(0, 0, 0),
  })
)
MultiverseDao.addComponent(
  new OnPointerDown((e) => {
  openExternalURL("https://www.multiversedao.org/")	
  if (_MultiverseDaoDialogue == false){
    canvas()
    _MultiverseDaoDialogue=true
  }
},{hoverText:"Open MultiverseDao Web"})
)
MultiverseDao.setParent(pivotScene)
engine.addEntity(MultiverseDao)

//opensea
const opensea = new Entity()
opensea.addComponent(new GLTFShape("models/opensea.glb"))
opensea.addComponent(
  new Transform({
    position: new Vector3(0, 0, 0),
  })
)
opensea.addComponent(
  new OnPointerDown((e) => {
  openExternalURL("https://opensea.io/collection/multiversedao-land")	
  if (_openseaDialogue == false){
    canvas()
    _openseaDialogue=true
  }
},{hoverText:"Open Twitter"})
)
opensea.setParent(pivotScene)
engine.addEntity(opensea)

const VideoClip_a = new VideoClip("video/mdvideo.mp4")
const VideoTexture_a = new VideoTexture(VideoClip_a)
const VideoMaterial_a = new Material()
VideoMaterial_a.albedoTexture = VideoTexture_a
VideoMaterial_a.roughness = 1
VideoMaterial_a.specularIntensity = 0
VideoMaterial_a.metallic = 0
VideoMaterial_a.emissiveTexture = VideoTexture_a
VideoMaterial_a.emissiveColor = Color3.White()
VideoMaterial_a.emissiveIntensity = 0.6

const screen_a = new Entity()
screen_a.addComponent(new PlaneShape())
screen_a.addComponent(
new Transform({
    position: new Vector3(2.36, 6, -13.492),
    rotation: Quaternion.Euler(0, 0, 0),
    scale: new Vector3(11.046, 5.608, 0),
})
)
screen_a.addComponent(VideoMaterial_a)
screen_a.setParent(pivotScene)
engine.addEntity(screen_a)

VideoTexture_a.reset()
VideoTexture_a.playing = false
VideoTexture_a.volume = 0.5
VideoTexture_a.loop = true


//TriggerBox
const box = new Entity()
box.addComponent(new Transform({position: new Vector3(0, 0, 0),rotation:Quaternion.Euler(0,0,0)}))
let triggerBox = new utils.TriggerBoxShape(new Vector3(32, 15, 32), new Vector3(0,0,0))
box.addComponent(
    new utils.TriggerComponent(
        triggerBox,
        {
            onCameraEnter: () => {
              VideoTexture_a.playing = true
            },
            onCameraExit: () => {
              VideoTexture_a.playing = false
            },
            enableDebug: false
        }
    )
)
box.setParent(pivotScene)
engine.addEntity(box)

}