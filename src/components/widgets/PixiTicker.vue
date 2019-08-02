<template>
  <div :id="pwid" :style="'width:' + (properties.value.toString().split('').length * properties.size * 0.58).toString() + 'px;height:' + (properties.size * 1.2).toString() + 'px;'" class="pixi-ticker resizable-chart">
    <div></div>
  </div>
</template>
<script>
import PixiManager from '../pixi/PixiManager.js'
import Ticker from '../pixi/TIcker.js'
import WidgetUtils from '../utils/WidgetUtils.js'
export default {
  props: ['chartdata', 'colors', 'textcolor', 'title', 'hovertitle', 'sig', 'properties', 'transition'],
  data () {
    return {
      pwid: WidgetUtils.generateID()
    }
  },
  mounted: function () {
    var self = this
    var pm = new PixiManager().init(document.getElementById(self.$data.pwid).getElementsByTagName('div')[0], self.properties.value.toString().split('').length * self.properties.size * 0.58, self.properties.size * 1.2, 'transparent')
    var ticker = new Ticker(pm, {content: self.properties.value}, {fontSize: self.properties.size, fill: self.properties.color, fontFamily: self.properties.font, align: 'left', fontWeight: 'bold'}).getContainer()
    pm.app.stage.addChild(ticker)
    ticker.x = self.properties.size * (0.58 / 2)
  }
}
</script>
<style lang="scss" scoped>

</style>
