<template>
  <div :style="WidgetUtils.renderStyle(widget.properties)">
    <textwidget v-if="widget.type == 'text'" :content="widget.properties.text"></textwidget>
    <imagewidget v-if="widget.type == 'image'"  :content="widget.properties.src"></imagewidget>
    <guagewidget v-if="widget.type == 'guage'" :chartdata="widget.chartdata" :colors="widget.colors" :textcolor="widget.properties.color" :title="widget.properties.text" sig="guage1"></guagewidget>
    <piewidget v-if="widget.type == 'pie'" :chartdata="widget.chartdata" :colors="widget.colors" :textcolor="widget.properties.color" :title="widget.properties.text" :hovertitle="widget.properties.text" sig="pie1" :legend="widget.properties.legend"></piewidget>
    <pixiticker v-if="widget.type == 'ticker'" :properties="widget.properties"></pixiticker>
    <blockwidget v-if="widget.type == 'block'" :color="widget.properties.color"></blockwidget>
    <svgticker v-if="widget.type == 'svg_ticker'" :color="widget.properties.color" :val="widget.properties.val" :width="widget.properties.width"></svgticker>
  </div>
</template>
<script>
import WidgetUtils from './utils/WidgetUtils.js'
import TextWidget from './widgets/TextWidget.vue'
import ImageWidget from './widgets/ImageWidget.vue'
import GuageWidget from './widgets/GuageWidget.vue'
import PieWidget from './widgets/PieWidget.vue'
import PixiTicker from './widgets/PixiTicker.vue'
import BlockWidget from './widgets/BlockWidget.vue'
import SVGTicker from './widgets/SVGTicker.vue'
export default {
  components: {
    textwidget: TextWidget,
    imagewidget: ImageWidget,
    guagewidget: GuageWidget,
    piewidget: PieWidget,
    pixiticker: PixiTicker,
    blockwidget: BlockWidget,
    svgticker: SVGTicker
  },
  props: ['widget', 'section', 'index', 'zone'],
  data () {
    return {
      WidgetUtils: WidgetUtils
    }
  },
  watch: {
    zone: function () {
      var self = this
      if (this.zone > -1) {
        WidgetUtils.initialise(self.widget.properties, self.widget.transition, this.zone)
      }
    }
  },
  mounted: function () {
    var self = this
    WidgetUtils.initialise(self.widget.properties, self.widget.transition, this.zone)
  }
}
</script>
<style lang="scss" scoped>

</style>
