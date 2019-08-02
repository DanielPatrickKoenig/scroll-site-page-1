<template>
  <ul class="svg-ticker-list" v-if="offsets.length > 0">
    <li :style="'width:'+(width / vals.length).toString()+'px;left:'+i*(width/vals.length)+'px;margin-top:-'+offsets[i].top+'px;'" v-for="(v, i) in vals" :key="'number_row+'+i">
      <numberrow :width="width / vals.length" :basesize="baseSize" :color="color"></numberrow>
      <numberrow :width="width / vals.length" :basesize="baseSize" :color="color"></numberrow>
    </li>
  </ul>
</template>
<script>
import NumberRow from './widgetparts/NumberRow.vue'
import {TweenLite, Elastic} from 'gsap'
export default {
  components: {
    numberrow: NumberRow
  },
  props: ['val', 'color', 'width'],
  data () {
    return {
      vals: this.val.toString().split(''),
      src: '../src/assets/number_cols.svg',
      offsets: [],
      baseSize: {
        width: 24,
        height: 440
      }
    }
  },
  mounted: function () {
    var self = this
    var baseSlot = self.$data.baseSize.height / 10
    var slotSize = ((this.width / self.$data.vals.length) / this.$data.baseSize.width) * baseSlot
    for (var i = 0; i < self.$data.vals.length; i++) {
      self.$data.offsets.push({top: 0})
      TweenLite.to(self.$data.offsets[i], (Math.random() * 1.2 + 1.5), {top: Number(self.$data.vals[i]) * slotSize, delay: 0.6, ease: Elastic.easeOut})
    }
  }
}
</script>
<style lang="scss" scoped>
ul.svg-ticker-list{
  overflow: hidden;
  padding: 0;
  margin:0;
  position: relative;
  > li{
    padding:0;
    margin:0;
    float:left;
    position:absolute;
    display:inline-block;
    > svg{
      width: 100%;
    }
  }
}
</style>
