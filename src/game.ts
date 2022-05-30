import { media } from './media'
import{help,coins,supperManRest}from'./canvas'
import { pivotScene}from'./scenePivot'

var _supperManDialogue = false
media()
help()

const building = new Entity()
building.addComponent(new GLTFShape("models/building.glb"))
building.addComponent(
  new Transform({
    position: new Vector3(0, 0, 0),
  })
)
building.setParent(pivotScene)
engine.addEntity(building)

let YBillboard = new Billboard(false, true ,false)
const supperMan = new Entity()
supperMan.addComponent(new GLTFShape("models/supperman.glb"))
supperMan.addComponent(
  new Transform({
    position: new Vector3(0, 1, 0),
  })
)
supperMan.addComponent(YBillboard)
supperMan.addComponent(
  new OnPointerDown((e) => {	
  if (_supperManDialogue == false){
    if(coins == 4){
      supperManRest()
      openExternalURL("https://market.decentraland.org/contracts/0x10b7830b4ea4c9f21ee2dc58e1339e2ec2d18610/items/0")	
      _supperManDialogue=true
    }
  }
  else{
    openExternalURL("https://market.decentraland.org/contracts/0x10b7830b4ea4c9f21ee2dc58e1339e2ec2d18610/items/0")	
  }
},{hoverText: "Worship MultiverseDao superman!"})
)
supperMan.setParent(pivotScene)
engine.addEntity(supperMan)

const eff = new Entity()
eff.addComponent(new GLTFShape("models/eff.glb"))
eff.addComponent(
  new Transform({
    position: new Vector3(0, -30, 0),
  })
)
eff.setParent(pivotScene)
engine.addEntity(eff)