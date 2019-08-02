import {TweenLite, Elastic} from 'gsap'
function Ticker (pm, junction, style) {
  // var style = {fontFamily: 'Helvetica', fontWeight: 'bold', fontSize: 30, fill: 0x000000, align: 'left'}
  this.getContainer = function () {
    return container
  }
  var container = new pm.PIXI.Sprite()
  var slots = junction.content.toString().split('')
  // var cols = []
  var baseHeight = style.fontSize * 1.2
  var baseWidth = style.fontSize * 0.58
  var masker = pm.createRect({x: baseWidth * -0.5, y: 0, width: baseWidth * slots.length, height: baseHeight, color: 0x000000})
  container.addChild(masker)
  for (var i = 0; i < slots.length; i++) {
    var slotSprite = new pm.PIXI.Sprite()
    for (var j = 0; j < 10; j++) {
      var uptxt = new pm.PIXI.Text(j.toString(), style)
      uptxt.y = (baseHeight * j) - baseHeight * 10
      uptxt.x = uptxt.width * -0.5
      slotSprite.addChild(uptxt)
      uptxt.mask = masker
      var txt = new pm.PIXI.Text(j.toString(), style)
      txt.y = baseHeight * j
      txt.x = txt.width * -0.5
      slotSprite.addChild(txt)
      txt.mask = masker
      var downtxt = new pm.PIXI.Text(j.toString(), style)
      downtxt.y = Number(baseHeight * j) + Number(baseHeight * 10)
      downtxt.x = downtxt.width * -0.5
      slotSprite.addChild(downtxt)
      downtxt.mask = masker
    }
    slotSprite.x = baseWidth * i
    TweenLite.to(slotSprite, Number(1.3) + Number(Math.random() * 0.5), {y: baseHeight * Number(slots[i]) * -1, delay: 0.5, ease: Elastic.easeOut})
    container.addChild(slotSprite)
  }
}
export default Ticker
