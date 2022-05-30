import { getUserData } from "@decentraland/Identity"

const mainCanvas = new UICanvas()
const coinRect = new UIContainerRect(mainCanvas)
coinRect.width = "100%"
coinRect.height = "100%"
coinRect.opacity = 1
coinRect.visible = false

export var coins = 0
var maxCoin = 4

  //Icon showing gold coins
  const Coin = new UIImage(mainCanvas, new Texture("images/coin.png"))
  Coin.width = 43*1.3
  Coin.height = 50*1.3
  Coin.sourceWidth = 433
  Coin.sourceHeight = 500
  Coin.positionX = 0
  Coin.positionY = -290

  //any click area
  const closeRest = new UIImage(coinRect, new Texture("images/plane.png"))
  closeRest.width = 1920
  closeRest.height = 1080
  closeRest.sourceWidth = 512
  closeRest.sourceHeight = 512
  closeRest.positionX = 0
  closeRest.positionY = 0
  closeRest.isPointerBlocker = true
  closeRest.onClick = new OnPointerDown(() => {coinRect.visible = false})

  const closeText = new UIText(closeRest)
  closeText.value = "Use ESC and click on any area to close the interface."
  closeText.font = new Font(Fonts.LiberationSans)
  closeText.fontSize = 15
  closeText.positionX = -350
  closeText.positionY = -100
  closeText.opacity = 0.5

  //Display the number of coins
  const coinsText = new UIText(mainCanvas)
  coinsText.value = coins + "/" + maxCoin
  coinsText.font = new Font(Fonts.SansSerif_Heavy)
  coinsText.fontSize = 15
  coinsText.positionX = 38
  coinsText.positionY = -310
  coinsText.color = new Color4(255, 168, 0, 1)
  coinsText.outlineWidth = 0.3
  coinsText.outlineColor = new Color4(0,0,0,1)

  //Tips for getting coins
  const getCoin = new UIImage(coinRect, new Texture("images/getcoins.png"))
  getCoin.width = 963
  getCoin.height = 279
  getCoin.sourceWidth = 963
  getCoin.sourceHeight = 279
  getCoin.positionX = 0
  getCoin.positionY = 50
  getCoin.isPointerBlocker = false

  //A text prompt for getting gold coins
  const getCoinsText = new UIText(getCoin)
  getCoinsText.value = "Congrats on receiving a MultiverseDAO Medal!!"
  getCoinsText.font = new Font(Fonts.SansSerif_Heavy)
  getCoinsText.fontSize = 23
  getCoinsText.positionX = -50
  getCoinsText.positionY = -60
  getCoinsText.color = new Color4(255, 255, 255, 1)
  getCoinsText.outlineWidth = 0.3
  getCoinsText.outlineColor = new Color4(0,0,0,1)
  getCoinsText.visible = false

  const suppermanText = new UIText(getCoin)
  suppermanText.value = "You have completed the task. Next, please click \nthe jump page to enter the skin purchase interface."
  suppermanText.font = new Font(Fonts.SansSerif_Heavy)
  suppermanText.fontSize = 23
  suppermanText.positionX = -50
  suppermanText.positionY = -70
  suppermanText.color = new Color4(255, 255, 255, 1)
  suppermanText.outlineWidth = 0.3
  suppermanText.outlineColor = new Color4(0,0,0,1)
  suppermanText.visible = false

  const helpText = new UIText(getCoin)
  helpText.value = "Welcome to the MultiverseDAO reception hall, you will need to go to the MultiverseDAO official\nwebsite, Twitter, Discord, Opensea links respectively to get 4 commemorative medals, and finally,\nyou need to complete the task by visiting the statue. For those who complete the task, each will\nreceive a 'MD Shuttle Hall' commemorative NFT, and we will draw 10 lucky people, each of whom\nowns a piece of MultiverseDAO land."
  helpText.font = new Font(Fonts.SansSerif_Heavy)
  helpText.fontSize = 14
  helpText.positionX = -160
  helpText.positionY = -85
  helpText.color = new Color4(255, 255, 255, 1)
  helpText.outlineWidth = 0.3
  helpText.outlineColor = new Color4(0,0,0,1)
  helpText.visible = false
  
export function canvas() {
  coinRect.visible = true
  getCoinsText.visible = true
  suppermanText.visible = false
  helpText.visible = false
  coins++
  if (coinsText != null){
    if (coins >= maxCoin){
      coinsText.value = "visit the statue!"
      coinsText.positionX = -10
    }else{
      coinsText.value = coins + "/" + maxCoin
    }
  }
}

export function supperManRest() {
  coinRect.visible = true
  suppermanText.visible = true
  getCoinsText.visible = false
  helpText.visible = false
  coinsText.value = "Complete all missions!"
  coinsText.positionX = -30

executeTask(async () => {
  let data = await getUserData()
  log(data)


  let Url = "https://api.multiversedao.org/common/addWearableInfo.do"

  try {
    let response = await fetch(Url, {
      method: "POST",
      body: JSON.stringify(data),
    })
    let json = await response.json()
    log(json)

  } catch {
    log("failed to reach URL")
  }
})

}

export function help(){
  coinRect.visible = true
  getCoinsText.visible = false
  suppermanText.visible = false
  helpText.visible = true
}